import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media screen and (max-width:912px){
    margin:80px 0px 0px;
}
  ${mobile({
    padding: "0px",
    flexDirection: "column",
    margin: "100px 10px 10px",
  })};
`;
export const ContainerItem = styled.div`
padding:10px;  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.2);
  flex: 1;
  margin: 3px;
  height: 500px;
  position: relative;
  @media screen and (max-width: 920px) {
    height: 400px;
  }
  ${mobile({ height: "400px" })};
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align:center;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #6200ea;
  color: whitesmoke;
  cursor: pointer;
  font-weight: 800;width:25%;height:10%;
  @media screen and (max-width:460px){
    height:15% ;
  }
`;
