import { Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Link from "next/link";
import { motion } from "framer-motion";
const Gap = () => {
  const photos = [
    {
      key: 1,
      url: "/images/gap1.jfif",
    },
    {
      key: 2,
      url: "/images/gap2.jfif",
    },
    {
      key: 3,
      url: "/images/gap3.jpg",
    },
    {
      key: 4,
      url: "/images/gap4.jpg",
    },
    {
      key: 5,
      url: "/images/gap5.jpg",
    },
    {
      key: 6,
      url: "/images/gap6.jpg",
    },
    {
      key: 7,
      url: "/images/gap7.jpg",
    },
    {
      key: 8,
      url: "/images/gap8.jpg",
    },
    {
      key: 9,
      url: "/images/gap9.jpg",
    },
    {
      key: 10,
      url: "/images/gap10.jpg",
    },
    {
      key: 11,
      url: "/images/gap11.jpg",
    },
    {
      key: 12,
      url: "/images/gap12.jpg",
    },
    {
      key: 13,
      url: "/images/gap13.jfif",
    },
    {
      key: 14,
      url: "/images/gap14.jfif",
    },
    {
      key: 15,
      url: "/images/gap15.jfif",
    },
    {
      key: 16,
      url: "/images/gap16.jfif",
    },
    {
      key: 17,
      url: "/images/gap17.jfif",
    },
    {
      key: 18,
      url: "/images/gap18.jfif",
    },
    {
      key: 19,
      url: "/images/gap19.jpg",
    },
    {
      key: 20,
      url: "/images/gap20.jfif",
    },
    {
      key: 21,
      url: "/images/gap4.jpg",
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
            <h3 className="text-center fw-bold p-3">Gap</h3>
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">
          {photos &&
            photos.map((photo) => (
              <Col sm={4} key={photo.key} className="text-center">
                <ModalImage
                  key={photo}
                  small={photo.url}
                  large={photo.url}
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

export default Gap;
