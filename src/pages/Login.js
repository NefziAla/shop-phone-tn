import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {  login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import {useHistory} from "react-router-dom"
const Container = styled.div`
  width: 99.99%;
  height: 71.2vh;
  margin-top: 90px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(100, 100, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ marginTop: "80px" })};

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media screen and (max-width:912px){
    width: 60%;

  }
  ${mobile({ width: "85%",height:'auto' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #2962ff;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
   color: #2962ff;
   cursor: not-allowed;
  }
`;
const Error =styled.span`
text-align:center ;
color: red;
`;
const Link = styled.a`
text-align:center ;
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [isSubmittig,setIsSub]=useState(false)
  const dispatch=useDispatch()
  const {isFetching,error}=useSelector(state=>state.user)
const history=useHistory()
const handleLogin=(e)=>{
  e.preventDefault()
  setIsSub(true)
  login(dispatch,{username,password})

}
  return (
    <Container>
      <Wrapper>
        <Title>S'IDENTIFIER</Title>
        <Form>
          <Input placeholder="Nom d'utilisateur"  onChange={(e)=>setUsername(e.target.value.toLowerCase())}/>
          <Input placeholder="Mot de Passe" type="password"  onChange={(e)=>setPassword(e.target.value.toLowerCase())}/>
          <Button onClick={handleLogin} disabled={isFetching}>CONNEXION</Button>
          {(isSubmittig && error)  && <Error>Tapez Nom d'utilisteur (ou/et) Mot de passe Valide!</Error>}
          <Link onClick={()=>history.push("/register")}>CRÉER NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
