import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import {Login} from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Productdetails from "./Productdetails";
import Cart from "./Cart";
import Order from "./Order";
import Placed from "./Placed";
import Navbar from "./Navbar";

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Productdetails" element={<Productdetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Placed" element={<Placed />} />
      <Route path="Navbar" element={<Navbar />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

