import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Management = () => {
  const top_directors = [
    {
      id: 1,
      name: "Syed Qamrul Huda",
      desgnation: "Chairman",
      email: "huda@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/qamrul-huda.jpg",
    },
    {
      id: 2,
      name: "S A Hossain Farooq",
      desgnation: "Managing Director",
      email: "farooq@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/farooq.jpg",
    },
    {
      id: 3,
      name: "Farukul Islam",
      desgnation: "Deputy Managing Director",
      email: "faruk@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/fakrul.jpg",
    },
  ];
  const directors = [
    {
      id: 1,
      name: "Syed Taisir Huda",
      desgnation: "Director",
      email: "taisir@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/taisir-huda.png",
    },
    {
      id: 2,
      name: "Syed Aftab Hossain",
      desgnation: "Director",
      email: "ornobhossain@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/aftab.jpg",
    },
    {
      id: 3,
      name: "Syed Akib Hossain",
      desgnation: "Director",
      email: "akib@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/akib.jpg",
    },
    {
      id: 4,
      name: "Nabil Bin Faruk",
      desgnation: "Director",
      email: "nabil@arunima-group.net",
      phone: "+880 1990407000",
      image: "/images/nabil.jpg",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">Board of Directors</h3>

      <Row className="justify-content-md-center">
        {top_directors.map((item) => (
          <Col sm={3} key={item.id}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="py-5 justify-content-md-center">
        {directors.map((item) => (
          <Col sm={3} key={item.id}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Management;

const PersonCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
    >
      <Card className="shadow-sm text-center bg-white">
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title className="fw-bold">{props.data.name}</Card.Title>
          <Card.Subtitle className="m-2 text-muted">
            {props.data.desgnation}
          </Card.Subtitle>
          <Card.Text className="text-center">Arunima Group</Card.Text>
          <a href={"tel:" + props.data.phone} className="text-success pe-3">
            <i className="bi bi-telephone-fill"></i>
          </a>
          <a
            href={"mailto:" + props.data.email}
            className="text-secondary pe-3"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          {/* <a className="text-primary">
          <i className="bi bi-linkedin"></i>
        </a> */}
        </Card.Body>
      </Card>
    </motion.div>
  );
};
