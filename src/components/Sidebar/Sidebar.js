import { Badge, IconButton, withStyles } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import { AccountCircle, FavoriteBorder, PersonAddDisabled, PersonAddOutlined,  PersonPin, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
} from "./style";
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
const Sidebar = ({ isOpen, toggle }) => {
  const qty = useSelector((state) => state.cart.qty);
  const qtyw = useSelector((state) => state.wish.qty);
  const user =useSelector(state=>state.user.currentUser)

  const toggoleUp=()=>{
    scroll.scrollToTop()
  }
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logoutUser());
    dispatch(logoutCart());
    dispatch(logoutWish());

  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarMenu>
        {!user ?  <><SidebarLink to="/register" onClick={toggle && toggoleUp}>
           <PersonAddOutlined  style={{marginRight:'5px',width:'60px',height:'60px'}}/>
          </SidebarLink>
          <SidebarLink to="/login" onClick={toggle && toggoleUp}>
           <PersonPin  style={{marginRight:'5px',width:'60px',height:'60px'}}/>
          </SidebarLink></>:<><SidebarLink to="/">
            <StyledBadge 
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <AccountCircle style={{height:'60px',width:"60px"}}/>
            </StyledBadge>
          </SidebarLink>
          <SidebarLink to="/login" onClick={toggle && toggoleUp}>
           <PersonAddDisabled  style={{marginRight:'5px',width:'60px',height:'60px'}}  onClick={Logout}/>
          </SidebarLink>
          </>}
          <SidebarLink to="/wishList" onClick={toggle && toggoleUp}>
          <IconButton >
              <Badge badgeContent={qtyw > 0 ? qtyw : "0"} color="secondary" style={{position:"relative",top:'-20px',left:'52px'}}/>
              <FavoriteBorder  style={{marginRight:'5px',width:'60px',height:'60px'}}/>
            </IconButton>

          </SidebarLink>
          <SidebarLink to="/cart" onClick={toggle && toggoleUp}>
            <IconButton>
              <Badge badgeContent={qty > 0 ? qty : "0"} color="secondary" style={{position:"relative",top:'-20px',left:'50px'}}/>
                <ShoppingCartOutlined  style={{marginRight:'5px',width:'60px',height:'60px'}}/>
          
            </IconButton>
          </SidebarLink>
     
        </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
