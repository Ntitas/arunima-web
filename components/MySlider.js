import Image from "next/image";
import { Carousel } from "react-bootstrap";
import sliderImage from "../public/images/landing.jpg";
import sliderImage2 from "../public/images/banner2.jpg";
import sliderImage5 from "../public/images/banner5.jpg";

const MySlider = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <Image
          className="d-block rounded shadow"
          src={sliderImage2}
          alt="First slide"
          width={1400}
          height={655}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage5}
          alt="Secound slide"
          width={1400}
          height={655}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage}
          alt="Secound slide"
          width={1400}
          height={655}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MySlider;
