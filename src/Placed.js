import React from "react";
import { useLocation } from "react-router-dom";
import "./placed.css";
import Navbar from "./Navbar";
function Placed() {
  const location = useLocation();
  const { finalform, finallycart, cost } = location.state;
  // const value = data.get('email');
  // console.log(finalcart,"I am finalcart")
  console.log(finallycart, "I am finallycart");
  return (
    <div>
      <Navbar></Navbar>
      <div id="placed">
        <h4>No.of products: {finallycart.length}</h4>
        <h4>total Cost: ${cost}</h4>
        Mr.{finalform.FirstName}
        <br /> your order for the following products has been placed.
        <br />
        <br />
        <h6>Shipping Address :</h6>
        {finalform.AdressLine1} <br />
        {finalform.AdressLine2} <br />
        {finalform.email} <br />
        {finalform.PhoneNumber}
      </div>

      <div>
        {finallycart.map((item, id) => {
          return (
            <div
              key={id}
              class="card"
              id="cardbody"
              style={{ width: "19.5rem", display: "inline-grid" }}
            >
              <img
                class="card-img-top"
                style={{ height: "18rem" }}
                src={item.images[0]}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title" style={{ height: "3rem" }}>
                  {item.title}
                </h5>
                <p class="card-text">$&nbsp;{item.price}</p>
                <p class="card-text">{item.category}</p>
                <p class="card-text" style={{ height: "5rem" }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Placed;
