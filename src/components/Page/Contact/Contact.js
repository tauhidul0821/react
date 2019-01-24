import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col heading text-center">
                    <h6>contact</h6>
                    <h2>get in touch</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <form action="#">
                        <div className="row contact-form">
                            <div className="col-md-6 form-group">
                                <input type="text" placeholder="name" className="form-control" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" placeholder="email" className="form-control" />
                            </div>
                            <div className="col-md-12 form-group">
                                <textarea row="10" id="contact-message" className="form-control" placeholder="how can we help you"></textarea>
                            </div>
                            <div className="col-md-12 form-group text-center">
                                <button>send massage</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Contact;
