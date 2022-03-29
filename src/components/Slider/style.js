import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 95px;
@media screen and (max-width:912px){
  display:none ;
}
 
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:#f50057;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
 

`;
export const ImageContainer = styled.div`

height:100%;
  flex: 1;
  justify-content: center;
  @media screen and (max-width:1024px){
    width: 350px;
  }

`;
export const Image = styled.img`
  height: 500px;
  padding: 0 150px 50px 100px;
  position: relative;
  top: 60px;left: 50px;
  &:hover{
    cursor:grab ;
  }
  @media screen and (max-width:1024px){
    padding: 0 150px 50px 0px;
  }
  @media screen and (max-width:920px){
    padding: 450px 150px 50px 0px;
  }
  @media screen and (max-width:820px){
    width: 300px;
    padding: 350px 300px 50px 0px;
  }
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
 
`;

export const Title = styled.h1`
  font-size: 70px;
  &:hover{
    cursor:grab ;
  }
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  width:95%;
  &:hover{
    cursor:grab ;
  }
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #6200ea;
  cursor: pointer;
  color: whitesmoke;
`;
