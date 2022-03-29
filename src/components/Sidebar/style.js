import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 60%;
  margin-top: 80px;
  background:  #90caf9;
  display: flex;
  align-items: normal;
  top: 0;
  right: 0;
  transition: all 0.8s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;



export const SidebarMenu = styled.ul`
width: 100%;
 height: 90%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
  @media screen and (max-width: 480px) {
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #263238;
  cursor: pointer;
font-weight: bold;
  &:hover {
    font-weight: 1000;
    color: whitesmoke;
    transition: 0.2s ease-in-out;
  }
`;

