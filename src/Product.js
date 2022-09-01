import React from "react";
import UserData from "./products.json";
import "./product.css";
import "./Productdetails";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useState,useEffect } from "react";
import axios from 'axios';
import { IoMdCart } from "react-icons/io";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import Navbar from "./Navbar";
const cartdata = JSON.parse(localStorage.getItem("cart") || "[]");
function Product() {
  // var brands=["OPPO","Apple","Samsung","Huwei","Ifei Home","Soft Cotton"];
  // var category=["laptops","smartphones","furniture","groceries","skincare","fragrances"];
  // var allProducts=useSelector((state)=>state.allproducts);
  const productData = UserData.products;
  const [searchTerm, setSearchTerm] = useState("");
  const [mydata, setMydata] = useState(productData);
  const [cart, setCart] = useState(cartdata);
  const [disable, setdisable] = useState(false);

  // const addToCart = (el) =>{

  //   console.log(cart,"I am cart initially")
  //   setCart((currentCart) => [...currentCart, el]);
  //   console.log(cart,"I am cart")
  //   // mydata.filter((ele)=> {return ele.id == el.id?setdisable(true):setdisable(false)})

  // };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // e.preventDefault()
  }, [cart]);

  const handlePrice = () => {
    const numPrice = [...mydata].sort((a, b) => a.price - b.price);
    setMydata(numPrice);
  };

  const handleRating = () => {
    const numRating = [...mydata].sort((c, d) => c.rating - d.rating);
    setMydata(numRating);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br />
      <div>
        <form class="form-inline my-2 my-lg-0">
          <input
            id="search"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <br />
        <CDropdown id="dropdown">
          <CDropdownToggle color="secondary">sorting</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem onClick={handlePrice}>Price</CDropdownItem>
            <CDropdownItem onClick={handleRating}>Rating</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>

      {/* <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul> */}

      <p></p>
      <div id="cardd">
        {/* //////////// */}
        {mydata
          .filter((val, key) => {
            if (searchTerm === "") {
              return val.title;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val.title;
            }
          })

          .map((ele, index) => (
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
                <Link
                  to="/Productdetails"
                  style={{ alignContent: "center" }}
                  state={{ details: ele }}
                >
                  <button class="btn btn-primary" id="btn1">
                    Product Details
                  </button>
                </Link>
              
              </div>
            </div>
          ))}
      </div>
     
    </div>
  );
}

export default Product;

// filter((val)=>{
//   if(searchTerm===""){
//     return val
//   }
//   else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){

//   return val }
// }).

// <input
// type="checkbox"
// name="Samsung"
// value="Samsung"
// onChange={(e) => handleChange(e)}
// />

//storing it for search

// const handleChange = (event) => {
//   if (event.checked) {
//     fetch("https://dummyjson.com/products/category/smartphones")
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//         console.log(json, "yfufyf");
//         console.log(data, "fdryt");
//       });
// setData()

// checked.push("hi")
// console.log(checked.length)

//   // console.log('✅ Checkbox is checked' ,event.target.value);
//   UserData?.products.forEach(i=>{
//     if(i.brand===event.target.value){
//       brandsData.push(i)
//     }} )
//     setupdatedata(brandsData)
//   console.log("brandsData",brandsData, updatedata)

// console.log(setupdatedata(JSON.stringify({UserData})));
// setupdatedata(JSON.stringify({UserData}))
// console.log( updatedata?.UserData?.products)
// return(
//   <div>{UserData.products.title}<h>Hojhjr</h></div>
// )
// setBrand([brand, event.target.value])
// console.log({UserData})
// } else {
// console.log('⛔️ Checkbox is NOT checked');
// setBrand([brand.filter((brand)=>brand!==event.target.value)])
// setupdatedata({UserData.products.map()=>{()}})
//     setupdatedata(mydata);
//   }
//   setIsSubscribed((current) => !current);
// };
