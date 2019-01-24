import React, { Component } from 'react';
import './Testimonial.css';
import img1 from './img/testimonial-img.jpg';

class Testimonial extends Component {
  render() {
    return (
    <section id="testimonial">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center testimonial-item">
                    <img src={img1} alt="img" className="img-fluid" />
                    <h2>Tauhidul Islam</h2>
                    <span>web developer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias nobis fuga dolorum quo ipsa voluptatibus doloremque amet nisi dolore.</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Testimonial;
