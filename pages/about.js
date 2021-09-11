import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsPic from "../public/images/logo.png";

const About = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="fw-bold">About Us</h3>

      <div>
        <Row className="rounded shadow-sm p-3 bg-light">
          <Col sm={8}>
            <p>
              The journey of Arunima Group began as a small venture in a
              two-storied building. Today, its business, in the name of Arunima
              Sports Wear Limited, has evolved into a full-fledged, nine-storied
              establishment working at full capacity. Arunima Group launched
              with woven tops and slowly developed new lines like knitwear and
              woven bottoms.
            </p>
            <p>
              Arunima Group has worked with several well-known/renowned brands
              such as Wrangler, Lee, Nautica, North Face, Timberland, among many
              others. With full technical support from VF engineers, Arunima
              Group has reached its current potential and growing at a
              significant pace. With the industry flourishing, Arunima Group has
              exciting plans for the future with various upcoming projects and
              developing its current ones to reach its full potential.
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
      </div>
    </Container>
  );
};

export default About;
