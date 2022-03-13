import React from "react";
import "./Navbar.scss";
import logo from "../../media/logo/logo-agb.png";

const Nabvar = ({ isScrolling }) => {

  const toTheTop =()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar__logo">
        <img src={logo} alt="navbar-logo" onClick={toTheTop}></img>
      </div>
    </nav>
  );
};

export default Nabvar;
