import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import {
  Arrow,
  Container,
  Desc,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./style";
import { sliderItems } from "../../data";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "Left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("Left")}>
        <ArrowLeftOutlined />
      </Arrow>{" "}
      <Wrapper slideIndex={slideIndex}  >
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer >
              <Image src={item.img} onClick={() => handleClick("Left")}/>
            </ImageContainer>
            <InfoContainer>
              <Title onClick={() => handleClick("Left")}>{item.title}</Title>
              <Desc onClick={() => handleClick("Left")}>{item.desc}</Desc>
              <Button variant="contained" color="secondary" size="large" onClick={() => handleClick("Right")}>NAVIGATION</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("Right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
