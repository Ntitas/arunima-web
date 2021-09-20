import Head from "next/head";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";

import MySlider from "../components/MySlider";
import Widget from "../components/widget";

import bannerPic from "../public/images/banner.jpg";
import logo from "../public/images/logo.png";
import valuesPic from "../public/images/values.png";
import certPic from "../public/images/certifications.png";

export default function Home() {
  return (
    <Container className="mt-3 min-vh-100">
      <Row className="mb-3">
        {/* <Image src={bannerPic} alt="Arunima" className="rounded shadow-sm" /> */}

        <MySlider />
      </Row>

      <h3 className="text-center fw-bold p-3">About Us</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Col sm={8}>
          <p>
            The journey of Arunima Group began as a small venture in a
            two-storied building. Today, its business, in the name of Arunima
            Sports Wear Limited, has evolved into a full-fledged, nine-storied
            establishment working at full capacity. Arunima Group launched with
            woven tops and slowly developed new lines like knitwear and woven
            bottoms.
          </p>
          <p>
            Arunima Group has worked with several well-known/renowned brands
            such as Wrangler, Lee, Nautica, North Face, Timberland, among many
            others. With full technical support from VF engineers, Arunima Group
            has reached its current potential and growing at a significant pace.
            With the industry flourishing, Arunima Group has exciting plans for
            the future with various upcoming projects and developing its current
            ones to reach its full potential.
          </p>
        </Col>
        <Col>
          <Image
            src={logo}
            className="img-fluid rounded shadow"
            alt="About Us"
          />
        </Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Facts</h3>

      <Widget />

      <h3 className="text-center fw-bold p-3">Values</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Image src={valuesPic} alt="Arunima" className="rounded shadow-sm" />
      </Row>

      <h3 className="text-center fw-bold p-3">Videos</h3>

      <Row className="mb-3">
        <Col className="rounded shadow-sm p-3 me-3 bg-white">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wLRamn1SxfM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe>
        </Col>
        <Col className="rounded shadow-sm p-3 bg-white">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wLRamn1SxfM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe>
        </Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Our Clients</h3>

      <Row>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
      </Row>

      <Row>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
        <Col className="rounded shadow-sm m-3 p-5 bg-white"></Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Certifications</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Image src={certPic} alt="Arunima" className="rounded shadow-sm" />
      </Row>
    </Container>
  );
}
