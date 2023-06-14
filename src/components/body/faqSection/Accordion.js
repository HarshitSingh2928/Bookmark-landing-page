import React, { useState } from 'react';
import './Accordian.scss'
import arrowIcon from '../../../images/icon-arrow.svg';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: 'What is Bookmark?',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      title: 'How can I request a new browser?',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      title: 'Is there a mobile app?',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      title: 'What about other Chromium browsers',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
  ];

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((accordion, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeAccordion ? 'active' : ''}`}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="accordion-header">
            <h3>{accordion.title}</h3>
            <img
              className={`accordion-icon ${index === activeAccordion ? 'rotate' : ''}`}
              src={arrowIcon}
              alt="Accordion Icon"
            />
          </div>
          {index === activeAccordion && (
            <div className="accordion-content">
              <p>{accordion.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
