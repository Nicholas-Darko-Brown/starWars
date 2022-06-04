import React from "react";
import { Carousel } from "react-bootstrap";
import { Container, ImageWrapper } from "./styles";
import StarWarsImg1 from "../../assets/starWars1.jpg"
import StarWarsImg2 from "../../assets/starWars2.jpg"
import StarWarsImg3 from "../../assets/starWars3.jpg"

const CarouselImages: React.FC = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={3000}>
          <ImageWrapper
            className="d-block w-100"
            src={StarWarsImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ImageWrapper
            className="d-block w-100"
            src={StarWarsImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ImageWrapper
            className="d-block w-100"
            src={StarWarsImg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselImages;
