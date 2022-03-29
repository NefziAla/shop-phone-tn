import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
  MobileIcon,DivOne,Tip,LogPhone
} from "./style";
import { Badge, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link, useHistory } from "react-router-dom";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { AccountCircle, CancelRounded, FavoriteBorderOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userRedux";
import { logoutCart } from "../../redux/cartRedux";
import { logoutWish } from "../../redux/wishlistRedux";
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
const NavBar = ({ isOpen, toggle }) => {
  const [openDec,setOpenDec]=useState(false)

  const toggoleUp = () => {
    scroll.scrollToTop();
    setOpenDec(false)

  };

  const funcT = () => {
    isOpen && toggle();
  };
  const history=useHistory()
  const qty = useSelector((state) => state.cart.qty);
  const qtyw = useSelector((state) => state.wish.qty);
const user =useSelector(state=>state.user.currentUser)
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logoutUser());
    dispatch(logoutCart());
    dispatch(logoutWish());
    setOpenDec(false)
    history.push('/')
  };
 const handleDec=()=>{
   setOpenDec(!openDec)
 }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={toggoleUp}>

            <Link
              style={{ textDecoration: "none", color: "white" ,fontSize:"1.2rem",position:"relative",top:"-8px"}}
              to="/"
              onClick={funcT}
            >
              <LogPhone/>PHONE
            </Link>
          </Logo>
          {!isOpen ? (
            <MobileIcon onClick={toggle}>
              <DehazeIcon />
            </MobileIcon>
          ) : (
            <MobileIcon onClick={toggle}>
              <CancelRounded />
            </MobileIcon>
          )}
        </Center>
        <Right>
          <MenuItem>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              onClick={toggoleUp}
              to="/register"
            >
              INSCRIPTION
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              onClick={toggoleUp}
              to="/login"
            >
              S'IDENTIFIER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              onClick={toggoleUp}
              to="/wishlist"
            >
              <Badge badgeContent={qtyw > 0 ? qtyw : "0"} color="secondary">
                <FavoriteBorderOutlined />
              </Badge>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              onClick={toggoleUp}
              to="/cart"
            >
              <Badge badgeContent={qty > 0 ? qty : "0"} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
      
         {user && <><MenuItem>
            <StyledBadge onClick={handleDec}
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <AccountCircle style={{height:'30px',width:"30px"}}/>
            </StyledBadge>
             <DivOne openDec={openDec}><Tip onClick={Logout}>Déconexion</Tip></DivOne>
          </MenuItem></>}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
