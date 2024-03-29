import { Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Link from "next/link";
import { motion } from "framer-motion";

const Target = () => {
  const photos = [
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

    {
      id: 5,
      image: "/images/tar7.jfif",
    },
    {
      id: 6,
      image: "/images/tar5.jpg",
    },
    {
      id: 7,
      image: "/images/tar6.jfif",
    },
    {
      id: 8,
      image: "/images/gap15.jfif",
    },

    // {
    //   id: 1,
    //   image: "/images/tar8.jfif",
    // },
    {
      id: 9,
      image: "/images/tar9.jfif",
    },
    {
      id: 10,
      image: "/images/tar10.jfif",
    },
    {
      id: 11,
      image: "/images/tar12.jpg",
    },

    {
      id: 12,
      image: "/images/tar13.jfif",
    },
    {
      id: 13,
      image: "/images/tar16.jfif",
    },
    {
      id: 14,
      image: "/images/tar15.jpg",
    },
    // {
    //   id: 4,
    //   image: "/images/tar14.jpg",
    // },

    {
      id: 15,
      image: "/images/tar17.jfif",
    },
    {
      id: 16,
      image: "/images/tar18.jfif",
    },
    {
      id: 17,
      image: "/images/tar19.jfif",
    },
    // {
    //   id: 18,
    //   image: "/images/tar20.jfif",
    // },

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
    // {
    //   id: 4,
    //   image: "/images/tar41.png",
    // },
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
            <h3 className="text-center fw-bold p-3">Target</h3>
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

export default Target;
