import React from 'react'
import './Intro.css'
import Insta from '../../images/instagram.png'
import Github from '../../images/github1.png'
import Linkedin from '../../images/linkedin.png'
import User from '../../images/user.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className="intro">
      {/* left side */}
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I am</span>
          <span>Darshan Badiger</span>
          <span>Web eveloper, SEO Expert, Digital Marketer, Content Writer, Team Leader</span>
        </div>

        <button className="button i-button">Hire Me</button>

        <div className="i-icons">
          <a href='https://www.linkedin.com/in/darshan-badiger-712270151/' target={"_blank"} rel="noreferrer">
            <img src={Linkedin} alt="Darshan" />
          </a>
          <a href='https://github.com/darshanbadiger' target={"_blank"} rel="noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href='https://instagram.com' target={"_blank"} rel="noreferrer">
            <img src={Insta} alt="" />
          </a>
        </div>
      </div>


      {/* Right Side */}
      <div className="i-right">
        <img src={User} alt=""/>

        <FloatingDiv/>
      </div>
    </div>
  )
}

export default Intro
