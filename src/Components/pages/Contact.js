import React from 'react';

function Contact() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-4 my-auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 py-3">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea row="3" className="form-control" placeholder="Enter your message..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        Randburg, North Cliff, Johannesburg, South Africa
                                    </p>
                                    <p>
                                        Phone No: +27 87 987 0987
                                    </p>
                                    <p>
                                        Email: info@thebullsauce.co.za
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>

        </div>            
    );
}

export default Contact;