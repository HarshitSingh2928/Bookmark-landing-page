import React from 'react'
import './BrowserCard.css'
const BrowserCard = ({ logo, title, description, buttonLabel }) => {
  return (
    <div className="vertical-card">
    <img src={logo} alt="Logo" className="logo" />
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
    <div className="dot-container" />
    <button className="button">{buttonLabel}</button>
  </div>
  )
}

export default BrowserCard