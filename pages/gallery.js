import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Gallery = () => {
  const first_row = [
    {
      id: 1,
      image: "/images/picture_1.jpg",
    },
    {
      id: 2,
      image: "/images/picture_2.jpg",
    },
    {
      id: 3,
      image: "/images/picture_3.jpg",
    },
    {
      id: 4,
      image: "/images/picture_4.jpg",
    },
  ];

  const secound_row = [
    {
      id: 1,
      image: "/images/5.jpg",
    },
    {
      id: 2,
      image: "/images/picture_6.jpg",
    },
    {
      id: 3,
      image: "/images/picture_55.jpg",
    },
    {
      id: 4,
      image: "/images/picture_56.jfif",
    },
  ];

  const third_row = [
    {
      id: 1,
      image: "/images/picture_10.jpg",
    },
    {
      id: 2,
      image: "/images/picture_11.jpg",
    },
    {
      id: 3,
      image: "/images/picture_12.jpg",
    },
    {
      id: 4,
      image: "/images/picture_13.jpg",
    },
  ];

  const fourth_row = [
    {
      id: 1,
      image: "/images/picture_14.jpg",
    },
    {
      id: 2,
      image: "/images/picture_15.jpg",
    },
    {
      id: 3,
      image: "/images/picture_16.jpg",
    },
    {
      id: 4,
      image: "/images/picture_17.jpg",
    },
  ];

  const fifth_row = [
    {
      id: 1,
      image: "/images/picture_18.jpg",
    },
    {
      id: 2,
      image: "/images/picture_19.jpg",
    },
    {
      id: 3,
      image: "/images/picture_20.jpg",
    },
    {
      id: 4,
      image: "/images/picture.jpg",
    },
  ];

  const sixth_row = [
    {
      id: 1,
      image: "/images/picture_25.jpg",
    },
    {
      id: 2,
      image: "/images/picture_26.jpg",
    },
    {
      id: 3,
      image: "/images/picture_27.jpg",
    },
    {
      id: 4,
      image: "/images/picture_30.jpg",
    },
  ];

  const seventh_row = [
    {
      id: 1,
      image: "/images/picture_31.jpg",
    },
    {
      id: 2,
      image: "/images/picture_32.jpg",
    },
    {
      id: 3,
      image: "/images/picture_33.jpg",
    },
    {
      id: 4,
      image: "/images/picture_34.jpg",
    },
  ];

  const eighth_row = [
    {
      id: 1,
      image: "/images/picture_35.jpg",
    },
    {
      id: 2,
      image: "/images/picture_36.jpg",
    },
    {
      id: 3,
      image: "/images/picture_37.jpg",
    },
    {
      id: 4,
      image: "/images/picture_38.jpg",
    },
  ];

  const ninth_row = [
    {
      id: 1,
      image: "/images/picture_39.jpg",
    },
    {
      id: 2,
      image: "/images/picture_40.jpg",
    },
    {
      id: 3,
      image: "/images/picture_41.jpg",
    },
    {
      id: 4,
      image: "/images/picture_42.jpg",
    },
  ];

  const tenth_row = [
    {
      id: 1,
      image: "/images/picture_43.jpg",
    },
    {
      id: 2,
      image: "/images/picture_44.jpg",
    },
    {
      id: 3,
      image: "/images/picture_45.jpg",
    },
    {
      id: 4,
      image: "/images/picture_46.jpg",
    },
  ];

  const eleventh_row = [
    {
      id: 1,
      image: "/images/picture_47.jpg",
    },
    {
      id: 2,
      image: "/images/picture_48.jpg",
    },
    {
      id: 3,
      image: "/images/picture_49.jpg",
    },
    {
      id: 4,
      image: "/images/picture_50.jpg",
    },
  ];

  const twelveth_row = [
    {
      id: 1,
      image: "/images/picture_57.jfif",
    },
    {
      id: 2,
      image: "/images/picture_52.jfif",
    },
    {
      id: 3,
      image: "/images/picture_53.jfif",
    },
    {
      id: 4,
      image: "/images/picture_54.jpg",
    },
  ];

  const thirteenth_row = [
    {
      id: 1,
      image: "/images/picture_7.jpg",
    },
    {
      id: 2,
      image: "/images/picture_9.jpg",
    },
    {
      id: 3,
      image: "/images/picture_51.jpg",
    },
    {
      id: 4,
      image: "/images/picture_8.jfif",
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
        {eighth_row.map((item) => (
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

      <Row className="justify-content-md-center">
        {eleventh_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center">
        {twelveth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-center">
        {thirteenth_row.map((item) => (
          <Col sm={3} key={item.id} style={{ paddingBottom: "50px" }}>
            <PersonCard data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;

const PersonCard = (props) => {
  return (
    <Card
      className="shadow-sm text-center bg-white"
      style={{ paddingTop: "40px" }}
    >
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        {/* <Card.Title className="fw-bold">{props.data.name}</Card.Title>
        <Card.Subtitle className="m-2 text-muted">
          {props.data.desgnation}
        </Card.Subtitle> */}
        {/* <Card.Text className="text-center">Arunima Group</Card.Text> */}
        {/* <a href={"tel:" + props.data.phone} className="text-success pe-3">
          <i className="bi bi-telephone-fill"></i>
        </a>
        <a href={"mailto:" + props.data.email} className="text-secondary pe-3">
          <i className="bi bi-envelope-fill"></i>
        </a> */}
        {/* <a className="text-primary">
          <i className="bi bi-linkedin"></i>
        </a> */}
      </Card.Body>
    </Card>
  );
};
