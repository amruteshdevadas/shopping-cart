import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <p className="fs-3 mx-3 ">
          Welcome to Shoping Cart
        </p>
        <ul class="navbar-nav me-auto ">
        <li class="nav-item">
        
           <Link className="btn btn-outline-dark" to="/">
           <i class="bi bi-house-fill"></i> Home
              </Link>
              </li>
              </ul>
            <Link className="btn btn-outline-dark" to="/cart">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {props.cartItem}
              </span>
            </Link>
         </div> 
      
     </nav> 
  );
}

export default NavBar;
