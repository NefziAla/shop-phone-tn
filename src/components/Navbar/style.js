import styled from "styled-components";
import { mobile } from "../../responsive";
import {ReactComponent as OlShp} from "../../assets/online-shop.svg"

export const Container = styled.div`
  height: 60px;
  background-color: #1976d2;
  color: white;
  ${mobile({ height: "50px" })};
`;
export const Language = styled.span`
  font-size: 12;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;
export const Input = styled.input`
  height: 1.1rem;
  background-color: whitesmoke;
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;
export const Logo = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })};
  @media screen and (max-width:768px){
  position:relative;top:10px;right:5px;
}
`;

export const LogPhone =styled(OlShp)`
position:relative ;top: -5px;left:3px;
transform:rotate(20deg) ;
@media screen and (max-width:820px){
  top:0px; left:0px;
}
 @media screen and (max-width:768px){
  top:-5px;
} 
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 920px) {
    display: none;
  }
  ${mobile({ display: "none" })};
`;
export const Center = styled.div`
  flex: 1;
  @media screen and (max-width: 920px) {
    position: relative;
    top: 0;
    right: 150px;
  }
  @media screen and (max-width: 820px) {
    position: relative;
    top: 0;
    right: 110px;
  }
  ${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0px -90px 0px 130px",
  })};
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ display: "none" })};
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  @media screen and (max-width: 920px) {
    font-weight: 1000;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

export const MobileIcon = styled.div`
  display: none;
  ${mobile({ display: "flex", cursor: "pointer" })};
`;

export const DivOne = styled.div`
  display: ${(props) => (props.openDec ? "flex" : "none")};
  position: fixed;
  top: 82px;
  right: 35px;
  background-color: white;
  color: black;
  width: 8rem;
  height: 3.5rem;
  border-radius: 20% 0% 20% 5%;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 2px 3px 5px 0px #424141;
  z-index: 1;
  &:hover {
    background-color: #e3dede;
  }
`;
export const Tip = styled.p`
font-size:1.1rem ;
font-weight: bold;
  text-transform: uppercase;

`;
