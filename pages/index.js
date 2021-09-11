import Head from "next/head";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import BannerPic from "../public/images/banner.jpg";

export default function Home() {
  return (
    <Container className="mt-3 min-vh-100">
      <Row>
        <Image src={BannerPic} alt="Arunima" className="rounded" />
      </Row>

      {/* <Row>
        <Col></Col>
      </Row>

      <Row>
        <Col className="rounded shadow-sm bg-light">Content</Col>
        <Col className="rounded shadow-sm bg-light">Content</Col>
        <Col className="rounded shadow-sm bg-light">Content</Col>
        <Col className="rounded shadow-sm bg-light">Content</Col>
      </Row> */}
    </Container>
  );
}
