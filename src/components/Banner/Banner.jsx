import React from 'react';
import './Banner.css';
import BannerBackground from '../../assets/Hero-img.png';
import BannerBtnOverlay from '../../assets/Banner-Btn-Overlay.svg';

const Banner = () => {
  return (
    <div  className='banner-container'>
        <div className="banner">
            <p>Logistics & Supply Chain Solutions</p>
            <h1>Your Gateway <br /> to any Destination in the World</h1>
            <h4>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.</h4>
            <button>Explore More</button>
            <img src={BannerBtnOverlay} alt="" className='overlay'/>
        </div>
        <img src={BannerBackground} alt="" className='background-img'/>
    </div>
  )
}

export default Banner