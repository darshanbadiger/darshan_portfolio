import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import a1 from '../../images/1.png'
import a2 from '../../images/2.png'
import a3 from '../../images/3.png'
import a4 from '../../images/4.png'
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import {themeContext} from '../../Context'
import {useContext} from 'react'


const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: a1,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde tenetur laudantium animi cumque nobis voluptas perferendis temporibus, laboriosam dolorem sunt voluptates dolore corporis itaque eligendi ut pariatur soluta perspiciatis."
    },
    {
      img: a2,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde tenetur laudantium animi cumque nobis voluptas perferendis temporibus, laboriosam dolorem sunt voluptates dolore corporis itaque eligendi ut pariatur soluta perspiciatis."
    },
    {
      img: a3,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde tenetur laudantium animi cumque nobis voluptas perferendis temporibus, laboriosam dolorem sunt voluptates dolore corporis itaque eligendi ut pariatur soluta perspiciatis."
    },
    {
      img: a4,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde tenetur laudantium animi cumque nobis voluptas perferendis temporibus, laboriosam dolorem sunt voluptates dolore corporis itaque eligendi ut pariatur soluta perspiciatis."
    }

  ]

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span style={{color: darkMode?'white':'black'}}>Clients Always get</span>
        <span> Exceptoinal Work </span>
        <span style={{color: darkMode?'white':'black'}}>from me... </span>
        <div className="blur t-blur1" style={{ background: "var(--purple" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })};
      </Swiper>
    </div>
  )
}

export default Testimonials
