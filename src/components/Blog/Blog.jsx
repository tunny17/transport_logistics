import React from 'react';
import './Blog.css';
import { Blog1, Blog2, Blog3, Calendar1, Calendar2, Calendar3 } from '../../assets/Blog';

const Blog = () => {
  return (
    <div  className='blog-container  --d-flex'  data-scroll-section>
        <div className="blog">
            <div className="blog-heading">
                <p className='sub-heading'>Our Blog</p>
                <h2>Our Latest News</h2>
            </div>
            <div className='posts'>
                <div className="post">
                    <div className='post-img --d-flex'>
                        <img src={Blog1} alt="" />
                        <img src={Calendar1} alt="" />
                        <div className='--d-flex'>
                            <h3>08</h3>
                            <p>September</p>
                        </div>
                    </div>
                    <div className="news">
                        <h3 className='news-outline'>Inland freight a worthy solution for your business</h3>
                        <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </div>
                </div>
                <div className="post">
                    <div className='post-img --d-flex'>
                        <img src={Blog2} alt="" />
                        <img src={Calendar2} alt="" />
                        <div className='--d-flex'>
                            <h3>12</h3>
                            <p>September</p>
                        </div>
                    </div>
                    <div className="news">
                        <h3 className='golden'>How technology can help redraw the supply chain map</h3>
                        <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </div>
                </div>
                <div className="post">
                    <div className='post-img --d-flex'>
                        <img src={Blog3} alt="" />
                        <img src={Calendar3} alt="" />
                        <div className='--d-flex'>
                            <h3>25</h3>
                            <p>September</p>
                        </div>
                    </div>
                    <div className="news">
                        <h3 className='news-outline'>Five things you should have ready for your broker</h3>
                        <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </div>
                </div>
            </div>
        </div>
        <button>More Blog</button>
    </div>
  )
}

export default Blog