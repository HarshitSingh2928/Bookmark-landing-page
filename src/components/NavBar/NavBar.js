import React, { useState } from "react";
import "./NavBar.css";
import applogo from "../../images/logo-bookmark.svg";
import hamburger from "../../images/icon-hamburger.svg";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import close from "../../images/icon-close.svg";
import test from '../../images/icon-cross.png'
const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav> 
      <img src={applogo} />
      <div>
        <li>
          <ul>FEATURES</ul>
          <ul>PRICING</ul>
          <ul>CONTACT</ul>
        </li>
        <button>LOGIN</button>
      </div>

      {menuToggle ? (
        <img
          className="close"
          src={test}
          alt="Close Icon"
          onClick={() => setMenuToggle(!menuToggle)}
        />
      ) : (
        <img
          className="hamburger"
          src={hamburger}
          alt="Menu Icon"
          onClick={() => setMenuToggle(!menuToggle)}
        />
      )}

      {menuToggle && <HamburgerMenu />}
    </nav>
  );
};

export default NavBar;
