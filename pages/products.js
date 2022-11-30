import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import gap from "../public/images/gap.png";
import george from "../public/images/george.jpg";
import Kontoor from "../public/images/Kontoor.jpg";
import matalan from "../public/images/matalan.png";
import primark from "../public/images/primark.jpg";
import rndl from "../public/images/RD.jpg";
import target from "../public/images/target.jpg";
import Origin from "../public/images/Origin.jpg";
import Walmart from "../public/images/Walmart1.jpeg";
import Link from "next/link";

const Products = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="fw-bold"></h3>
      <Row>
        <Col sm="auto"></Col>
      </Row>

      <Container>
        <Row>
          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/gap">
                <Image src={gap} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/george">
                <Image
                  src={george}
                  alt="GEORGE"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/kontoor">
                <Image
                  src={Kontoor}
                  alt="KONTOOR"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/matalan">
                <Image
                  src={matalan}
                  alt="MATALAN"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/origin">
                <Image
                  src={Origin}
                  alt="ORIGIN"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/primark">
                <Image
                  src={primark}
                  alt="PRIMARK"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/rndl">
                <Image src={rndl} alt="RNDL" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/target">
                <Image
                  src={target}
                  alt="TARGET"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-3">
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/walmart">
                <Image
                  src={Walmart}
                  alt=" Walmart"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Products;
