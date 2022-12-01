import Image from "next/image";
import { Col, Row, Container, Card } from "react-bootstrap";

import MySlider from "../components/MySlider";
import Widget from "../components/widget";

import logo from "../public/images/logo.png";
import valuesPic from "../public/images/values.png";
import certPic from "../public/images/certifications.png";
import gap from "../public/images/gap2.png";
import george from "../public/images/george.jpg";
import Walmart from "../public/images/Walmart1.jpeg";
import matalan from "../public/images/matalan.png";
import primark from "../public/images/primark.jpg";
import target from "../public/images/target.jpg";
import belk from "../public/images/belk.png";
import meijer from "../public/images/Meijer1.webp";
import CSR from "../public/images/CSR.png";
import Kontoor from "../public/images/Kontoor.jpg";
import pepco from "../public/images/pepco.jpg";
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

      <h3 className="text-center fw-bold p-3">Vision</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Col>
          <p className="text-center fs-4">Persevere for Perfection.</p>
        </Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Mission</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Col>
          <p>
            At Arunima, our mission is to persevere for perfection in everything
            we do, whether it is development, final assembly, or delivery, to
            ensure that our customers have best possible experience working with
            us.
            <br /> We are an Apparel development and manufacturing company
            committed to skilled craftmanship, compliance, and timeliness while
            always aspiring for Excellence.
          </p>
        </Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Facts</h3>

      <Widget />

      <h3 className="text-center fw-bold p-3">Values</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Image src={valuesPic} alt="Arunima" className="rounded shadow-sm" />
      </Row>

      {/* <h3 className="text-center fw-bold p-3">Videos</h3>

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
      </Row> */}

      <h3 className="text-center fw-bold p-3">Our Clients</h3>

      <Row>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.kontoorbrands.com/" target="blank">
              <Image
                src={Kontoor}
                alt="Kontoor"
                className="rounded shadow-sm"
              />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.gap.com/" target="blank">
              <Image
                src={gap}
                alt="GAP"
                objectFit="cover"
                className="rounded shadow-sm"
              />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.walmart.com/" target="blank">
              <Image
                src={Walmart}
                alt="WALMART"
                className="rounded shadow-sm"
              />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.matalan.co.uk/" target="blank">
              <Image
                src={matalan}
                alt="Matalan"
                className="rounded shadow-sm"
              />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.primark.com/en-gb" target="blank">
              <Image
                src={primark}
                alt="Primark"
                className="rounded shadow-sm"
              />
            </a>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a
              href="https://global.direct.asda.com/george/clothing/10,default,sc.html"
              target="blank"
            >
              <Image src={george} alt="George" className="rounded shadow-sm" />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.target.com/" target="blank">
              <Image src={target} alt="Target" className="rounded shadow-sm" />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.belk.com/" target="blank">
              <Image src={belk} alt="Belk" className="rounded shadow-sm" />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://www.meijer.com/" target="blank">
              <Image src={meijer} alt="Meijer" className="rounded shadow-sm" />
            </a>
          </Card>
        </Col>
        <Col className="rounded shadow-sm m-1 p-2 bg-white">
          <Card>
            <a href="https://pepco.eu/" target="blank">
              <Image src={pepco} alt="pepco" className="rounded shadow-sm" />
            </a>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center fw-bold p-3">Certifications</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Image src={certPic} alt="Arunima" className="rounded shadow-sm" />
      </Row>

      <h3 className="text-center fw-bold p-3">CSR Program</h3>

      <Row className="rounded shadow-sm mb-3 p-5 bg-white">
        <Image src={CSR} alt="CSR" className="rounded shadow-sm" />
      </Row>
    </Container>
  );
}
