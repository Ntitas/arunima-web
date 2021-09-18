import Head from "next/head";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import BannerPic from "../public/images/banner.jpg";
import logo from "../public/images/logo.png";
import Widget from "../components/widget";

export default function Home() {
  const widgetsData = [
    {
      key: "1",
      title: "Title",
      subTitle: "Sub Title",
      image: "",
    },
    {
      key: "2",
      title: "Title",
      subTitle: "Sub Title",
      image: "",
    },
    {
      key: "3",
      title: "Title",
      subTitle: "Sub Title",
      image: "",
    },
    {
      key: "4",
      title: "Title",
      subTitle: "Sub Title",
      image: "",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <Row className="mb-3">
        <Image src={BannerPic} alt="Arunima" className="rounded shadow" />
      </Row>

      <Row className="mb-3">
        {widgetsData.map((item) => (
          <Col key={item.key}>
            <Widget data={item} />
          </Col>
        ))}
      </Row>

      <Row className="rounded shadow p-3 bg-light">
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
    </Container>
  );
}
