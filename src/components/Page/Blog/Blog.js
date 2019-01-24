import React, { Component } from 'react';
import './Blog.css';
import img1 from './img/img-1.jpg';
import img3 from './img/img-3.jpg';
import img4 from './img/img-4.jpg';


class Blog extends Component {
  render() {
    return (
    <section id="blog">
        <div className="container">
            <div className="row">
                <div className="col heading text-center">
                    <h6>blog</h6>
                    <h2>latest news</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 blog-item">
                    <img src={img1} alt="blog-img" className="img-fluid" />
                    <div className="blog-content">
                        <h3>the best of web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure asperiores natus hic alias similique voluptas pariatur, incidunt deserunt nihil.</p>
                    </div>
                </div>
                <div className="col-md-4 blog-item ">
                    <img src={img3} alt="blog-img" className="img-fluid" />
                    <div className="blog-content">
                        <h3>the best of web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure asperiores natus hic alias similique voluptas pariatur, incidunt deserunt nihil.</p>
                    </div>
                </div>
                <div className="col-md-4 blog-item">
                    <img src={img4} alt="blog-img" className="img-fluid" />
                    <div className="blog-content">
                        <h3>the best of web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure asperiores natus hic alias similique voluptas pariatur, incidunt deserunt nihil.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Blog;
