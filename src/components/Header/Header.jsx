import React from 'react';
import './Header.css';
// import for header assets
import { Logo } from '../../assets/Header';

const Header = () => {
  return (
    <div  className='header-container  --d-flex'  data-scroll-section>
        <div className="header  --d-flex"  data-scroll-section>
            <div className="logo-container">
                <img src={Logo} alt="Company Logo" />
            </div>
            <div className="info-container  --d-flex">
                <div className="info info1" data-scroll-section>
                    <p>Mon - Sat 9.00 - 18.00</p>
                    <p>Sunday Closed</p>
                </div>
                <div className="info info2" data-scroll-section>
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                </div>
                <div className="info info3" data-scroll-section>
                    <p>Call Us</p>
                    <p>(00) 112 365 489</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header