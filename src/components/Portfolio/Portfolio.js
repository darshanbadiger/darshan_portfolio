import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Amino from '../../images/aminos.png'
import Dandeli from '../../images/dandeli.png'
import Asquare from '../../images/asquare.png'
import Shri from '../../images/shri.png'


const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Heading */}

      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >

        <SwiperSlide>
          <img src={Dandeli} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Amino} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shri} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Asquare} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
