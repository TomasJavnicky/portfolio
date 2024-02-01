import React from "react";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import { Link } from "react-router-dom";
import "./CSS/Pages.css";
import { useSetAtom, useAtomValue, useAtom } from "jotai";
import {
  newUsernameAtom,
  newPasswordAtom,
  newEmailAtom,
  createAccountButtonEnabledAtom,
  userCreatedMessageAtom,
} from "../Utils/atoms";
import handleRegistrationAtom from "../Utils/handleRegistrationAtom";

const Register = () => {
  const setNewUsername = useSetAtom(newUsernameAtom);
  const setNewPassword = useSetAtom(newPasswordAtom);
  const setNewEmail = useSetAtom(newEmailAtom);
  const createAccountButtonEnabled = useAtomValue(
    createAccountButtonEnabledAtom
  );
  const [userCreatedMessage, setUserCreatedMessage] = useAtom(
    userCreatedMessageAtom
  );
  const handleRegistration = useSetAtom(handleRegistrationAtom);

  return (
    <div className="main">
      <h1>Register here!</h1>
      <div className="form">
        <MyInput type="text" placeholder="E-mail" onChange={setNewEmail} />
        <MyInput type="text" placeholder="Username" onChange={setNewUsername} />
        <MyInput
          type="password"
          placeholder="Password"
          onChange={setNewPassword}
        />
        <MyButton
          buttonText="Confirm!"
          onClick={() => {
            handleRegistration().then((result) => {
              if (result === "success") {
                setUserCreatedMessage(true);
              } else {
                console.log("Error creating user");
              }
            });
          }}
          disabled={!createAccountButtonEnabled}
        />
      </div>
      {userCreatedMessage ? (
        <p>
          User successfully created. Now you can <Link to="/">LOGIN</Link>.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Register;
