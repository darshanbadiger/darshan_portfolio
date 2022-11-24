import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import Shri from '../../images/shri.png'
import Dandeli from '../../images/dandeli.png'
import Asquare from '../../images/asquare.png'
import Amino from '../../images/aminos.png'
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

const Portfolio = () => {
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
        <span style={{color: darkMode?'white':''}}>Latest Projects</span>
        <span>Portfolio</span>
        <span style={{color: darkMode?'white':'black',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos minus suscipit quasi sunt reprehenderit ipsam maxime? Quaerat possimus quis itaque nesciunt exercitationem magnam eveniet repellendus natus. Nihil, labore quia?</span>
  
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        loop={true}
        >
            <SwiperSlide>
                <img src={Shri} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Amino} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Dandeli} alt="" />
            </SwiperSlide>


            <SwiperSlide>
                <img src={Asquare} alt="" />
            </SwiperSlide>
        </Swiper>
   
    </div>
  )
}

export default Portfolio
