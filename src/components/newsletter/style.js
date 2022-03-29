import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  height: 20%;
  background-color: #bbdefb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0px 30px 0px ;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media screen and (max-width: 280px) {
    font-size: 40px;
  }
 
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "90%" })};
`;
export const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #0d47a1;
  color: white;
`;
