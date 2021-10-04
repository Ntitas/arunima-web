import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import gap from "../public/images/gap.png";
import george from "../public/images/george.jpg";
import Kontoor from "../public/images/Kontoor.jpg";
import matalan from "../public/images/matalan.png";
import primark from "../public/images/primark.jpg";
import rndl from "../public/images/rndl.jpg";
import target from "../public/images/target.jpg";
import Origin from "../public/images/Origin.jpg";
import Walmart from "../public/images/Walmart.png";
import Link from "next/link";

const Products = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="fw-bold" style={{ paddingBottom: "50px" }}></h3>
      <Row>
        <Col sm="auto"></Col>
      </Row>

      <Container>
        <Row>
          <Col style={{ paddingBottom: "50px" }}>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/gap">
                <Image src={gap} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/george">
                <Image src={george} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "240px", height: "150px" }}>
              <Link href="/kontoor">
                <Image src={Kontoor} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/matalan">
                <Image src={matalan} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col style={{ paddingBottom: "50px" }}>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/origin">
                <Image src={Origin} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/primark">
                <Image src={primark} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/rndl">
                <Image src={rndl} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/target">
                <Image src={target} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "240px",
                height: "150px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <Link href="/walmart">
                <Image src={Walmart} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Products;
