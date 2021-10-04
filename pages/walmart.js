import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Walmart = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/wal1.jfif",
    },
    {
      id: 2,
      image: "/images/wal2.jpg",
    },
    {
      id: 3,
      image: "/images/wal3.jfif",
    },
    {
      id: 4,
      image: "/images/wal4.jpg",
    },
  ];

  const secound_row = [
    {
      id: 1,
      image: "/images/wal5.jfif",
    },
    {
      id: 2,
      image: "/images/wal6.jpg",
    },
    {
      id: 3,
      image: "/images/wal7.jfif",
    },
    {
      id: 4,
      image: "/images/wal8.jpg",
    },
  ];

  const third_row = [
    {
      id: 1,
      image: "/images/wal9.jfif",
    },
    {
      id: 2,
      image: "/images/wal10.jpg",
    },
    {
      id: 3,
      image: "/images/wal11.jfif",
    },
    {
      id: 4,
      image: "/images/wal12.jpg",
    },
  ];

  const fourth_row = [
    {
      id: 1,
      image: "/images/wal13.jpg",
    },
    {
      id: 2,
      image: "/images/wal14.jfif",
    },
    {
      id: 3,
      image: "/images/wal15.jfif",
    },
    {
      id: 4,
      image: "/images/wal16.jfif",
    },
  ];

  const fifth_row = [
    {
      id: 1,
      image: "/images/wal17.jfif",
    },
    {
      id: 2,
      image: "/images/wal18.jfif",
    },
    {
      id: 3,
      image: "/images/wal19.jfif",
    },
    {
      id: 4,
      image: "/images/wal20.jfif",
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
        {fourth_row.map((item) => (
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
    </Container>
  );
};

export default Walmart;

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
