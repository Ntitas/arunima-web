import Head from "next/head";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Row>
      <Col sm="auto">
        <h1>Hello World!</h1>
      </Col>
    </Row>
  );
}
