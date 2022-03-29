import styled from "styled-components";
export const Container = styled.div`
  padding: ${props=>props.cat ? '0px':'0px'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow:hidden ;
  @media screen and (max-width: 280px) {
    padding:20px;
  };
 
`;
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
 
`;
export const ContainerP = styled.div`
border:1px solid black;
  margin: 15px;
  width:300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  };
  @media screen and (max-width: 1280px) {
    width: 290px;
  };
  @media screen and (max-width: 1024px) {
    width: 245px;
    margin: 5px;

  };
  @media screen and (max-width: 912px) {
    width: 216px;
    height:300px ;

  };
  @media screen and (max-width: 820px) {
    width: 300px;
    height:350px ;

    margin:25px ;

  };
  @media screen and (max-width: 280px) {
    min-width: 230px;
  };
`;


export const Image = styled.img`
  width:100%;
  height: 100%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
