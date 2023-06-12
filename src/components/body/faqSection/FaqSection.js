import React from "react";
import Accordion from "./Accordion";
import "./FaqSection.css";
const FaqSection = () => {
  return (
    <section className="faqSection">
      <div className="header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are someof our FAQs. If you have any other questions
          <br />
          you'd like answered please feel free to email us.
        </p>
      </div>
      <div className="accordion">
      <Accordion />
      </div>
      <button>
        More Info
      </button>
      
    </section>
  );
};

export default FaqSection;
