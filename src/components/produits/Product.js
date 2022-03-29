import React from "react";
import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { animateScroll as scroll } from "react-scroll"; 
import { ContainerP, Icon, Image, Info } from "./style";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/wishlistRedux";

const Product = ({ item,cat }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const toggoleUp = () => {
    scroll.scrollToTop();
  };
  const handleFavoris = (product) => {
    
    if (user.currentUser !== null) 
    {dispatch(addToCart(product));}
    else {history.push("/login");toggoleUp()}
  };
 
  return (
    <ContainerP key={item._id}>
      <Image src={item.img} />
      <Info>
        <Link to={`/product/${item._id}`}>
          <Icon  onClick={toggoleUp}>
            <ShoppingCartOutlinedIcon />
          </Icon>
        </Link>
        <Icon  >
          <FavoriteBorderOutlined onClick={() => handleFavoris(item)} />
        </Icon>
        <Icon onClick={toggoleUp}>
          <Link to={`/product/${item._id}`} >
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </ContainerP>
  );
};

export default Product;
