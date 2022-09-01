import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Order from "./Order";
import "./Cart.css";
import Navbar from "./Navbar";
function Cart() {
  // const location = useLocation();
  // const { cartdetails } = location.state;
  // console.log(cartdetails,"I am cart details")
  // console.log( cartdetails.length,"I am length")
  const cartdetails = JSON.parse(localStorage.getItem("cart") || "[]");
  // console.log( typeof {cartdetails},"I am length")
  // const [ramesh,setramesh]=useState(cartdetails)
  const [originaldetails, setOriginaldetails] = useState(cartdetails);

  const totalCost = () => {
    return originaldetails.reduce((sum, { price }) => sum + price, 0);
  };
  const removedata = (removeitem, index) => {
    setOriginaldetails(originaldetails.filter((item) => item !== removeitem));
    window.location.reload();

    // setramesh(originaldetails)
  };

  useEffect(
    (e) => {
      localStorage.setItem("cart", JSON.stringify(originaldetails));

      //  e.preventDefault()
      //  removedata();
    },
    [originaldetails]
  );

  return (
    <div>
      {" "}
      <div>
        <Navbar></Navbar>
      </div>
      <div id="totalcost" style={{ width: "18rem" }}>
        <h4> Total Items: {originaldetails.length}</h4>
        <h4> Total Cost: ${totalCost()}</h4>
        <Link
          to="/Order"
          state={{ finalcart: originaldetails, cost: totalCost() }}
        >
          {" "}
          <button id="placeorder">place Order</button>
        </Link>{" "}
      </div>
      {originaldetails.map((ele, index) => (
        <div
          key={index}
          class="card"
          id="cardbody"
          style={{ width: "19.5rem", display: "inline-grid" }}
        >
          <img
            class="card-img-top"
            style={{ height: "18rem" }}
            src={ele.images[0]}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title" style={{ height: "3rem" }}>
              {ele.title}
            </h5>
            <p class="card-text">$&nbsp;{ele.price}</p>
            <p class="card-text">{ele.category}</p>
            <p class="card-text" style={{ height: "5rem" }}>
              {ele.description}
            </p>
            <button onClick={() => removedata(ele)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
