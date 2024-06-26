import React from "react";
import "./navbar.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/user-login");
  };
  return (
    <div className="container">
      <div className="container2">
        <div className="logo">
          <img src="/Logo.svg" alt="" />
        </div>
        <div className="wordings">
          <div className="create"> Create Event</div>

          <div className="create">
            <MdLanguage /> English
          </div>
          <button type="button" className="btn" onClick={() => handleSignIn()}>
            Sign in
          </button>
        </div>
      </div>
      <div className="intro">Find your next experience</div>

      <div className="searchbar">
        <input
          type="text"
          className="cityinput"
          placeholder="search for events,concerts,organizers and more  "
        />
        <IoSearchOutline />
      </div>
    </div>
  );
};

export default Navbar;
