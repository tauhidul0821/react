import React, { Component } from 'react';
import './Home.css';
// import Slider from '../Page/Slider/Slider';
import About from '../Page/About/About';
import Services from '../Page/Services/Services';
import Counter from '../Page/Counter/Counter';
import Portfolio from '../Page/Portfolio/Portfolio';
import Blog from '../Page/Blog/Blog';
import Testimonial from '../Page/Testimonial/Testimonial';
import Contact from '../Page/Contact/Contact';
import Footer from '../Layout/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
         <About/> 
        
         <Services/> 
         <Counter /> 
         <Portfolio />
         <Blog /> 
         <Testimonial /> 
         <Contact /> 
         < Footer /> 
      </div>
    );
  }
}

export default Home;
