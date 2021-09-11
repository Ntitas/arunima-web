import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsPic from "../public/images/logo.png";

const About = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="fw-bold">About Us</h3>

      <Row>
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
            src={AboutUsPic}
            className="img-fluid rounded shadow"
            alt="About Us"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            DMC Apparels Limited was bought as a small factory and came under
            the Arunima group in 2004. It was moved to a new building in 2018
            and is one of the highly-developed washing plants in the country.
            Our state-of-the-art machinery not only serves the company itself
            but also caters to the needs of our customers as well. Additionally,
            the plant has recently been expanded, now having the capacity to
            wash 40,000 pieces of garments (20,000 pieces of denim and 20,000
            pieces of non-denim garment) each day.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
