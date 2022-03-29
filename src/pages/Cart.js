import { Add, DeleteOutlineOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import imageAvatar from "../assets/avatar.png";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { animateScroll as scroll } from "react-scroll";
import { decreaseCart, deleteProducts, increaseCart } from "../redux/cartRedux";
import { Button as ButtonM } from "@material-ui/core";
import PanierVide from "./images/cartvide.png";
const Container = styled.div`
  margin-top: 130px;
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
const CartVide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageVide = styled.img`
  width: 15%;
`;
const Vide = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TitleOne = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Ptitle = styled.p`
  text-align: center;
  line-height: 1rem;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
`;

const ProductColor = styled.div`
  border: 1.5px solid black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const Summary = styled.div`
  flex: 1;
  border: 2px solid #6200ea;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0d47a1;
  color: white;
  font-weight: 600;
  margin-top: -10px;
`;
const KEY =
  "pk_test_51KFgIDCgP4h51at9ytsES0pY7NbzHyjJB2Wzh8kB9Mn6isu9yvipQWorqS7Sjs2xab1lfAQB0hfw1ncnZuu1LHAT00TVAah9J4";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
     setStripeToken(token)
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res =   await  userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
        history.push("/success", { data: res.data });
      } catch {}
    };

    stripeToken &&makeRequest()
  }, [stripeToken, cart.total, history, user]);
  const handleDelete = (product) => {
    dispatch(deleteProducts(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(increaseCart(product));
  };
  const toggoleUp = () => {
    history.push("/");
    scroll.scrollToBottom();
  };
 
  return (
    <Container>
      <Wrapper>
        <Title>PANIER</Title>
        <Top>
          <TopButton onClick={toggoleUp}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Votre Panier({cart.qty})</TopText>
            <TopText>List De Produits ({cart.qty})</TopText>
          </TopTexts>
          <ButtonM variant="contained" color="primary" style={{ padding: 10, fontWeight:600 }}>PAYEMENT</ButtonM>
        </Top>
        {cart.products.length === 0 ? (
          <CartVide>
            <ImageVide src={PanierVide} alt="" />
            <Vide>
              <TitleOne>Panier vide</TitleOne>
              <Ptitle>
                Ton panier est encore vide, découvre tout ce que nous avons pour
                toi
              </Ptitle>
            </Vide>
            <ButtonM variant="contained" color="primary" style={{ padding: 10, fontWeight:600 }}  onClick={toggoleUp}>Découvrir</ButtonM>

          </CartVide>
        ) : (
          <Bottom>
            <Info>
              {cart.products?.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title.toUpperCase()}
                      </ProductName>
                      <ProductId>
                        <b>Categorie:</b> {product.title.split(' ')[0]}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Sim:</b> {product.sim}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove
                        color="secondary"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDecreaseCart(product)}
                      />
                      <ProductAmount>{product.qty}</ProductAmount>
                      <Add
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => handleIncreaseCart(product)}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      {product.price * product.qty},00 TND
                    </ProductPrice>
                    <span onClick={() => handleDelete(product)}>
                      <DeleteOutlineOutlined
                        style={{
                          color: "#dd1717",
                          cursor: "pointer",
                          marginBottom: "10px",
                        }}
                      />
                    </span>
                  </PriceDetail>
                </Product>
              ))}
            </Info>

            <Summary>
              <SummaryTitle>RÉCAPITULATIF DE LA COMMANDE</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total},00 TND</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Frais de livraison</SummaryItemText>
                <SummaryItemPrice>5.90 TND</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Remise sur l'expédition</SummaryItemText>
                <SummaryItemPrice>-5.90 TND</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total},00 TND</SummaryItemPrice>
              </SummaryItem>

           {user.currentUser!==null &&   <StripeCheckout
                name="Shop Site"
                image={imageAvatar}
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total},00 TND`}
                amount={cart.total * 100 * 0.34}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>}
              {user.currentUser===null &&  <Button onClick={()=>history.push('/login')}>CHECKOUT NOW</Button> }
            </Summary>
          </Bottom>
        )}
      </Wrapper>
    </Container>
  );
};

export default Cart;
