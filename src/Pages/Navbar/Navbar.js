import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import logo from "../../images/logo2.png";
import "./navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="link">
        <Link to="/orders" className="icon">
          <ShoppingCartIcon />
          <sup>0</sup>
        </Link>
        {user ? (
          <Link to="/" onClick={() => signOut(auth)}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
