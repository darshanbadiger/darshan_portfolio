import React from 'react'
import './Works.css'
import Shop from '../../images/shop.png'
import Amazon from '../../images/amazon.png'
import Google from '../../images/google.png'
import Facebook from '../../images/facebook.png'
import Git from '../../images/github1.png'



const Works = () => {
    return (
        <div className="works">
            {/* Left side */}
            <div className="asewome">
                <span>My Work Experience</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, porro magnam. Earum iste natus sapiente impedit delectus, aspernatur sint animi doloribus deleniti, voluptas inventore quaerat numquam enim itaque quo! Nulla?</span>
                <button className="button d-button">Hire Me</button>
                <div className="blur blur1" style={{ background: "#abf1ff94" }}></div>
            </div>


            {/* Right side */}

            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Google} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Git} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Shop} alt="" />
                    </div>
                </div>


                {/* Background Circles */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yelloCircle"></div>

            </div>
        </div>
    )
}

export default Works
