import React from "react";
import "./CSS/Pages.css";
import { userDataAtom, userLoggedInAtom } from "../Utils/atoms";
import { useAtomValue, useSetAtom } from "jotai";
import MyButton from "../Components/MyButton/MyButton";
import handleDeleteAccountAtom from "../Utils/handleDeleteAccountAtom";

const Dashboard = () => {
  const userData = useAtomValue(userDataAtom);
  const setUserLoggedIn = useSetAtom(userLoggedInAtom);
  const handleDeleteAccount = useSetAtom(handleDeleteAccountAtom);
  return (
    <div className="main">
      <h2>Hello {userData.username}</h2>
      <div className="buttons">
        <MyButton
          buttonText="Logout"
          onClick={() => setUserLoggedIn(false)}
          disabled={false}
        />
        <MyButton
          buttonText="Delete account"
          onClick={handleDeleteAccount}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
