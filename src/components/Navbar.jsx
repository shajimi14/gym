import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setnav] = useState(false);

  const handleChangeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", handleChangeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input type="checkbox" id="menu-btn" className="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
        <Link to="main" smooth={true} duration={500}>
  Header
</Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={500}>
            Features
          </Link>
        </li>
        {/* <li>
          <Link to="offer" smooth={true} duration={500}>
            Offer
          </Link>
        </li> */}
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
