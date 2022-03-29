import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/produits/Products";
import { mobile } from "../responsive";
const Container = styled.div``;
const Title = styled.h1`
  margin: 40px;
`;
const FilterContainer = styled.div`
padding: 0px 20px 0px 20px ;
  display: flex;
  justify-content: space-between;
  @media (max-width:280px){
    flex-direction:column ;
  }
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 2px solid #6200ea;
  &:hover {
    cursor: pointer;
  }
  ${mobile({ margin: "10px 0px" })};
`;
const Option = styled.option``;

const ProductsList = () => {
  const location=useLocation()
  const cat =location.pathname.split("/")[2]
  const [filter,setFiltters]=useState({})
  const [sort,setSort]=useState('newest')
  const handleFilters=(e)=>{
    const {value,name}=e.target
    setFiltters({...filter,
      [name]:value
    })
  }
  return (
    <Container>
      <Title>{cat.toUpperCase()} </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrage :</FilterText>{" "}
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
            Couleur
            </Option>
            <Option>ALL</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Gray</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Argent</Option>  
                    </Select>
          <Select name="sim" onChange={handleFilters}>
            <Option disabled >
              SIM
            </Option>
            <Option>ALL</Option>
            <Option>ONE SIM</Option>
            <Option>DOUBLE SIM</Option>
            
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier :</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Prix (asc)</Option>
            <Option value={"desc"}>Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    
      <Products cat={cat} filter={filter} sort={sort}/>
    </Container>
  );
};

export default ProductsList;
