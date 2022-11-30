import { Container, Row, Col, Card } from "react-bootstrap";
import ModalImage from "react-modal-image";
const Rndl = () => {
  const photos = [
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
      <h3 className="text-center fw-bold p-3">R&D</h3>

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

export default Rndl;
