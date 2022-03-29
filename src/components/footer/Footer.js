import { animateScroll as scroll } from "react-scroll";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { ListItems } from "../../data";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,LogPhones
} from "./style";
import ScrollToTop from "../scrollTop/ScrollToTop";

const Footer = () => {
  const toggoleUp=()=>{
    scroll.scrollToTop()
  }
  return (
    <Container>
      <Left>
        <Logo to='/'  onClick={toggoleUp}><LogPhones/>PHONE</Logo>
        <Desc>
        Découvrez plus de 2000 marques mode et beauté
         et profitez d’une livraison rapide ainsi que des retours gratuits.
        Essayez d'abord, payez après
          Livraison rapide, retour gratuit
           Satisfait ou remboursé sous 100 jours
        </Desc>
        <SocialContainer>
          <a href="https://www.facebook.com" target="_blank">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>{" "}
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>{" "}
          </a>
          <a href="https://www.pinterest.com" target="_blank">
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>{" "}
          </a>
        </SocialContainer>
      </Left>
      <Center>
        {" "}
        <Title>Liens Utiles</Title>
        <List>
          {ListItems.map((item) => (
            <ListItem to={item.to} key={item.id} onClick={toggoleUp} >{item.name}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 215 Testour-Beja TUNIS
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +214 94 077 134
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> alanefzi7@gmail.com
        </ContactItem>
        <Payment src="https://shooting-in-poland.com/images/creditcards.png" />
      </Right>
      <ScrollToTop/>
    </Container>
  );
};

export default Footer;
