import React from "react";
import "./HamburgerMenu.css";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg"
const HamburgerMenu = () => {
  return (
    <div className="hamburgerMenu">
      <ul>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <button>LOGIN</button>
      </ul>
     
      <footer>
      <img src={facebook} />
        <img src={twitter} />
        
      </footer>
    </div>
  );
};

export default HamburgerMenu;
