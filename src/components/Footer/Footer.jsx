import React from 'react';
import './Footer.css';
import { FooterImg, Logo, Socials } from '../../assets/Footer';

const Footer = () => {
  return (
    <div  className='footer-container  --d-flex'>
        <img src={FooterImg} alt="" className='footer-background'/>
        <div className="footer-body">
            <div className="footer-nav  --d-flex">
                <div className="logo-container  --d-flex">
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <li>Pages</li>
                    <li>Utility</li>
                    <li>Subscribe</li>
                </ul>
            </div>
            <div className="footer  --d-flex">
                <div className="footer-left">
                    <h3>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</h3>
                    <p>Email <br />contact@logistics.com</p>
                    <p>Call Us <br />(00) 112 365 489</p>
                </div>
                <div className="footer-right  --d-flex">
                    <ul>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Our Project</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>Style Guide</li>
                        <li>Changelog</li>
                        <li>Licenses</li>
                        <li>Protected</li>
                        <li>Not Found</li>
                    </ul>
                    <div className="form">
                        <input type="text" />
                        <button>Send Now</button>
                        <img src={Socials} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="text">Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</div>
            <div className="mini-nav">
                <ul>
                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                    <li>Password</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer