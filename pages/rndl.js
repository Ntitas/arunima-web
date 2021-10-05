import { Container, Row, Col, Card } from "react-bootstrap";
const Rndl = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/rndl1.jfif",
    },
    {
      id: 2,
      image: "/images/rndl2.jfif",
    },
    {
      id: 3,
      image: "/images/rndl3.jfif",
    },
    {
      id: 4,
      image: "/images/rndl4.jfif",
    },
  ];

  const secound_row = [
    {
      id: 1,
      image: "/images/rndl5.jfif",
    },
    {
      id: 2,
      image: "/images/rndl6.jfif",
    },
    {
      id: 3,
      image: "/images/rndl7.jfif",
    },
    {
      id: 4,
      image: "/images/rndl8.jfif",
    },
  ];

  const third_row = [
    {
      id: 1,
      image: "/images/rndl9.jfif",
    },
    {
      id: 2,
      image: "/images/rndl10.jfif",
    },
    {
      id: 3,
      image: "/images/rndl11.jfif",
    },
    {
      id: 4,
      image: "/images/rndl12.jfif",
    },
  ];
  const fourth_row = [
    {
      id: 1,
      image: "/images/rndl13.jfif",
    },
    {
      id: 2,
      image: "/images/rndl14.jfif",
    },
    {
      id: 3,
      image: "/images/rndl15.jfif",
    },
    {
      id: 4,
      image: "/images/rndl16.jfif",
    },
  ];
  const fifth_row = [
    {
      id: 1,
      image: "/images/rndl17.jfif",
    },
    {
      id: 2,
      image: "/images/rndl18.jfif",
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

export default Rndl;

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
