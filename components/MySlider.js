import Image from "next/image";
import { Carousel } from "react-bootstrap";
import sliderImage from "../public/images/banner.jpg";

const MySlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100 rounded shadow"
          src={sliderImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome to Arunima Group</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MySlider;
