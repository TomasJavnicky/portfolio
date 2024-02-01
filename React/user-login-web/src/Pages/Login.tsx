import React from "react";
import { Link } from "react-router-dom";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import "./CSS/Pages.css";
import handleLoginAtom from "../Utils/handleLoginAtom";
import { useSetAtom } from "jotai";
import { emailAtom, passwordAtom } from "../Utils/atoms";

const Login = () => {
  const setEmail = useSetAtom(emailAtom);
  const setPassword = useSetAtom(passwordAtom);
  const handleLogin = useSetAtom(handleLoginAtom);
  return (
    <div className="main">
      <h1>Welcome</h1>
      <div className="form">
        <MyInput type="text" placeholder="E-mail" onChange={setEmail} />
        <MyInput
          type="password"
          placeholder="Password"
          onChange={setPassword}
        />
        <MyButton buttonText="Login" onClick={handleLogin} />
      </div>
      <p>
        DON'T HAVE AN ACCOUNT? <Link to="/register">REGISTER!</Link>
      </p>
    </div>
  );
};

export default Login;
