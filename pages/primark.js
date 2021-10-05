import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Origin = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/pri1.jfif",
    },
    {
      id: 2,
      image: "/images/pri2.jpg",
    },
    {
      id: 3,
      image: "/images/pri3.jpg",
    },
    {
      id: 4,
      image: "/images/tar40.png",
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
    </Container>
  );
};

export default Origin;

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
