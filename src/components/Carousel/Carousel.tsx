import { Carousel } from "react-bootstrap";
import { Container, ImageWrapper } from "./styles";
import { reviews } from "./data";

const CarouselImages: React.FC = () => {
  return (
    <Container>
      <Carousel>
        {reviews.map((review) => (
          <Carousel.Item key={review.id} interval={3000}>
            <ImageWrapper src={review.image} className={review.className} alt={review.alt} />
            <Carousel.Caption>
              <h3>{review.caption}</h3>
              <p>{review.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselImages;
