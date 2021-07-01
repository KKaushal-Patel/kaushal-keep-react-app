import React from "react";
import logo from "./Images/logo11.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Kaushal Keep</h1>
      </div>
    </>
  );
};

export default Header;
