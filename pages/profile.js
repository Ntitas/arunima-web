import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">Company Profile</h3>

      <Row className="mb-3">
        <Col className="rounded shadow-sm bg-white p-5 me-3"></Col>
        <Col className="rounded shadow-sm bg-white p-5"></Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="rounded shadow-sm bg-white p-5 me-3"></Col>
        <Col className="rounded shadow-sm bg-white p-5"></Col>
      </Row>
    </Container>
  );
};

export default About;
