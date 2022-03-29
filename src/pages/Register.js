import { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import {useDispatch}from"react-redux"
const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 90px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
      rgba(100, 100, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/4114789/pexels-photo-4114789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
    width: 70%;
    height  :30% ;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
  }
  ${mobile({ width: "90%",height:'auto' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #2962ff;
  color: white;
  cursor: pointer;
`;
const Error =styled.span`
display: flex;justify-content: center;align-items: center;
text-align:center ;
color: red;
width: 100%;
`;
const Register = () => {
  const dispatch=useDispatch()
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
const[password,setPassword]=useState('')
const [isSubmittig,setIsSub]=useState(false)

  const handleregister=(e)=>{
    e.preventDefault()
    setIsSub(true)
    register(dispatch,{nom,prenom,username,email,password})
  
  }
  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN NOUVEAU COMPTE</Title>
        <Form>
          <Input placeholder="Nom"  onChange={(e)=>setNom(e.target.value.toLowerCase())}/>
          <Input placeholder="lPrénom"  onChange={(e)=>setPrenom(e.target.value.toLowerCase())}/>
          <Input placeholder="Nom d'utilisateur"  onChange={(e)=>setUsername(e.target.value.toLowerCase())}/>
          <Input placeholder="Email"  onChange={(e)=>setEmail(e.target.value.toLowerCase())} type="email" required/>
          <Input placeholder="Mot de Passe" type={"password"} onChange={(e)=>setPassword(e.target.value.toLowerCase())}/>
          <Agreement>
          En créant un compte, je consens au traitement de mes données personnelles
            données conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>
          </Agreement>
          <Button onClick={handleregister}>CRÉER</Button>
          {(isSubmittig && (!nom || !username || !prenom || !email || !password ))  && <Error>Tapez des Informations Valide!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
