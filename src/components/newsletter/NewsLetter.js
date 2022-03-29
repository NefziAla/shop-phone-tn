import { Send } from "@material-ui/icons";
import React from "react";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./style";
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Recevez des mises à jour en temps opportun de vos produits préférés.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
