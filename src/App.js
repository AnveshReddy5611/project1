import "./App.css";
import React, { useEffect, useState } from "react";
import Product from "./Product";

import { useNavigate } from "react-router-dom";
// import { render } from 'react-dom';
export const Login =() => {
  const initialValues = { email: "", password: "" };
  const [formdata, setFormdata] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // const [submit, setSubmit] = useState(false)
  const redirect = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formdata);
    if (Object.keys(errors).length === 0) {
      redirect("/Product");
      // root.render(
      // <React.StrictMode>
      //   <Product/>
      // </React.StrictMode>

      // <Redirect to="./product.js"/>
      // );
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  }

  useEffect(() => {
    validation(formdata);
  }, [formdata]);

  function validation(e) {
    const err = {};
    const small = new RegExp("^(?=.*[a-z])");
    const capital = new RegExp("^(?=.*[A-Z])");
    const numbers = new RegExp("^(?=.*[0-9])");
    const character = new RegExp("^(?=.*[!@#$%^&*])");
    const len = new RegExp("^(?=.{8,})");
    const emailcheck =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!e.email) {
      err.email = "Email is required!";
    } else if (!emailcheck.test(e.email)) {
      err.email = "Please enter a valid email";
    }
    if (!e.password) {
      err.password = "Password is required!";
    } else if (!small.test(e.password)) {
      err.password = "Password should contain atleast one small alphabet!";
    } else if (!capital.test(e.password)) {
      err.password = "Password should contain atleast one capital alphabet!";
    } else if (!numbers.test(e.password)) {
      err.password = "Password should contain atleast one number!";
    } else if (!character.test(e.password)) {
      err.password = "Password should contain atleast one special character!";
    } else if (!len.test(e.password)) {
      err.password = "Password length should contain atleast 8 characters!";
    }
    setErrors(err);
  }
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <div>
        <input type="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}></input>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <br/>
        <div>
        <input type="password" name="password" value={formdata.password} onChange={(e)=>handleChange(e)}></input>
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button>Submit</button>
      </form> */}

      <form onSubmit={handleSubmit}>
        <section class="vh-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  class="card bg-dark text-white"
                  style={{ borderradius: "1rem" }}
                >
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          class="form-control form-control-lg"
                          placeholder="Enter email"
                          name="email"
                          value={formdata.email}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <label class="form-label" for="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                          name="password"
                          placeholder="Enter password"
                          value={formdata.password}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.password && <p>{errors.password}</p>}
                        <label class="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>

                      {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}

                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>

                      {/* <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div> */}
                    </div>

                    {/* <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}


