import React from "react";
import "./ExtensionSection.css";
import BrowserCard from "./BrowserCard";
import logoImageChrome from "../../../images/logo-chrome.svg";
import logoImageFirefox from "../../../images/logo-firefox.svg";
import logoImageOpera from "../../../images/logo-opera.svg";
const ExtensionSection = () => {
  return (
    <section className="extension">
      <div className="header">
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          <br />
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
     
      <div className="browser-card">
        
      <BrowserCard
        logo={logoImageChrome}
        title="Add to Chrome"
        description="Minimum version 62"
        buttonLabel="Add & Install Extention"
      />
      <BrowserCard
        logo={logoImageFirefox}
        title="Add to Firefox"
        description="Minimum version 55"
        buttonLabel="Add & Install Extention"
      />
      <BrowserCard
        logo={logoImageOpera}
        title="Add to Opera"
        description="Minimum version 46"
        buttonLabel="Add & Install Extention"
      />
      </div>
     
    </section>
  );
};

export default ExtensionSection;
