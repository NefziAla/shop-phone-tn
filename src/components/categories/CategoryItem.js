import React from "react";
import { Link } from "react-router-dom";
import { Button, ContainerItem, Image, Info, Title } from "./style";

const CategoryItem = ({ item }) => {
  return (
    <ContainerItem>
      <Link to={`/products/${item.cat}`}>  
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>VOIR</Button>
      </Info>
      </Link>
    </ContainerItem>
  );
};

export default CategoryItem;
