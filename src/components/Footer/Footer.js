import React from 'react'
import './Footer.css'
import Back from '../../images/background.jpg'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Back} style={{width:'100%'}} alt="" />

        <div className="f-content">
            <span>darshanabadiger@gmail.com</span>

            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>

            </div>
        </div>
    </div>
  )
}

export default Footer
