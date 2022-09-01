import React, { useState } from "react";
import { Router } from "react-router-dom";
import { Link, useNavigate, useEffect, useLocation } from "react-router-dom";

import Navbar from "./Navbar";

function Order() {
  const location = useLocation();
  const { finalcart, cost } = location.state;
  const [formdata, setFormdata] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    AdressLine1: "",
    AdressLine2: "",
    PhoneNumber: "",
  });
  const navigation = useNavigate();

  // function handleSubmit(event) {
  //     event.preventDefault();
  //     // const data = new FormData(event.target);
  //     // console.log(data);
  //     // setFormdata(data)
  //     if (formdata){
  //         console.log("ijrfhebfyb");
  //         navigation("/Placed",{state:{{adress:formdata}}})
  //     }

  // }

  const handleChange = (e) => {
    formdata[e.target.name] = e.target.value;
  };

  return (
    <div>
      <Navbar></Navbar>

      <div class="container">
        <h2>Shipping Adress</h2>
        {/* <form > */}
        <div class="form-group">
          <label for="firstname">FirstName:</label>
          <input
            type="text"
            class="form-control"
            name="FirstName"
            placeholder="Enter FirstName"
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="lastname">LastName:</label>
          <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="Enter LastName"
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="adressline1">AdressLine1:</label>
          <input
            class="form-control"
            name="AdressLine1"
            placeholder="Enter Hno/village/city"
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label for="AdressLine2">AdressLine2:</label>
          <input
            class="form-control"
            name="AdressLine2"
            placeholder="Enter Pincode"
            onChange={handleChange}
            required
          />
        </div>

        <div class="form-group">
          <label for="PhoneNumber">Phone Number:</label>
          <input
            class="form-control"
            name="PhoneNumber"
            placeholder="Enter Phonenumber"
            onChange={handleChange}
            required
          />
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" /> Confirm for placing order
          </label>
        </div>
        <Link
          to="/Placed"
          state={{ finalform: formdata, finallycart: finalcart, cost: cost }}
        >
          <button type="submit" class="btn btn-default">
            Submit
          </button>
        </Link>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Order;
