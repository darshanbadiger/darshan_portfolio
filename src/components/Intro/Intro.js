import React from 'react'
import './Intro.css'
import Insta from '../../images/instagram.png'
import Github from '../../images/github1.png'
import Linkedin from '../../images/linkedin.png'
import User from '../../images/user.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Web from '../../images/web.png'
import Chart from '../../images/chart.png'



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
        <img src={User} alt="" />
        <div style={{ top: '-%4', left: '68%' }}>
          <FloatingDiv image={Web} text1='FRONT-END' text2='DEVELOPER' />
        </div>
        <div style={{ top: '18rem', left:'0rem'}}>
          <FloatingDiv image={Chart} text1='DIGITAL' text2='MARKETING' />
        </div>
      </div>

      {/* blur divs */}

      <div className="blur" style={{background: "reg(238 210 255)"}}></div>
      <div className="blur" style={{top:'27rem',width:'21rem', height:'11rem',background: "#c1f5ef"}}></div>
    </div>
  )
}

export default Intro
