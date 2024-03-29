import { Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      id: 5,
      image: "/images/wal5.jfif",
    },
    {
      id: 6,
      image: "/images/wal6.jpg",
    },
    {
      id: 7,
      image: "/images/wal7.jfif",
    },
    {
      id: 8,
      image: "/images/wal8.jpg",
    },
    {
      id: 9,
      image: "/images/wal9.jfif",
    },
    {
      id: 10,
      image: "/images/wal10.jpg",
    },
    {
      id: 11,
      image: "/images/wal11.jfif",
    },
    {
      id: 12,
      image: "/images/wal12.jpg",
    },

    {
      id: 13,
      image: "/images/wal13.jpg",
    },
    {
      id: 14,
      image: "/images/wal14.jfif",
    },
    {
      id: 15,
      image: "/images/wal16.jfif",
    },
    {
      id: 16,
      image: "/images/wal19.jfif",
    },
    {
      id: 17,
      image: "/images/wal20.jfif",
    },
    {
      id: 18,
      image: "/images/wal15.jfif",
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
            <h3 className="text-center fw-bold p-3">Walmart</h3>
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">
          {photos &&
            photos.map((photo) => (
              <Col sm={4} key={photo.id} className="text-center">
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

export default Walmart;
