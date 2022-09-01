import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

import "./Navbar.css";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
const cartdata = JSON.parse(localStorage.getItem("cart") || "[]");

function Navbar() {
  const [cartf, setCartf] = useState(cartdata);
  return (
    <div id="Nav" class="sticky">
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <Link to="/Product">
            <p class="navbar-brand" id="btn1">
              Products
            </p>
          </Link>
          <Link to="/Cart" state={{ cartdetails: cartf }}>
            <p class="navbar-brand" id="btn2">
              {" "}
              <IoMdCart />
              {cartf.length}{" "}
            </p>
          </Link>

          <Link to="/">
            <p class="navbar-brand" id="btn3">
              LogOut <IoLogOutOutline />
            </p>
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
