import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import gap from "../public/images/gap2.png";
import george from "../public/images/george.jpg";
import Kontoor from "../public/images/Kontoor.jpg";
import matalan from "../public/images/matalan.png";
import primark from "../public/images/primark.jpg";
import rndl from "../public/images/RD.jpg";
import target from "../public/images/target.jpg";
import Origin from "../public/images/Origin1.jpg";
import Walmart from "../public/images/Walmart1.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Container className="mt-3 min-vh-100">
        <h3 className="text-center p-3 fw-bold">Products</h3>

        <Row>
          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/gap" passHref>
                <Image src={gap} alt="GAP" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/george" passHref>
                <Image
                  src={george}
                  alt="GEORGE"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/kontoor" passHref>
                <Image
                  src={Kontoor}
                  alt="KONTOOR"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>
          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/target" passHref>
                <Image
                  src={target}
                  alt="TARGET"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/matalan" passHref>
                <Image
                  src={matalan}
                  alt="MATALAN"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/origin" passHref>
                <Image
                  src={Origin}
                  alt="ORIGIN"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/primark" passHref>
                <Image
                  src={primark}
                  alt="PRIMARK"
                  className="rounded shadow-sm"
                />
              </Link>
            </Card>
          </Col>

          <Col className="text-center m-2">
            <Card className="product-card">
              <Link href="/rndl" passHref>
                <Image src={rndl} alt="RNDL" className="rounded shadow-sm" />
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center m-2 pe-4" sm="3">
            <Card className="product-card">
              <Link href="/walmart" passHref>
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
    </motion.div>
  );
};

export default Products;
