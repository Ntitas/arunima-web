import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Target = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/tar1.jfif",
    },
    {
      id: 2,
      image: "/images/tar2.jfif",
    },
    {
      id: 3,
      image: "/images/tar3.jfif",
    },
    {
      id: 4,
      image: "/images/tar4.jpg",
    },
  ];

  const secound_row = [
    {
      id: 1,
      image: "/images/tar7.jfif",
    },
    {
      id: 2,
      image: "/images/tar5.jpg",
    },
    {
      id: 3,
      image: "/images/tar6.jfif",
    },
    {
      id: 4,
      image: "/images/gap15.jfif",
    },
  ];

  const third_row = [
    {
      id: 1,
      image: "/images/tar8.jfif",
    },
    {
      id: 2,
      image: "/images/tar9.jfif",
    },
    {
      id: 3,
      image: "/images/tar10.jfif",
    },
    {
      id: 4,
      image: "/images/tar12.jpg",
    },
  ];

  const fourth_row = [
    {
      id: 1,
      image: "/images/tar13.jfif",
    },
    {
      id: 2,
      image: "/images/tar16.jfif",
    },
    {
      id: 3,
      image: "/images/tar15.jpg",
    },
    {
      id: 4,
      image: "/images/tar14.jpg",
    },
  ];

  const fifth_row = [
    {
      id: 1,
      image: "/images/tar17.jfif",
    },
    {
      id: 2,
      image: "/images/tar18.jfif",
    },
    {
      id: 3,
      image: "/images/tar19.jfif",
    },
    {
      id: 4,
      image: "/images/tar20.jfif",
    },
  ];

  const sixth_row = [
    {
      id: 1,
      image: "/images/tar21.jfif",
    },
    {
      id: 2,
      image: "/images/tar22.jfif",
    },
    {
      id: 3,
      image: "/images/tar23.jfif",
    },
    {
      id: 4,
      image: "/images/tar24.jfif",
    },
  ];

  const seventh_row = [
    {
      id: 1,
      image: "/images/tar25.jfif",
    },
    {
      id: 2,
      image: "/images/tar26.jfif",
    },
    {
      id: 3,
      image: "/images/tar27.jfif",
    },
    {
      id: 4,
      image: "/images/tar28.jpg",
    },
  ];

  const eigth_row = [
    {
      id: 1,
      image: "/images/tar29.jfif",
    },
    {
      id: 2,
      image: "/images/tar30.jpg",
    },
    {
      id: 3,
      image: "/images/tar31.jfif",
    },
    {
      id: 4,
      image: "/images/tar32.jpg",
    },
  ];

  const ninth_row = [
    {
      id: 1,
      image: "/images/tar33.jfif",
    },
    {
      id: 2,
      image: "/images/tar34.jpg",
    },
    {
      id: 3,
      image: "/images/tar35.jfif",
    },
    {
      id: 4,
      image: "/images/tar36.jpg",
    },
  ];

  const tenth_row = [
    {
      id: 1,
      image: "/images/tar37.jfif",
    },
    {
      id: 2,
      image: "/images/tar38.jpg",
    },
    {
      id: 3,
      image: "/images/tar39.jfif",
    },
    {
      id: 4,
      image: "/images/tar41.png",
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

      <Row className="justify-content-md-center">
        {sixth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {seventh_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {eigth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center">
        {ninth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center">
        {tenth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Target;

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
