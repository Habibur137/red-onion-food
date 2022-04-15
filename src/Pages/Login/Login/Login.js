import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="reg-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form className="form">
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" id="" />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          New To Red Onion? <Link to="/register"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
