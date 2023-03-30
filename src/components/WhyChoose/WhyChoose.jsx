import React from 'react';
import './WhyChoose.css';
import { Airplane, Card } from '../../assets/WhyChooseUs';

const WhyChoose = () => {
  return (
    <div  className='why-choose-container  --d-flex'>
        <div className="left">
            <img src={Airplane} alt="" className='why-choose-airplane'/>
            <img src={Card} alt="" className='why-choose-card'/>
        </div>
        <div className="right">
            <p  className='sub-heading'>Why Choose</p>
            <h2>We create opportunity to reach potential</h2>
            <h4>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </h4>
            <div className="opportunity">
                <div>
                    <li className='opportunity1'>Safe Package</li>
                    <li className='opportunity2'>Global Tracking</li>
                    <li className='opportunity3'>24/7 Support</li>
                </div>
                <div>
                    <li className='opportunity4'>Ship Everywhere</li>
                    <li className='opportunity5'>24/7 Support</li>
                    <li className='opportunity6'>Transparent Pricing</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose