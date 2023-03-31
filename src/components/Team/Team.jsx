import React from 'react';
import './Team.css';
import { Social1, Social2, Social3, Team1, Team2, Team3 } from '../../assets/Team';

const Team = () => {
  return (
    <div  className='team-container  --d-flex'  data-scroll-section>
        <div className="team-info">
            <div className="team-heading">
                <p  className='sub-heading'>The Transporters</p>
                <h2>Meet Expert Team</h2>
            </div>
            <div className="team-images-container  --d-flex">
                <figure  className='team-image  --d-flex'>
                    <img src={Team1} alt="" />
                    <img src={Social1} alt="" className='social'/>
                    <div className="team-image-caption">
                        <figcaption>Jessca Arow</figcaption>
                        <figcaption>Designer</figcaption>
                    </div>
                </figure>
                <figure  className='team-image  --d-flex'>
                    <img src={Team2} alt="" />
                    <img src={Social2} alt="" className='social'/>
                    <div className="team-image-caption">
                        <figcaption>Kathleen Smith</figcaption>
                        <figcaption>Designer</figcaption>
                    </div>
                </figure>
                <figure  className='team-image  --d-flex'>
                    <img src={Team3} alt="" />
                    <img src={Social3} alt="" className='social'/>
                    <div className="team-image-caption">
                        <figcaption>Rebecca Tylor</figcaption>
                        <figcaption>Designer</figcaption>
                    </div>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Team