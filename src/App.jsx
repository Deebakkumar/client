import React, { useState, createContext } from "react";
import Login from "./Components/Login";
import OTPInput from "./Components/OTPInput";
import Recovered from "./Components/Recovered";
import Reset from "./Components/Reset";
import "./App.css";

export const RecoveryContext = createContext();


function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  function NavigateComponents() {
    switch (page) {
      case "login":
        return <Login />;
      case "otp":
        return <OTPInput />;
      case "reset":
        return <Reset />;
      default:
        return <Recovered />;
    }
  }

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
      <div className="flex justify-center items-center">
        <NavigateComponents />
      </div>
    </RecoveryContext.Provider>
  );
}

export default App;
