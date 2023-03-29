import React from 'react';
import './Header.css';
// import for header assets
import { Logo, Social1, Social2, Social3, Social4 } from '../../assets/Header';

const Header = () => {
  return (
    <div  className='header-container  --d-flex'>
        <div className="header  --d-flex">
            <div className="logo-container">
                <img src={Logo} alt="Company Logo" />
            </div>
            <div className="info-container  --d-flex">
                <div className="info info1">
                    <p>Mon - Sat 9.00 - 18.00</p>
                    <p>Sunday Closed</p>
                </div>
                <div className="info info2">
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                </div>
                <div className="info info3">
                    <p>Call Us</p>
                    <p>(00) 112 365 489</p>
                </div>
            </div>
        </div>
        <div className="navigation-container  --d-flex">
            <div className="navigation  --d-flex">
                <div className="left-nav --d-flex">
                    <ul className='--d-flex'>
                        <li className='--active'>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="right-nav  --d-flex">
                    <div className="socials  --d-flex">
                        <img src={Social1} alt="" />
                        <img src={Social2} alt="" />
                        <img src={Social3} alt="" />
                        <img src={Social4} alt="" />
                    </div>
                    <button>Request Quote</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header