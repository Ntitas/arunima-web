import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
const Walmart = () => {
  const photos = [
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
      <h3 className="text-center fw-bold p-3">Walmart</h3>

      <Row className="justify-content-md-center">
        {photos &&
          photos.map((photo) => (
            <Col sm={3} key={photo.id} className="text-center">
              <ModalImage
                key={photo}
                small={photo.image}
                large={photo.image}
                alt={photo.name}
                hkeyeDownload={true}
                hkeyeZoom={true}
                className="gallery-image shadow-sm rounded bg-white m-1 p-3"
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Walmart;
