import React from 'react';
import Vmc from './secInc/Vmc';

function About() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-4 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Our company then some dummy text afterwards hsdsdgjhsg jkdhsdhsa kjsdhsdsha kjsdsjkdh kjsdhskjdhsa kjhdkjsdhajkh sjdhsakjdhksjadh jshdkjsdh jshdkhaj
                    </p>
                </div>
            </section>
            <Vmc />


        </div>            
    );
}

export default About;