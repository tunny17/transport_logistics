import React from 'react';
import './Project.css';
import { Project1, Project2, Project3, Project4, Project5, ProjectBackground } from '../../assets/Project';

const Project = () => {
  return (
    <div  className='projects-container'>
        <div className="projects-heading">
            <h2>Transporting Across The World</h2>
        </div>
        <div className="projects  --d-flex">
            <figure>
                <img src={Project1} alt="" />
                <div  className='captions'>
                    <figcaption>Liquid Transportation</figcaption>
                    <figcaption>Premium Tankers</figcaption>
                </div>
            </figure>
            <figure>
                <img src={Project2} alt="" />
                <div  className='captions'>
                    <figcaption>Packaging Solutions</figcaption>
                    <figcaption>Warehouse Management</figcaption>
                </div>
            </figure>
            <figure>
                <img src={Project3} alt="" />
                <div  className='captions'>
                    <figcaption>Contract Logistics</figcaption>
                    <figcaption>Road Transportation</figcaption>
                </div>
            </figure>
            <figure>
                <img src={Project4} alt="" />
                <div  className='captions'>
                    <figcaption>Warehouse & Distribution</figcaption>
                    <figcaption>Large Warehouse</figcaption>
                </div>
            </figure>
            <figure>
                <img src={Project5} alt="" />
                <div  className='captions'>
                    <figcaption>Specialized Transport</figcaption>
                    <figcaption>Ocean Transports</figcaption>
                </div>
            </figure>
        </div>
        <button>More Work</button>
        <img src={ProjectBackground} alt="" className='project-background'/>
    </div>
  )
}

export default Project