import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const BookMart = styled.span`
  width: 80px;
  height: 80px;
  font-size: 3rem;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #9abc66;
  background-color: #f8faf5;
`;
const Succ = styled.h1`
  color: #9abc66;
  margin-top: 10px;
`;
const Par = styled.p`
  color:black;
  
  font-size: 20px;
  margin: 0;
  text-align:center ;
  font-weight: bold;
`;
const Container=styled.div`
height: 80vh;
display: flex;
flex-direction:column ;
justify-content: center;
align-items: center;
background:
    url("https://images.pexels.com/photos/6928872/pexels-photo-6928872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
const Success = () => {
  const history=useHistory()
  return (
    <Container>
      <br/><br/><br/><br/>
      <BookMart>✓</BookMart>
      <Succ>Succès</Succ>
      <Par>Nous avons reçu votre demande d'achat!</Par>
      <Par>Nous vous contacterons sous peu..</Par>
      <Button variant="contained" color="primary" size="large" style={{ padding: 10, marginTop: 20 }}  onClick={()=>history.push('/products/iphone')}>Continuer Shopping</Button>
    </Container>
  );
};

export default Success;
