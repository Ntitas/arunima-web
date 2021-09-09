import Head from "next/head";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Slider from "../components/slider";

export default function Home() {
  return (
    <Container className="mt-3 min-vh-100">
      <Row>
        <Col sm="auto">
          <Slider />
        </Col>
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
