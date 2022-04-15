import React from "react";
import "./register.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  let errorMessage;
  if (user) {
    console.log(user);
  }
  if (loading || updating) {
    return <p>Loading...........</p>;
  }
  if (error || error1) {
    errorMessage = <p>Error: {error.message}</p>;
  }

  const handleForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  return (
    <div className="reg-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form className="form" onSubmit={handleForm}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" id="" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id=""
          />
          <input type="submit" value="Sign Up" />
        </form>
        {errorMessage}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
