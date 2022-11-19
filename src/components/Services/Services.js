import React from 'react'
import './Services.css'
import Resume from './Darshan.pdf'
import Web from '../../images/web.png'
import Marketing from '../../images/marketing.png'
import Memo from '../../images/memo.png'
import Card from '../Card/Card'


const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="asewome">
        <span>My Special</span>
        <span>Services</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, porro magnam. Earum iste natus sapiente impedit delectus, aspernatur sint animi doloribus deleniti, voluptas inventore quaerat numquam enim itaque quo! Nulla?</span>
        <a href={Resume} dowload>
        <button className="button d-button">Hire Me</button>
        </a>
        <div className="blur blur1" style={{ background: "#abf1ff94" }}></div>
      </div>


      {/* Rifht side */}
      <div className="cards">
      {/* Card 1 */}
        <div style={{left:'14rem'}}>
          <Card
            emoji={Web}
            title={"Front-end Development"}
            detail={"Developing variety, attractive and responsive websites"}
          />
        </div>

         {/* Card 2 */}
         <div style={{left:'-3rem', top:'12rem'}}>
          <Card
            emoji={Marketing}
            title={"Digital Marketing"}
            detail={"SEO, SEM, SMM, PPC, Posts creation using Canva"}
          />
        </div>

         {/* Card 3 */}
         <div style={{left:'13rem', top:'18rem'}}>
          <Card
            emoji={Memo}
            title={"Team Lead"}
            detail={"Attending meetings with clients, assigning tasks to members"}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Services
