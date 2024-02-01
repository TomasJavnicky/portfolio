import React from "react";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import "./CSS/Pages.css";

const Register = () => {
  return (
    <div className="main">
      <h1>Register here!</h1>
      <div className="form">
        <MyInput type="text" placeholder="E-mail" onChange={() => {}} />
        <MyInput type="text" placeholder="Username" onChange={() => {}} />
        <MyInput type="password" placeholder="Password" onChange={() => {}} />
        <MyButton buttonText="Confirm!" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Register;
