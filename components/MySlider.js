import Image from "next/image";
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../public/images/slide1.jpg";
import sliderImage2 from "../public/images/slide2.jpg";
import sliderImage3 from "../public/images/slide3.jpg";
import sliderImage4 from "../public/images/slide4.jpg";

const MySlider = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <Image
          className="d-block rounded shadow"
          src={sliderImage1}
          alt="First slide"
          width={1400}
          height={700}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage2}
          alt="Secound slide"
          width={1400}
          height={700}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage3}
          alt="Third slide"
          width={1400}
          height={700}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block   rounded shadow"
          src={sliderImage4}
          alt="Fourth slide"
          width={1400}
          height={700}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MySlider;
