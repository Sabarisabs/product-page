import React, { useState } from "react";

import "./MainPage.css";
import { Modal } from "react-bootstrap";
import Slideshow from "./SlideShow/Slideshow";

function LoginTask() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCart = () => {
    if (count > 0) {
      const totalAmount = count * 349;
      setShowModal(true);
      console.log(totalAmount);
    } else {
      alert("Select the product");
    }
  };
  return (
    <>
      <div class="header">
        <label id="logo">Sneakers</label>
        <div class="topnav-right">
          <a href="#">Collection</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div
        className="container container1"
        style={{
          width: "600px",
          float: "left",
          margin: "50px",
          position: "absolute",
        }}
      >
        <Slideshow />
      </div>
      <div class="card-2">
        <span>
          <b>Sneaker Company</b>
        </span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span style={{ color: "black", marginRight: "10px" }}>$125.00</span>
        <span style={{ position: "absolute" }}>50%</span>
        <br style={{ color: "black", width: "15px" }}></br>
        $250.00
        <br></br>
        <button class="inc" onClick={handleDecrement}>
          -
        </button>
        <span style={{ color: "black", margin: "10px" }}> {count}</span>
        <button class="inc " onClick={handleIncrement}>
          +
        </button>
        <button className="add" onClick={handleCart}>
          Add To Cart
        </button>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Body style={{ textAlign: "center" }}>
            <p>{count} item have been added to your cart.</p>
            <p>Total amount $: {count * 125}</p>
            <button className="btn btn-success">Click to Pay</button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
export default LoginTask;
