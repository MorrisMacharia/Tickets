import React from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="log">
      <div className="bar">
        <div className="logo">
          <img src="/Logo.svg" alt="logo" />
        </div>
        <div className="cancel">
          <button>X</button>
        </div>
      </div>
      <h1>Welcome to TicketWave</h1>
      <div className="bars">
        <div>Enter your Email</div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="bttns1">
        <button type="button" className="btn3">
          Continue
        </button>

        <button type="button" className="btn4">
          {" "}
          <FcGoogle /> Continue with Google
        </button>
        <button type="button" className="btn5">
          {" "}
          <FaApple /> Continue with Apple
        </button>
      </div>
      <div className="sgn">
        <a href="url">sign in</a>
      </div>
    </div>
  );
};

export default Login;
