import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import childPic from "../public/images/children.png";
import { motion } from "framer-motion";

const CSR = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
    >
      <Container className="mt-3 min-vh-100">
        <h3 className="text-center fw-bold p-3">CSR Activities</h3>

        <Row className="rounded shadow-sm bg-white">
          <Col sm={7} className="p-5">
            <p className="fs-4">Orientation on basic labor law:</p>

            <p>
              <strong>First Aid:</strong> We arrange group discussion/training
              once in a month with the first aiders. First aiders always make
              orientation with the new comers.
            </p>
            <p>
              <strong>Fire Awareness:</strong> We arrange group discussion and
              practical training once in a month with the fire fighters and once
              in every six month arrange training with external or BGMEA. Fire
              drill also maintain once in a month.
            </p>
            <p>
              <strong>Maternity leave with facilities:</strong> As per local law
              we follow maternity leave with facilities.
            </p>
            <p>
              <strong>Day care facility:</strong> We have day care facility
              along with food during factory schedule.
            </p>
            <p>
              <strong>Transport:</strong> We provide free of cost transport
              among the employees.
            </p>
            <p>
              <strong>Attendance Bonus:</strong> Followed regular basis.
            </p>
            <p>
              <strong>Festival Bonus:</strong> 02 festival bonuses are
              applicable for one year old employees.
            </p>
            <p>
              <strong>Dining space:</strong> We decorated 4,000 sq. ft for our
              workers.
            </p>
          </Col>
          <Col className="mt-sm-5 p-5">
            <Image
              src={childPic}
              className="img-fluid rounded shadow"
              alt="CSR"
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default CSR;
