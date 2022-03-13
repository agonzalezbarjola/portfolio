import React from "react";
import "./Navbar.scss";
import logo from "../../media/logo/logo-agb.png";

const Nabvar = ({ isScrolling }) => {
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo">
        <img src={logo} alt="navbar-logo"></img>
      </div>
    </nav>
  );
};

export default Nabvar;
