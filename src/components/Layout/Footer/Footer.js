import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
    <section id="footer">
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-6 col-md-3 footer-item">
                    <h3>tauhidul</h3>
                    <span>full stack front end back end web developer</span>
                </div>
                <div className="col-sm-6 col-md-3 footer-item">
                    <h3>Phone no.</h3>
                    <p>+880 1749-91 31 79</p>
                </div>
                <div className="col-sm-6 col-md-3 footer-item">
                    <h3>email</h3>
                    <p>tuhin2093@gmail.com</p>
                </div>
                <div className="col-sm-6 col-md-3 footer-item">
                    <h3>address</h3>
                    <p>Khilkhet,Dhaka,bangladesh</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center footer-down">
                    <hr />
                    <p>tauhid &copy; 2019.all right reserved, designed by tauhid</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Footer;
