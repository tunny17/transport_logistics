import React from 'react';
import './Navbar.css';
import { Social1, Social2, Social3, Social4 } from '../../assets/Header';

const Navbar = () => {
  return (
    <div className="navigation-container  --d-flex" data-scroll-section>
        <div className="navigation  --d-flex"  >
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
  )
}

export default Navbar