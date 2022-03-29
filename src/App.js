import { BrowserRouter as Router,Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import WishList from "./pages/WishList";
import { useState } from "react";
import { AppBar } from "@material-ui/core";
import Announcement from "./components/Announcement/Announcement";
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
import { makeStyles } from "@material-ui/core";
import IconScroll from "./components/scrollTop/IconScroll";
const useStyles = makeStyles({

  appBar:{
    boxShadow:'0px 0px 0px 0px',
  }


})
function App() {
  const classes=useStyles()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <AppBar className={classes.appBar}>
        <Announcement />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar isOpen={isOpen} toggle={toggle} />
      </AppBar>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/products/:category"}>
          <ProductsList />
        </Route>
        <Route path={"/product/:id"}>
          <Product />
        </Route>
        <Route path={"/wishlist"}>
          <WishList />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
        <Route path={"/success"}>
          <Success />
        </Route>
        <Route path={"/login"}>{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path={"/register"}>
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
      <Footer />
      <IconScroll/>
    </Router>
  );
}

export default App;
