import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* Left Part */}
      <div className="n-left">
      <div className="n-name">Darshan
      </div>
        <span>Toggle</span>
      </div>

      {/* Right side */}

      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  )
}

export default Navbar
