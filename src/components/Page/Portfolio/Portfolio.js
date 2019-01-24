import React, { Component } from 'react';
import './Portfolio.css';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
class Portfolio extends Component {
  render() {
    return (
      
    <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col heading text-center">
                    <h6>portfolio</h6>
                    <h2>work i have done</h2>
                </div>
            </div>
            <div className="row">
                <div className="search-bar">
                    <ul>
                        <li>web <span>/</span></li>
                        <li>androaid<span>/</span></li>
                        <li>application</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 portfolio-item">
                    <img src={img1} alt="portfolio-img" className="img-fluid" />
                </div>
                <div className="col-md-4 portfolio-item">
                    <img src={img2} alt="portfolio-img"  className="img-fluid" />
                </div>
                <div className="col-md-4 portfolio-item">
                    <img src={img3} alt="portfolio-img" className="img-fluid" />
                </div>
                <div className="col-md-4 portfolio-item">
                    <img src={img2} alt="portfolio-img" className="img-fluid" />
                </div>
                <div className="col-md-4 portfolio-item">
                    <img src={img1} alt="portfolio-img" className="img-fluid" />
                </div>
                <div className="col-md-4 portfolio-item">
                    <img src={img4} alt="portfolio-img" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;
