import React, { Component } from 'react';
import './About.css';
import aboutImg from './about-img.jpg';
class About extends Component {
  render() {
    return (
	    <section id="about">
	        <div className="container">
	            <div className="row">
	                <div className="col-md-5 col-lg-5 about-img">
	                    <img src={aboutImg} alt="about img" className="img-fluid" />
	                </div>
	                <div className="col-md-7 col-lg-7 heading">
	                    <h2>About me</h2>
	                    <span>ui/ux designer & web developer</span>
	                    <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
	                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	                </div>
	            </div>
	        </div>
	    </section>
    );
  }
}

export default About;
