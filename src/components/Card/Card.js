import React from 'react'
import './Card.css'

const Card = ({ emoji, title, detail }) => {
  return (
    <div className="cards-1">
        <img src={emoji} alt="" />
        <span>{title}</span>
        <span>{detail}</span>
        <button className="button card-button">Know More</button>
    </div>
  )
}


export default Card
