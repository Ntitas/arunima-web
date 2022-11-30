import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import knitting from "../public/images/knitting.png";
import woven from "../public/images/woven.png";
import denim from "../public/images/denim.png";

const Widget = () => {
  return (
    <Row className="mb-3">
      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <i
          className="bi bi-building"
          style={{ fontSize: 64, color: "#0d6efd" }}
        ></i>
        <p className="text-center text-muted">Founded in</p>
        <p className="text-center fw-bold">2004</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <i
          className="bi bi-people"
          style={{ fontSize: 64, color: "#198754" }}
        ></i>
        <p className="text-center text-muted">Total Employees</p>
        <p className="text-center fw-bold">5000 approx.</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <i
          className="bi bi-cash-coin"
          style={{ fontSize: 64, color: "#ca6510" }}
        ></i>
        <p className="text-center text-muted">Annual Turn Over</p>
        <p className="text-center fw-bold">58 millions</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <Image src={knitting} alt="Knitting" />
        <p className="text-center text-muted">Knit Wear</p>
        <p className="text-center fw-bold">1,000,000/month</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <Image src={woven} alt="woven" />
        <p className="text-center text-muted">Woven Bottom</p>
        <p className="text-center fw-bold">5,50,000/month</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <Image src={denim} alt="woven" />
        <p className="text-center text-muted">Denim</p>
        <p className="text-center fw-bold">3,50,000/month</p>
      </Col>
    </Row>
  );
};

export default Widget;
