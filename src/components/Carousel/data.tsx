import StarWarsImg1 from "../../assets/starWars1.jpg"
import StarWarsImg2 from "../../assets/starWars2.jpg"
import StarWarsImg3 from "../../assets/starWars3.jpg"

interface CarouselProps {
    id: number;
    className: string;
    image: string;
    alt: string;
    caption: string;
    description: string;
}

export const reviews: CarouselProps[] = [
    {
      id: 1,
      className:"d-block w-100",
      image: StarWarsImg1,
      alt:"First slide",
      caption: "First slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      className:"d-block w-100",
      image: StarWarsImg2,
      alt:"Second slide",
      caption: "Second slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      className:"d-block w-100",
      image: StarWarsImg3,
      alt:"Third slide",
      caption: "Third slide label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    }
  ];