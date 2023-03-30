import React from 'react';
import './Services.css';
// icon imports
import { Service1, Service2, Service3, Service4 } from '../../assets/Services';

const Services = () => {
  return (
    <div className='services-container  --d-flex'>
        <div className="services  --d-flex">
            <div className="services-heading">
                <p className='sub-heading'>What We Do</p>
                <h2>Safe & Reliable <br /> Cargo Solutions</h2>
            </div>
            <div className="service  --d-flex">
                <figure className='--d-flex'>
                    <div>
                        <img src={Service1} alt="" />
                    </div>
                    <figcaption>
                        <b>Sea Transport Services</b>
                        <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </figcaption>
                </figure>
                <figure className='--d-flex'>
                    <div>
                        <img src={Service2} alt="" />
                    </div>
                    <figcaption>
                        <b>Warehousing Services</b>
                        <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </figcaption>
                </figure>
                <figure className='--d-flex'>
                    <div>
                        <img src={Service3} alt="" />
                    </div>
                    <figcaption>
                        <b>Air Fright Services</b>
                        <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </figcaption>
                </figure>
                <figure className='--d-flex'>
                    <div>
                        <img src={Service4} alt="" />
                    </div>
                    <figcaption>
                        <b>Local Shipping Services</b>
                        <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Services