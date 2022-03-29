import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import styled from "styled-components";
import { addCart } from "../redux/apiCalls";
import { addProducts } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";
import { mobile } from "../responsive";
const Container = styled.div`
  margin: 100px;
  @media screen and (max-width:1280px){
    margin: 100px 0px 50px 0px ;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: 912px) {
    padding: 10px;
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  margin-top: -40px;
  @media screen and (max-width:912px){
    margin-top:0px
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  ${mobile({ ObjectFit:"contain" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const In = styled.p`
  margin: 20px 0px;
  color: green;
  text-transform: uppercase;
  font-weight: bold;
`;
const Hors = styled.p`
  margin: 20px 0px;
  color: red;
  text-transform: uppercase;
  font-weight: bold;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 59%;
  margin: 30px 0px;
  justify-content: space-between;
  display: flex;
  ${mobile({ width: "100%", display: "flex", justifyContent: "space-evenly" })};
  @media screen and (max-width:300px){
    flex-direction:column ;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  border: ${(props) =>
    props.colors === "" && props.isSubmit
      ? "1.5px solid red"
      : "1.5px solid black"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  margin-right: ${(props) => (props.color === "gray" ? "30px" : "0px")};
`;

const FilterSize = styled.select`
  outline: none;
  margin-left: 10px;
  padding: 5px;
  border: ${(props) =>
    (props.sim === "" || props.sim === "Choisir :") && props.isSubmit
      ? "3px solid red"
      : "3px solid #6200ea"};
  cursor: pointer;

`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ width: "100%" })};
`;
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #6200ea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid #6200ea;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [sim, setSim] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductId = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProductId();
  }, [id]);
  const handleQty = (type) => {
    if (type === "dec") {
      qty === 0 && setQty(qty - 1);
    } else setQty(qty + 1);
  };
  const user=useSelector(state=>state.user.currentUser)
  const userId=user?._id
const productId=id
const quantity=qty
const productName=product.title

  const handleAjout = () => {
      sim !== "" &&
        sim !== "Choisir :" &&
        color !== "" &&
        product.inStock &&
        dispatch(addProducts({ ...product, qty, color, sim }));
        addCart({userId,productId,quantity,productName},dispatch)

  };
  console.log(qty)
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          {product.inStock ? <In>En Stock</In> : <Hors>Hors Stock</Hors>}

          <Price>{product.price},00 TND</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Couleur</FilterTitle>
              {product.color?.map(
                (c) =>
                  c !== "ALL" && (
                    <FilterColor
                      colors={color}
                      color={c}
                      key={c}
                      onClick={() => setColor(c)}
                      isSubmit={isSubmit}
                    />
                  )
              )}
            </Filter>
            <Filter>
              <FilterTitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sim</FilterTitle>
              <FilterSize
                onChange={(e) => setSim(e.target.value)}
                sim={sim}
                isSubmit={isSubmit}
              >
                <FilterSizeOption defaultChecked>Choisir :</FilterSizeOption>
                {product.sim?.map(
                  (s) =>
                    s !== "ALL" && (
                      <FilterSizeOption key={s}>{s}</FilterSizeOption>
                    )
                )}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <Remove
                color="secondary"
                style={{ cursor: "pointer" }}
                onClick={() => handleQty("dec")}
              />
              <Amount>{product.inStock ? qty : 0}</Amount>
              <Add
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => handleQty("inc")}
              />
            </AmmountContainer>

            <Button
              onClick={() => {
                setIsSubmit(true);
                handleAjout();
              }}
            >
              AJOUTER AU PANIER
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
