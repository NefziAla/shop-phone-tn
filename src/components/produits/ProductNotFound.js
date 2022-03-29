import styled from "styled-components";
import { mobile } from "../../responsive";
import NotFound from "./images/notFound.png";
const Wrapper = styled.div`
  padding: 30px;
  ${mobile({ padding: "10px" })};
`;
const CartVide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;justify-content: center;text-align:center;


`;
const ImageVide = styled.img`
  width: 30%;
`;
const Vide = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TitleOne = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Ptitle = styled.p`
  text-align: center;
  line-height: 1rem;
`;

const ProductNotFound = () => {
 
  return (
      <Wrapper>
          <CartVide>
            <ImageVide src={NotFound} alt="" />
            <Vide>
              <TitleOne>Aucun résultat</TitleOne>
              <Ptitle>
              Essaie en sélectionnant d'autres filtres
              </Ptitle>
            </Vide>
          </CartVide>
          </Wrapper>
  );
};

export default ProductNotFound;
