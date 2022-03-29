import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Container } from "./style";
import axios from "axios";
import ProductNotFound from "./ProductNotFound";
import Pagination from "../pagination/Pagination";
const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({ start: 0, end: showPerPage });
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://database-smart-phone.herokuapp.com/api/products?category=${cat}`
            : `https://database-smart-phone.herokuapp.com/api/products`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getAllProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  const onPaginationChange = (start, end) => {
    setPagination({ start, end });
  };
  return (
    <>
      {" "}
      <Container cat={cat}>
        {cat ? (
          filterProducts.length !== 0 ? (
            filterProducts
            ?.slice(pagination.start, pagination.end)
            ?.map((item) => <Product item={item} key={item._id} />)
          ) : (
            <ProductNotFound />
          )
        ) : (
          products?.slice(0,8).map((item) => <Product item={item} key={item._id} cat={cat} style={{margin:"100px"}}/>)
        )}
      </Container>
      <br/><br/>
    { filterProducts.length!==0&& <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={filterProducts.length}
      />}
    </>
  );
};

export default Products;
