import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import logo from "../../images/logo2.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="link">
        <Link to="/cart" className="icon">
          <ShoppingCartIcon />
          <sup>0</sup>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
