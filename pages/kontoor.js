import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import ModalImage from "react-modal-image";
import { motion } from "framer-motion";
const Kontoor = () => {
  const photos = [
    {
      id: 13,
      image: "/images/kot13.png",
    },
    {
      id: 14,
      image: "/images/kot14.png",
    },
    {
      id: 18,
      image: "/images/kot18.png",
    },

    {
      id: 23,
      image: "/images/kot23.png",
    },
    {
      id: 39,
      image: "/images/kot39.png",
    },
    {
      id: 40,
      image: "/images/kot40.png",
    },
    {
      id: 85,
      image: "/images/kot85.png",
    },
    {
      id: 83,
      image: "/images/kot83.png",
    },
    {
      id: 1,
      image: "/images/kot1.png",
    },
    {
      id: 2,
      image: "/images/kot2.jpg",
    },
    {
      id: 3,
      image: "/images/kot3.jpg",
    },
    {
      id: 4,
      image: "/images/kot4.jpg",
    },
    {
      id: 7,
      image: "/images/kot7.png",
    },
    {
      id: 8,
      image: "/images/kot8.png",
    },

    {
      id: 9,
      image: "/images/kot9.jpg",
    },
    {
      id: 10,
      image: "/images/kot10.png",
    },

    {
      id: 24,
      image: "/images/kot24.png",
    },

    {
      id: 25,
      image: "/images/kot25.png",
    },
    {
      id: 26,
      image: "/images/kot26.png",
    },
    {
      id: 28,
      image: "/images/kot28.png",
    },

    {
      id: 29,
      image: "/images/kot29.jpg",
    },
    {
      id: 30,
      image: "/images/kot30.png",
    },
    {
      id: 31,
      image: "/images/kot31.png",
    },
    {
      id: 32,
      image: "/images/kot32.png",
    },

    {
      id: 33,
      image: "/images/kot33.png",
    },
    {
      id: 34,
      image: "/images/kot34.jpg",
    },
    {
      id: 35,
      image: "/images/kot35.jpg",
    },
    {
      id: 36,
      image: "/images/kot36.jpg",
    },

    {
      id: 37,
      image: "/images/kot37.png",
    },
    {
      id: 38,
      image: "/images/kot38.jpg",
    },

    {
      id: 41,
      image: "/images/kot41.png",
    },
    {
      id: 42,
      image: "/images/kot42.jpg",
    },

    {
      id: 45,
      image: "/images/kot45.jpg",
    },

    {
      id: 47,
      image: "/images/kot47.png",
    },

    {
      id: 49,
      image: "/images/kot49.png",
    },
    {
      id: 50,
      image: "/images/kot50.jpg",
    },
    {
      id: 51,
      image: "/images/kot51.png",
    },
    {
      id: 52,
      image: "/images/kot52.png",
    },

    {
      id: 53,
      image: "/images/kot53.png",
    },
    {
      id: 54,
      image: "/images/kot54.png",
    },
    {
      id: 55,
      image: "/images/kot55.png",
    },

    {
      id: 57,
      image: "/images/kot57.png",
    },
    {
      id: 58,
      image: "/images/kot58.png",
    },
    {
      id: 59,
      image: "/images/kot59.png",
    },
    {
      id: 60,
      image: "/images/kot60.png",
    },

    {
      id: 61,
      image: "/images/kot61.png",
    },

    {
      id: 64,
      image: "/images/kot64.png",
    },
    {
      id: 68,
      image: "/images/kot68.png",
    },

    {
      id: 69,
      image: "/images/kot69.jfif",
    },
    {
      id: 70,
      image: "/images/kot70.png",
    },
    {
      id: 71,
      image: "/images/kot71.jfif",
    },
    {
      id: 72,
      image: "/images/kot72.jfif",
    },

    {
      id: 73,
      image: "/images/kot73.jfif",
    },
    {
      id: 74,
      image: "/images/kot74.png",
    },
    {
      id: 75,
      image: "/images/kot75.jfif",
    },
    {
      id: 76,
      image: "/images/kot76.jfif",
    },

    {
      id: 77,
      image: "/images/kot71.jfif",
    },
    {
      id: 78,
      image: "/images/kot78.jfif",
    },
    {
      id: 79,
      image: "/images/kot79.jfif",
    },
    {
      id: 80,
      image: "/images/kot80.png",
    },
    {
      id: 81,
      image: "/images/kot81.jfif",
    },

    {
      id: 84,
      image: "/images/kot84.jpg",
    },

    {
      id: 86,
      image: "/images/kot86.png",
    },
    {
      id: 87,
      image: "/images/kot87.png",
    },
    {
      id: 88,
      image: "/images/kot88.png",
    },

    {
      id: 89,
      image: "/images/kot57.png",
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
            <h3 className="text-center fw-bold p-3">Kontoor</h3>
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">
          {photos &&
            photos.map((photo) => (
              <Col sm={6} key={photo.idy} className="text-center">
                <ModalImage
                  key={photo}
                  small={photo.image}
                  large={photo.image}
                  alt={photo.name}
                  hideDownload={true}
                  hideZoom={true}
                  className="gallery-image shadow-sm rounded bg-white m-1 p-3"
                />
              </Col>
            ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Kontoor;
