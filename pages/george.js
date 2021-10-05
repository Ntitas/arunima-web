import React from "react";
import { Container } from "react-bootstrap";

import ModalImage from "react-modal-image";

const george = () => {
  const images = {
    // name: "React",
    photos: [
      {
        url: "/images/geo1.jfif",
        name: "",
      },
      {
        url: "/images/geo2.jfif",
        name: "",
      },
      {
        url: "/images/geo3.jpg",
        name: "",
      },
      {
        url: "/images/geo4.jpg",
        name: "",
      },
      {
        url: "/images/geo5.jpg",
        name: "",
      },
      {
        url: "/images/geo6.jpg",
        name: "",
      },
      {
        url: "/images/geo7.jpg",
        name: "",
      },
      {
        url: "/images/geo8.jpg",
        name: "",
      },
      {
        url: "/images/geo9.jpg",
        name: "",
      },
      {
        url: "/images/geo10.jpg",
        name: "",
      },
      {
        url: "/images/geo11.jpg",
        name: "",
      },
      {
        url: "/images/geo12.jpg",
        name: "",
      },
      {
        url: "/images/geo13.jpg",
        name: "",
      },
      {
        url: "/images/geo14.jpg",
        name: "",
      },
      {
        url: "/images/geo15.jpg",
        name: "",
      },
      {
        url: "/images/geo16.jpg",
        name: "",
      },

      {
        url: "/images/geo17.jpg",
        name: "",
      },
      {
        url: "/images/geo18.jpg",
        name: "",
      },
    ],
  };

  return (
    <Container>
      <div className="gallery">
        {images.photos &&
          images.photos.map((photo) => (
            <ModalImage
              key={photo}
              small={photo.url}
              large={photo.url}
              alt={photo.name}
              hideDownload={true}
              hideZoom={true}
              className="gallery-image"
            />
          ))}
      </div>
    </Container>
  );
};

export default george;
