import { Row, Col } from "react-bootstrap";

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
        <i
          className="bi bi-graph-up"
          style={{ fontSize: 64, color: "#d63384" }}
        ></i>
        <p className="text-center text-muted">Knit Wear</p>
        <p className="text-center fw-bold">9,00,000/month</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <i
          className="bi bi-bar-chart"
          style={{ fontSize: 64, color: "#20c997" }}
        ></i>
        <p className="text-center text-muted">Woven Bottom</p>
        <p className="text-center fw-bold">5,50,000/month</p>
      </Col>

      <Col className="text-center bg-white m-3 p-3 rounded shadow-sm">
        <i
          className="bi bi-graph-up"
          style={{ fontSize: 64, color: "#6610f2" }}
        ></i>
        <p className="text-center text-muted">Denim</p>
        <p className="text-center fw-bold">3,50,000/month</p>
      </Col>
    </Row>
  );
};

export default Widget;
