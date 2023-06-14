import React from "react";
// import image from "../../images/logo-bookmark.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import {ReactComponent as Logo} from "../../images/logo-bookmark.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <Logo className="logo"/>
        <div>
          <li>
            <ul>FEATURES</ul>
            <ul>PRICING</ul>
            <ul>CONTACT</ul>
          </li>
        </div>
      </div>
      <div className="logos">
<img src={facebook}/>
<img src={twitter}/>
      </div>
    </div>
  );
};

export default Footer;
