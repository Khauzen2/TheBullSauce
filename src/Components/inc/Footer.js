import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <section clasName="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p>
                            sdhjsdj jsdskd dhlkkhdfj khkjhkjdh jkhsjhdkjdhjhd jkhdkjdhkjdh kjhdkjsdhkdhk jdkjsdhjkd jkvcvnjc uydyduai idshsdh uywueywuiey hkdahdk jkkajs jsdjksdh
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/shop">Shop</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="mb-1">North Cliff, RandBurg, Johannesburg</p></div>
                        <div><p className="mb-1">+27 987 7363</p></div>
                        <div><p className="mb-1">+27 987 6353</p></div>
                        <div><p className="mb-1">info@thebullsauce.co.za</p></div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;