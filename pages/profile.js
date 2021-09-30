import Image from "next/image";
import { useState } from "react";
import DivComponent from '../components/DivComponent';

import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";

const About = () => {
  const[active, setActive] = useState("");
  return (
    <Container className="mt-3 min-vh-100" >
      <h3 className="text-center fw-bold p-3">Arunima Profile</h3>
      

      <Row className="mb-3">
        <Col className="rounded shadow-sm bg-white p-5 me-3" >
        {/* <img src="/images/about-us.jpg" alt="about-us" /> */}
        </Col>
        <Col className="rounded shadow-sm bg-white p-5" >

        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="rounded shadow-sm bg-white p-5 me-3">
        <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Arunima Sports Wear Ltd</Accordion.Header>
          <Accordion.Body>
               <ListGroup >
                <ListGroup.Item action href="#link1" onClick={()=>setActive("About ASWL")}>
                 About ASWL
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" onClick={()=>setActive("Factory Space")}>
                 Factory Space
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={()=>setActive("Capacity")}>
                 Capacity
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={()=>setActive("Buyer")}>
                 Buyer And Exporting Countries
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" onClick={()=>setActive("Employees")}>
                 Employees
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" onClick={()=>setActive("Quality Control")}>
                Quality Control
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" onClick={()=>setActive(" Computer Aided Design")}>
                Computer Aided Design
                </ListGroup.Item>
              </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>DMC Apparels Ltd</Accordion.Header>
          <Accordion.Body>
             <ListGroup >
                <ListGroup.Item action href="#link1" onClick={()=>setActive("About ASWL")}>
                 About ASWL
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" onClick={()=>setActive("Factory Space")}>
                 Factory Space
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={()=>setActive("Capacity")}>
                 Capacity
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={()=>setActive("Buyer")}>
                 Buyer And Exporting Countries
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" onClick={()=>setActive("Employees")}>
                 Employees
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" onClick={()=>setActive("Quality Control")}>
                Quality Control
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" onClick={()=>setActive(" Computer Aided Design")}>
                Computer Aided Design
                </ListGroup.Item>
              </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>A.Q.N. Business Associates Ltd.</Accordion.Header>
          <Accordion.Body>
          <ListGroup >
                <ListGroup.Item action href="#link1" onClick={()=>setActive("About ASWL")}>
                 About ASWL
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" onClick={()=>setActive("Factory Space")}>
                 Factory Space
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={()=>setActive("Capacity")}>
                 Capacity
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={()=>setActive("Buyer")}>
                 Buyer And Exporting Countries
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" onClick={()=>setActive("Employees")}>
                 Employees
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" onClick={()=>setActive("Quality Control")}>
                Quality Control
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" onClick={()=>setActive(" Computer Aided Design")}>
                Computer Aided Design
                </ListGroup.Item>
              </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Col>
        <Col className="rounded shadow-sm bg-white p-5">
         <DivComponent active={active}/>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
