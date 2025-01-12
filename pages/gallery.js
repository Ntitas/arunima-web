import { Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import { motion } from "framer-motion";

const Gallery = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const photos = [
    {
      key: 1,
      url: "/images/picture_1.jpg",
    },
    {
      key: 2,
      url: "/images/picture_2.jpg",
    },
    {
      key: 10,
      url: "/images/picture_10.jpg",
    },
    {
      key: 11,
      url: "/images/picture_12.jpg",
    },
    {
      key: 12,
      url: "/images/picture_13.jpg",
    },

    {
      key: 13,
      url: "/images/picture_14.jpg",
    },
    {
      key: 14,
      url: "/images/picture_15.jpg",
    },
    {
      key: 15,
      url: "/images/picture_16.jpg",
    },
    {
      key: 16,
      url: "/images/picture_17.jpg",
    },

    {
      key: 17,
      url: "/images/picture_18.jpg",
    },
    {
      key: 18,
      url: "/images/picture_19.jpg",
    },
    {
      key: 19,
      url: "/images/picture_20.jpg",
    },
    {
      key: 20,
      url: "/images/picture.jpg",
    },

    {
      key: 21,
      url: "/images/picture_25.jpg",
    },
    {
      key: 22,
      url: "/images/picture_26.jpg",
    },
    {
      key: 23,
      url: "/images/picture_27.jpg",
    },
    {
      key: 24,
      url: "/images/picture_30.jpg",
    },

    {
      key: 25,
      url: "/images/picture_31.jpg",
    },
    {
      key: 26,
      url: "/images/picture_32.jpg",
    },
    {
      key: 27,
      url: "/images/picture_33.jpg",
    },
    {
      key: 28,
      url: "/images/picture_34.jpg",
    },

    {
      key: 29,
      url: "/images/picture_35.jpg",
    },
    {
      key: 30,
      url: "/images/picture_36.jpg",
    },
    {
      key: 31,
      url: "/images/picture_37.jpg",
    },
    {
      key: 32,
      url: "/images/picture_38.jpg",
    },

    {
      key: 33,
      url: "/images/picture_39.jpg",
    },
    {
      key: 34,
      url: "/images/picture_40.jpg",
    },
    {
      key: 35,
      url: "/images/picture_41.jpg",
    },
    {
      key: 36,
      url: "/images/picture_42.jpg",
    },
    {
      key: 37,
      url: "/images/picture_43.jpg",
    },
    {
      key: 38,
      url: "/images/picture_44.jpg",
    },
    {
      key: 39,
      url: "/images/picture_45.jpg",
    },
    {
      key: 40,
      url: "/images/picture_46.jpg",
    },

    {
      key: 41,
      url: "/images/picture_47.jpg",
    },
    {
      key: 42,
      url: "/images/picture_48.jpg",
    },
    {
      key: 43,
      url: "/images/picture_49.jpg",
    },
    {
      key: 44,
      url: "/images/picture_50.jpg",
    },

    {
      key: 45,
      url: "/images/picture_57.jfif",
    },
    {
      key: 46,
      url: "/images/picture_52.jfif",
    },
    {
      key: 47,
      url: "/images/picture_53.jfif",
    },
    {
      key: 48,
      url: "/images/picture_54.jpg",
    },

    {
      key: 49,

      url: "/images/picture_7.jpg",
    },
    {
      key: 50,
      url: "/images/picture_6.jpg",
    },
    {
      key: 51,
      url: "/images/picture_51.jpg",
    },
    {
      key: 52,
      url: "/images/picture_8.jfif",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Container className="mt-3 min-vh-100">
        <h3 className="text-center fw-bold p-3">Gallery</h3>

        <Row className="justify-content-md-center">
          {photos &&
            photos.map((photo) => (
              <Col key={photo.key} sm="4" className="text-center">
                <ModalImage
                  key={photo}
                  small={photo.url}
                  large={photo.url}
                  alt={photo.name}
                  hkeyeDownload={true}
                  hkeyeZoom={true}
                  className="only-gallery-image shadow-sm rounded bg-white m-1 p-3"
                />
              </Col>
            ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Gallery;
