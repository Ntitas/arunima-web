import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Container className="mt-3 min-vh-100">
        <h3 className="text-center fw-bold p-3">Google Maps</h3>

        <Row className="mb-3">
          <Col className="rounded shadow-sm p-3 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.328523195322!2d90.30813936478744!3d23.913418184509286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c28f6cdf28ad%3A0x3a9cc5128b1fdd91!2z4KaF4Kaw4KeB4Kao4Ka_4Kau4Ka-IOCmuOCnjeCmquCni-CmsOCnjeCmn-CmuOCmk-Cnn-CnjeCmr-CmvuCmsCDgprLgpr_gpoM!5e0!3m2!1sen!2sbd!4v1631949191000!5m2!1sen!2sbd"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>

        <h3 className="text-center fw-bold p-3">Contact Information</h3>

        <Row>
          <Col sm={8} className="p-3 me-3">
            <p className="fs-5 contact">
              Address: Dewan Idris Road, Pukurpar, Zirabo, Savar, Dhaka - 1341,
              Bangladesh
              <br />
              Phone: +8809613000777
              <br />
              Mail: arunima@arunima-group.net
            </p>
          </Col>
          <Col className="p-3">
            <p className="fs-5 fw-bold text-center lh-sm contact">
              Syed Qamrul Huda
            </p>
            <p className="fs-6 text-center lh-1 contact">
              Chairman & CEO
              <br />
              Arunima Group
              <br />
              huda@arunima-group.net
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
