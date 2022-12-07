import { Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Link from "next/link";
import { motion } from "framer-motion";

const Matalan = () => {
  const photos = [
    {
      id: 1,
      image: "/images/matalan1.jfif",
    },
    {
      id: 2,
      image: "/images/matalan2.jpg",
    },
    {
      id: 3,
      image: "/images/matalan3.jpg",
    },
    {
      id: 4,
      image: "/images/matalan4.jpg",
    },

    {
      id: 1,
      image: "/images/matalan5.jpg",
    },

    {
      id: 2,
      image: "/images/matalan2.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Container className="mt-3 min-vh-100">
        <Row>
          <Col>
            <Link href="/products" passHref>
              <i className="bi bi-arrow-left fs-1 arrow"></i>
            </Link>
          </Col>
          <Col>
            <h3 className="text-center fw-bold p-3">Matalan</h3>
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">
          {photos &&
            photos.map((photo) => (
              <Col sm={6} key={photo.id} className="text-center">
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
    </motion.div>
  );
};

export default Matalan;
