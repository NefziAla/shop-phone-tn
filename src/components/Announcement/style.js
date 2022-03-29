import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  height: 30px;
  background-color: #0d47a1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;

`;
export const TitOne=styled.span`
 @media screen and (max-width: 920px) {
    font-weight: 1000;
  }
  ${mobile({ display: "none" })};

`;
export const TitTow=styled.span`
display: none;
${mobile({ display: "flex" })};

`;

