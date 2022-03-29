import React from "react";
import Category from "../components/categories/Category";

import NewsLetter from "../components/newsletter/NewsLetter";
import Products from "../components/produits/Products";
import Slider from "../components/Slider/Slider";
import SliderBas from "../components/SliderBas/SliderBas";

const Home = () => {
 

  return (
    <>
      
      <Slider />
      <Category />
      <Products />
     
      <hr/>
      <SliderBas/>
      <NewsLetter />
    </>
  );
};

export default Home;
