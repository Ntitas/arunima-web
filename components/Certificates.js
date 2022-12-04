import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import cer1 from "../public/images/cer1.png";
import cer2 from "../public/images/cer2.png";
import cer3 from "../public/images/cer3.png";
import cer4 from "../public/images/cer4.png";
import cer5 from "../public/images/cer5.png";
import cer6 from "../public/images/cer6.png";
import cer7 from "../public/images/cer7.png";
import cer8 from "../public/images/cer8.png";
import cer9 from "../public/images/cer9.png";
import cer10 from "../public/images/cer10.png";
import cer11 from "../public/images/cer11.png";
import cer12 from "../public/images/cer12.png";
import { Fragment } from "react";

const Certificates = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <a href="https://bangladeshaccord.org/" target="blank">
            <Image src={cer1} alt="cer1" />
          </a>
        </Col>

        <Col>
          <a href="https://www.bangladeshworkersafety.org/" target="blank">
            <Image src={cer2} alt="cer2" />
          </a>
        </Col>

        <Col>
          <a href="https://betterwork.org/" target="blank">
            <Image src={cer3} alt="cer3" />
          </a>
        </Col>

        <Col>
          <Image src={cer4} alt="cer4" />
        </Col>

        <Col>
          <Image src={cer5} alt="cer5" />
        </Col>

        <Col>
          <a href="https://www.nirapon.org/" target="blank">
            <Image src={cer6} alt="cer6" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://www.oeko-tex.com/en/" target="blank">
            <Image src={cer7} alt="cer7" />
          </a>
        </Col>

        <Col>
          <a href="https://www.rsc-bd.org/en" target="blank">
            <Image src={cer9} alt="cer9" />
          </a>
        </Col>

        <Col>
          <a href="https://www.scanassociation.com/" target="blank">
            <Image src={cer10} alt="cer10" />
          </a>
        </Col>

        <Col>
          <a href="https://www.sedex.com/" target="blank">
            <Image src={cer11} alt="cer11" />
          </a>
        </Col>

        <Col>
          <a href="https://wrapcompliance.org/en/" target="blank">
            <Image src={cer12} alt="cer12" />
          </a>
        </Col>

        <Col>
          <Image src={cer8} alt="cer8" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Certificates;
