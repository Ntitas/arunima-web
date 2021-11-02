import Image from "next/image";
import { Carousel } from "react-bootstrap";
import sliderImage from "../public/images/banner.jpg";
import sliderImage1 from "../public/images/banner4.jpg";
import sliderImage2 from "../public/images/banner2.jpg";
import sliderImage5 from "../public/images/banner5.jpg";

const MySlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block rounded shadow"
          src={sliderImage}
          alt="First slide"
        />

        <Carousel.Caption>
          <h1>Welcome to Arunima Group</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage1}
          alt="Secound slide"
          width={1400}
          height={655}
        />

        <Carousel.Caption>
          <h1></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage5}
          alt="Secound slide"
          width={1400}
          height={655}
        />

        <Carousel.Caption>
          <h1>Welcome to Arunima Group</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage2}
          alt="Secound slide"
          width={1400}
          height={655}
        />

        <Carousel.Caption>
          <h1>Welcome to Arunima Group</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MySlider;
