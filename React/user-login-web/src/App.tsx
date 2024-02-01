import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { userLoggedInAtom } from "./Utils/atoms";
import { useAtomValue } from "jotai";
import Dashboard from "./Pages/Dashboard";

function App() {
  const isUserLoggedIn = useAtomValue(userLoggedInAtom);
  return (
    <div className="main">
      <BrowserRouter>
        {isUserLoggedIn ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
