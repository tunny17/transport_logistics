import React from 'react';
import './Contact.css';
import { ClientLogo } from '../../assets/Contact';

const Contact = () => {
  return (
    <div  className='contact-container  --d-flex' data-scroll-section>
        <div className="contact  --d-flex">
            <div className="contacts">
                <p className='sub-heading'>Contact</p>
                <h1>Get in touch with us</h1>
                <h4>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</h4>
                <ul>
                    <li>Email <br />contact@logistics.com</li>
                    <li>Call Us <br />(00) 112 365 489</li>
                    <li>Mon - Sat 9.00 - 18.00 <br />Sunday Closed</li>
                </ul>
            </div>
            <div className="form">
                <input type="text" placeholder='Your name*'/> <input type="email" placeholder='Email*'/> <br /> 
                <input type="number" placeholder='Phone Number*'/> <input type="text" placeholder='City*'/>
                <textarea name="message" id="" cols="71" rows="8" placeholder='Your Message'></textarea>
                <button>Submit Message</button>
            </div>
            <img src={ClientLogo} alt="" className='client-logo'/>
        </div>
    </div>
  )
}

export default Contact