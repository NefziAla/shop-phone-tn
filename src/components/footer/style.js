import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import {ReactComponent as OlShp} from "./online-shop.svg"

export const Container = styled.div`
  background-color: #e0f7fa;
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: 1000;
  font-size: 1.5rem;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const LogPhones =styled(OlShp)`
color:black ;
position:relative ;top:-6px;left:4px;
transform:rotate(20deg) ;`;
export const Center = styled.div`
  flex: 1;
  padding: 20;
  ${mobile({ display: "none" })};
`;

export const Title = styled.h3`
  margin-top: 30px;
  margin-bottom: 25px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Right = styled.div`
  flex: 1;
  padding: 2px;
  ${mobile({ backgroundColor: "#fff8f8" })};
`;
export const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
export const Payment = styled.img`
  width: 50%;
`;
