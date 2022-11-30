import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
const Kontoor = () => {
  const photos = [
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
      id: 5,
      image: "/images/kot5.png",
    },
    {
      id: 6,
      image: "/images/kot6.png",
    },
    {
      id: 7,
      image: "/images/kot7.jpg",
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
      id: 11,
      image: "/images/kot11.png",
    },
    {
      id: 12,
      image: "/images/kot12.png",
    },

    {
      id: 13,
      image: "/images/kot13.png",
    },
    {
      id: 14,
      image: "/images/kot14.png",
    },
    {
      id: 15,
      image: "/images/kot15.jpg",
    },
    {
      id: 16,
      image: "/images/kot16.jfif",
    },

    {
      id: 17,
      image: "/images/kot17.jpg",
    },
    {
      id: 18,
      image: "/images/kot18.jpg",
    },
    {
      id: 19,
      image: "/images/kot19.jpg",
    },
    {
      id: 20,
      image: "/images/kot20.jpg",
    },

    {
      id: 21,
      image: "/images/kot21.jpg",
    },
    {
      id: 22,
      image: "/images/kot22.jfif",
    },
    {
      id: 23,
      image: "/images/kot23.jfif",
    },
    {
      id: 24,
      image: "/images/kot24.jfif",
    },

    {
      id: 25,
      image: "/images/kot25.jfif",
    },
    {
      id: 26,
      image: "/images/kot26.jfif",
    },
    {
      id: 27,
      image: "/images/kot27.jfif",
    },
    {
      id: 28,
      image: "/images/kot28.jfif",
    },

    {
      id: 29,
      image: "/images/kot29.jpg",
    },
    {
      id: 30,
      image: "/images/kot30.jfif",
    },
    {
      id: 31,
      image: "/images/kot31.jfif",
    },
    {
      id: 32,
      image: "/images/kot32.jfif",
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
      image: "/images/kot37.jpg",
    },
    {
      id: 38,
      image: "/images/kot38.jpg",
    },
    {
      id: 39,
      image: "/images/kot39.jpg",
    },
    {
      id: 40,
      image: "/images/kot40.jpg",
    },

    {
      id: 41,
      image: "/images/kot41.jpg",
    },
    {
      id: 42,
      image: "/images/kot42.jpg",
    },
    {
      id: 43,
      image: "/images/kot43.png",
    },
    {
      id: 44,
      image: "/images/kot44.png",
    },

    {
      id: 45,
      image: "/images/kot45.jpg",
    },
    {
      id: 46,
      image: "/images/kot46.png",
    },
    {
      id: 47,
      image: "/images/kot47.png",
    },
    {
      id: 48,
      image: "/images/kot48.png",
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
      id: 56,
      image: "/images/kot56.png",
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
      id: 62,
      image: "/images/kot62.png",
    },
    {
      id: 63,
      image: "/images/kot63.png",
    },
    {
      id: 64,
      image: "/images/kot64.png",
    },

    {
      id: 65,
      image: "/images/kot65.png",
    },
    {
      id: 66,
      image: "/images/kot66.png",
    },
    {
      id: 67,
      image: "/images/kot67.png",
    },
    {
      id: 68,
      image: "/images/kot68.jfif",
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
      image: "/images/kot80.jfif",
    },
    {
      id: 81,
      image: "/images/kot81.jfif",
    },
    {
      id: 82,
      image: "/images/kot82.jfif",
    },
    {
      id: 83,
      image: "/images/kot83.jpg",
    },
    {
      id: 84,
      image: "/images/kot84.jpg",
    },

    {
      id: 85,
      image: "/images/kot85.jpg",
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
    {
      id: 90,
      image: "/images/kot90.png",
    },
    {
      id: 91,
      image: "/images/kot91.png",
    },
    {
      id: 92,
      image: "/images/kot92.png",
    },

    {
      id: 93,
      image: "/images/kot898.png",
    },
    {
      id: 94,
      image: "/images/kot83.jpg",
    },
    {
      id: 95,
      image: "/images/kot70.png",
    },
    {
      id: 96,
      image: "/images/kot74.png",
    },
  ];

  return (
    <Container className="mt-3 min-vh-100">
      <h3 className="text-center fw-bold p-3">Kontoor</h3>

      <Row className="justify-content-md-center">
        {photos &&
          photos.map((photo) => (
            <Col sm={3} key={photo.idy} className="text-center">
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
  );
};

export default Kontoor;
