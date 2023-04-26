import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";

export default function Slideshow() {
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "./images/image-product-1.jpg",
    },
    {
      id: 2,
      src: "./images/image-product-2.jpg",
    },
    {
      id: 3,
      src: "./images/image-product-3.jpg",
    },
    {
      id: 4,
      src: "./images/image-product-4.jpg",
    },
  ];

  const handleImageClick = (image, index) => {
    setClick(image);
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setClick(null);
  };

  return (
    <div className="container">
      <div>
        <Carousel
          activeIndex={activeIndex}
          onSelect={(index) => setActiveIndex(index)}
        >
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                style={{
                  maxHeight: "400px",
                  maxWidth: "100% ",
                  padding: "10px 0 0",
                }}
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          {images.map((image, index) => (
            <div key={image.id}>
              <img
                className="d-block w-100"
                style={{
                  maxHeight: "120px",
                  maxWidth: "25% ",
                  float: "left",
                  padding: "5px 5px 0 0",
                }}
                src={image.src}
                onClick={() => handleImageClick(image, index)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{ overflow: "auto" }}>
          <img
            style={{ maxHeight: `${700}px`, maxWidth: "100%" }}
            src={click?.src}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
