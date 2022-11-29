import Image from "next/image";
import { useState } from "react";
import DivComponent from "../components/DivComponent";

import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";

const About = () => {
  const [active, setActive] = useState("About ASWL");
  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">Arunima Profile</h3>

      <Row className="mb-3">
        <Col className="rounded shadow-sm bg-white p-4 me-3">
          <Image
            src="/images/DMC2.jpg"
            alt="about"
            width="75%"
            height="75%"
            layout="responsive"
            objectFit="contain"
            className="rounded float-right img-thumbnail"
          />
        </Col>
        <Col className="rounded shadow-sm bg-white p-4">
          <Image
            src="/images/DMC2.jpg"
            alt="about"
            width="75%"
            height="75%"
            layout="responsive"
            objectFit="contain"
            className="rounded float-right img-thumbnail"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="rounded shadow-sm bg-white p-5 me-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Arunima Sports Wear Ltd</Accordion.Header>
              <Accordion.Body className="p-0">
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item
                    action
                    href="#link1"
                    className="border-end-0 border-start-0 border-top-0"
                    onClick={() => setActive("About ASWL")}
                  >
                    About ASWL
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link2"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Factory Space")}
                  >
                    Factory Space
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link3"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Capacity")}
                  >
                    Capacity
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link4"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Buyer")}
                  >
                    Buyer And Exporting Countries
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link5"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Employees")}
                  >
                    Employees
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link6"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Quality Control")}
                  >
                    Quality Control
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link7"
                    className="border-end-0 border-start-0 border-bottom-0"
                    onClick={() => setActive(" Computer Aided Design")}
                  >
                    Computer Aided Design
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>DMC Apparels Ltd</Accordion.Header>
              <Accordion.Body className="p-0">
                <ListGroup>
                  <ListGroup.Item
                    action
                    href="#link8"
                    className="border-end-0 border-start-0 border-top-0"
                    onClick={() => setActive("About DMC")}
                  >
                    About DMC
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link9"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Research And Development")}
                  >
                    Research And Development
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link10"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Physical Testing Laboratory")}
                  >
                    Physical Testing Laboratory
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link11"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Quality Assurance Of Wash")}
                  >
                    Quality Assurance Of Wash
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link12"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Chemicals with Sustainable")}
                  >
                    Chemicals with Sustainable Future:Chemical Store
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link13"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Sustainability")}
                  >
                    Sustainability Environment and Climate
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link14"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Go Green")}
                  >
                    Go Green (Factory View)
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link15"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Water Treatment Plant")}
                  >
                    Water Treatment Plant
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link16"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Power Generation")}
                  >
                    Power Generation
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link17"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Effluent Treatment Plant")}
                  >
                    Effluent Treatment Plant
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link18"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Medical center")}
                  >
                    Medical center
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link19"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Policies")}
                  >
                    Policies
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link20"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Factory Space2")}
                  >
                    Factory Space
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link21"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Capacity2")}
                  >
                    Capacity
                  </ListGroup.Item>
                  {/* <ListGroup.Item
                    action
                    href="#link22"
                    className="border-end-0 border-start-0 border-bottom-0"
                    onClick={() => setActive("Machineries List")}
                  >
                    Machineries List
                  </ListGroup.Item> */}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="2">
              <Accordion.Header>
                A.Q.N. Business Associates Ltd.
              </Accordion.Header>
              <Accordion.Body className="p-0">
                <ListGroup>
                  <ListGroup.Item
                    action
                    href="#link23"
                    className="border-end-0 border-start-0 border-top-0"
                    onClick={() => setActive("About A.Q.N")}
                  >
                    About A.Q.N
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link24"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Factory Space3")}
                  >
                    Factory Space
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link25"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Products")}
                  >
                    Products
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link26"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Machineries List2")}
                  >
                    Machineries List
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link27"
                    className="border-end-0 border-start-0"
                    onClick={() => setActive("Employee")}
                  >
                    Employee
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link28"
                    className="border-end-0 border-start-0 border-bottom-0"
                    onClick={() => setActive("Contact Of A.Q.N")}
                  >
                    Contact Of A.Q.N
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </Col>
        <Col className="rounded shadow-sm bg-white p-5">
          <DivComponent active={active} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
