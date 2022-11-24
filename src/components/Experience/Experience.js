import React from 'react'
import './Experience.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

const Experience = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achivement">
        <div className="circle" style={{color: darkMode?'black':''}}>2+</div>
        <span style={{color:'black'}}>Years</span>
        <span>Experience</span>
      </div>

      <div className="achivement">
        <div className="circle">20+</div>
        <span style={{color:'black'}}>Projects</span>
        <span>Completed</span>
      </div>

      <div className="achivement">
        <div className="circle">6+</div>
        <span style={{color:'black'}}>Clients</span>
        <span>Handled</span>
      </div>
    </div>
  )
}

export default Experience
