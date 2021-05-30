import React from "react";
import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/">
            Features
          </a>
          <a className="nav-item nav-link" href="/">
            Pricing
          </a>
          <span className="nav-item nav-link disabled" >
            <i className="fas fa-shopping-cart count_cart"> <span className="cartItemCount">{props.cartCount}</span> </i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
