import React from 'react';
import './About.css';
import { About1, About2, AboutBackground } from '../../assets/About'

const About = () => {
  return (
    <div  className='about-container  --d-flex'  data-scroll-section>
        <img src={AboutBackground} alt="" className='about-background'/>
        <div className="card"  data-scroll data-scroll-speed='-1'>
            <div className="card-text-container">
                <p className='sub-heading'>Why Us</p>
                <h1>We provide full range global logistics solution</h1>
                <h4>
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br /> 
                    <br />
                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </h4>
                <h3>Delivery on Time</h3>
                <br />
                <h3>Optimized Travel Cost</h3>
            </div>
            <div className="card-image-container">
                <img src={About1} alt="" />
                <img src={About2} alt="" className='about-overlay'/>
            </div>
        </div>
        <div className="statistics  --d-flex">
            <div>
                <p>1294</p>
                <p>Delivered Packages</p>
            </div>
            <div>
                <p>3594</p>
                <p>Satisfied Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About