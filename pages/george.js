import { Container, Row, Col, Card, Button } from "react-bootstrap";
const George = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/geo1.jfif",
    },
    {
      id: 2,
      image: "/images/geo2.jfif",
    },
    {
      id: 3,
      image: "/images/geo3.jpg",
    },
    {
      id: 4,
      image: "/images/geo4.jpg",
    },
  ];

  const secound_row = [
    {
      id: 1,
      image: "/images/geo5.jpg",
    },
    {
      id: 2,
      image: "/images/geo6.jpg",
    },
    {
      id: 3,
      image: "/images/geo7.jpg",
    },
    {
      id: 4,
      image: "/images/geo8.jpg",
    },
  ];

  const third_row = [
    {
      id: 1,
      image: "/images/geo9.jpg",
    },
    {
      id: 2,
      image: "/images/geo10.jpg",
    },
    {
      id: 3,
      image: "/images/geo11.jpg",
    },
    {
      id: 4,
      image: "/images/geo12.jpg",
    },
  ];

  const fifth_row = [
    {
      id: 1,
      image: "/images/geo13.jpg",
    },
    {
      id: 2,
      image: "/images/geo14.jpg",
    },
    {
      id: 3,
      image: "/images/geo15.jpg",
    },
    {
      id: 4,
      image: "/images/geo16.jpg",
    },
  ];

  const sixth_row = [
    {
      id: 1,
      image: "/images/geo17.jpg",
    },
    {
      id: 2,
      image: "/images/geo18.jpg",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3"></h3>

      <Row className="justify-content-md-center">
        {first_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {secound_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {third_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {fifth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {sixth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default George;

const PersonCard = (props) => {
  return (
    <Card
      className="shadow-sm text-center bg-white"
      style={{ paddingTop: "40px" }}
    >
      <Card.Img variant="top" src={props.data.image} />
    </Card>
  );
};
