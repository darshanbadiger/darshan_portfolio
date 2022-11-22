// import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {

  // const [done, setDone] = useState(false);

  return (
   <div className="contact-form">
    <div className="w-left">
      <div className="asewome">
      <span>Get In Touch</span>
      <span>Contact Me</span>

      <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>

      </div>
    </div>


    <div className="c-right">
      <form>
        <input type="text" name='user_name' className='user' placeholder='Name'/>
        <input type="text" name='user_email' className='user' placeholder='Email'/>
        <textarea name='message' className='user' placeholder='Message'/>
        <input type='submit' value="send" className='button'/>
          {/* <span>{done && 'Thanks for Submitting'}</span> */}
        <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>

      </form>
    </div>
   </div>
  )
}

export default Contact
