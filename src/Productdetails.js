import React from "react";
import UserData from "./products.json";
import { useLocation } from "react-router-dom";
import "./Productdetails.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import Navbar from "./Navbar";

function Productdetails() {
  const location = useLocation();
  const { details } = location.state;

  const [disable, setdisable] = useState(false);
  const cartdata = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartdata);

  const addToCart = (el) => {
    console.log(cart, "I am cart initially");
    setCart((currentCart) => [...currentCart, el]);
    console.log(cart, "I am cart");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // e.preventDefault()
  }, [cart]);

  return (
    <div>
      <Navbar />

      <div
        class="card"
        id="body"
        style={{ width: "19rem", alignItems: "center" }}
      >
        {/* <img
              class="card-img-top"
              style={{ height: "18rem",width:"17rem" }}
              src={details.images[0]}
              alt="Card image cap"
            /> */}

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="card-img-top"
                style={{ height: "18rem", width: "18rem" }}
                src={details.images[0]}
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="card-img-top"
                style={{ height: "18rem", width: "18rem" }}
                src={details.images[1]}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="card-img-top"
                style={{ height: "18rem", width: "18rem" }}
                src={details.images[2]}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            style={{ color: "blue" }}
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              style={{ color: "blue" }}
              aria-hidden="true"
            ></span>
          </a>
          <a
            class="carousel-control-next"
            style={{ color: "blue" }}
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title" style={{ height: "3rem" }}>
            {details.title}
          </h5>
          <p class="card-text">$&nbsp;{details.price}</p>
          <p class="card-text">{details.category}</p>
          <p class="card-text" style={{ height: "5rem" }}>
            {details.description}
          </p>
          <button
            style={{ align: "end" }}
            class="btn btn-primary"
            disabled={disable}
            id="btn2"
            onClick={() => addToCart(details)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
