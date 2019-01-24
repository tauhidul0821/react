import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
    <section id="counter">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-3 counter-item">
                    <div className="counter-icon">
                        <i className="fa fa-users"></i>
                    </div>
                    <h3>220</h3>
                    <p>happy clients</p>
                </div>
                <div className="col-md-3 counter-item">
                    <div className="counter-icon">
                        <i className="fa fa-thumbs-up"></i>
                    </div>
                    <h3>700</h3>
                    <p>happy clients</p>
                </div>
                <div className="col-md-3 counter-item">
                    <div className="counter-icon">
                        <i className="fa fa-edit"></i>
                    </div>
                    <h3>1100</h3>
                    <p>happy clients</p>
                </div>
                <div className="col-md-3 counter-item">
                    <div className="counter-icon">
                        <i className="fa fa-trophy"></i>
                    </div>
                    <h3>160</h3>
                    <p>happy clients</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Counter;
