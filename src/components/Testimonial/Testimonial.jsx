import React from 'react';
import './Testimonial.css';
import { LeftArrow, Rating, RightArrow } from '../../assets/Testimonial';

const Testimonial = () => {
  return (
    <div  className='testimonials-container  --d-flex' data-scroll-section>
        <div className="testimonials">
            <div className="testimonials-heading">
                <p className='sub-heading'>Testimonial</p>
                <h1>What Our Customer Say</h1>
                <img src={LeftArrow} alt="" className='left-arrow'/>
                <img src={RightArrow} alt="" className='right-arrow'/>
            </div>
            <div className="testimonial  --d-flex">
                <div  className='user1'>
                    <div className="info">
                        <h3>Kathleen Smith</h3>
                        <p>Fuel Company</p>
                    </div>
                    <div className="comment">
                        <p>
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                    <div className="rating">
                        <img src={Rating} alt="" />
                    </div>
                </div>
                <div  className='user2'>
                    <div className="info">
                        <h3>John Martin</h3>
                        <p>Restoration Company</p>
                    </div>
                    <div className="comment">
                        <p>
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                    <div className="rating">
                        <img src={Rating} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial