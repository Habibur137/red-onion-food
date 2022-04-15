import React from "react";
import "./register.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="reg-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" id="" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id=""
          />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
