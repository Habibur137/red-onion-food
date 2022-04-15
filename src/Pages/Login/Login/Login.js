import React from "react";
import logo from "../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="reg-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form className="form" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" id="" />
          <input type="submit" value="Login" />
        </form>
        <p>
          New To Red Onion? <Link to="/register"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
