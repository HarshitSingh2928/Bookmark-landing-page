import React, { useState } from 'react';
import './FeaturesSection.scss'
import SpeedySearching from './speedySearching/SpeedySearching';
import imgtab1 from '../../../images/illustration-features-tab-1.svg'
import imgtab3 from '../../../images/illustration-features-tab-3.svg'
import imgtab2 from '../../../images/illustration-features-tab-2.svg'
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  

  const tabsData = [
    {
      label: 'Simple Bookmarking',
      content: <SpeedySearching heading="Bookmark in one click" para={
        <>
          Organize your bookmark however you like. Our
          <br />
          simple drag-and-drop interface gives you complete
          <br />
          control over how you manage your favourite sites.
        </>
      } pic={imgtab1} />,
    },
    {
      label: 'Speedy Searching',
      content: <SpeedySearching heading="Intelligent search" para={
        <>
          Our powerful search feature will help you find saved
          <br />
          sites in no time at all. No need to trawl through all of
          <br />
          your bookmarks.
        </>
      } pic={imgtab2} />,
    },
    {
      label: 'Easy Sharing',
      content: <SpeedySearching heading="Share your bookmarks" para={
        <>
          Easily share your bookmarks and collections with
          <br />
          others. Create a shareable link that you can send at
          <br />
          the click of a button.
        </>
      } pic={imgtab3} />,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='feature-tab'>
    <div className='header'>
        <h1>Features</h1>
        <p>Our aim is to make it quick and easy for you to access your
            <br/>
            favourite websites. Your bookmarks sync between your devices 
            <br/>
            so you can access them on the go.
        </p>
    </div>
    <div className="tabs">
      <div className="tab-headers">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabsData[activeTab].content}
      </div>
    </div>
    </div>
    
  );
};

export default FeaturesSection;
