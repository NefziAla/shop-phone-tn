import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProduct } from "../redux/wishlistRedux";
import FvorisVide from "./images/favorisVide.png";
import {ReactComponent as FavorisItem} from "./images/favoris.svg"
import { animateScroll as scroll } from "react-scroll"; 
import { Button } from "@material-ui/core";
const Container = styled.div`
  margin-top: 130px;
  height: auto;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "none" : "2px solid #6200ea"};
  background-color: ${(props) =>
    props.type === "filled" ? "#0d47a1" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "flex", flexDirection: "column" })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex; 

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:25px ;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  object-fit:contain ;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

const ProductColor = styled.div`
border:1.5px solid black;
margin-left:1% ;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ColorP = styled.div`
display:flex ;
`;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartVide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageVide = styled.img`
  width: 20%;
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
const In = styled.p`
  color: green;
  text-transform: uppercase;
  font-weight: bold;
`;
const Hors = styled.p`
  color: red;
  text-transform: uppercase;
  font-weight: bold;
`;
const WishList = () => {
  const history=useHistory()
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  };
  const toggoleUp = () => {
    history.push('/')
    scroll.scrollToBottom();
  };
  return (
    <Container>
      <Wrapper>
        <Title>FAVORIS</Title>
        <Top>
          <TopButton  onClick={toggoleUp}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Votre Favoris({wish.wishList.length})</TopText>
            <TopText>List De Produits ({wish.wishList.length})</TopText>
          </TopTexts>
        </Top>
        {wish.wishList.length === 0 ? (
          <CartVide>
            <ImageVide src={FvorisVide} alt="" />
            <Vide>
              <TitleOne>Tu n'as pas de favoris</TitleOne>
              <Ptitle>
                Sais-tu que nous renouvelons notre collection toutes les
                semaines ?
              </Ptitle>
            </Vide>
            <Button variant="contained" color="secondary" style={{ padding: 10, fontWeight:600 }}  onClick={toggoleUp}>Afficher nouveautés</Button>
          </CartVide>
        ) : (
          <Bottom>
            <Info>
              {wish.wishList?.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title.toUpperCase()}
                      </ProductName>
                      <ProductId>
                        <b>Description: </b> {(product.desc).slice(0,56)}...
                      </ProductId>
                      <ColorP>
                        {product.color.map((c) => ( c!=="ALL"&&
                          <ProductColor color={c} key={Math.random()*10.2548}/>
                        ))}
                      </ColorP>
                      {product.inStock ? (
                        <In>En Stock</In>
                      ) : (
                        <Hors>Hors Stock</Hors>
                      )}
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <FavorisItem onClick={() => handleDelete(product)} style={{cursor:"pointer"}}/>
                  </PriceDetail>
                </Product>
              ))}
            </Info>
          </Bottom>
        )}
      </Wrapper>
    </Container>
  );
};

export default WishList;
