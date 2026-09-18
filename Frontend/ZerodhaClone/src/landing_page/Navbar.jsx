import React from "react";
import "../App.css"; 
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-light bg-body-tertiary border-bottom" >
        <div class="container p-3">
          <Link class="navbar-brand" to="/">
          <img src="/media/logo.svg" alt="" style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/sign">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
             
            </ul>
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
