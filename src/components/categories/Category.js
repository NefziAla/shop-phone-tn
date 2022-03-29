import React from "react";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { Container } from "./style";

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
