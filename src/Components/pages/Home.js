import React from 'react';
import Slider from "../inc/Slider";
import {Link} from "react-router-dom";
import Vmc from './secInc/Vmc';
import GhostPepper from '../images/GhostPepper.jpg';
import Jalapeno from '../images/Jalapeno.jpg';
import SmokedPeriPeri from '../images/SmokedPeriPeri.jpg';

function Home() {
    return (
        <div>
            <Slider />    
            <section className="section py-5">
                <div className="container">
                    <div classsName="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-heading">Our Company</h1>
                            <div className="underline mx-auto"></div>
                            <p>
                                Our company is The Bull Sauce and it is based in the NorthCliff in Johnessburg. hvsds jfdsfds jfdsjkfhdsfh vkvkvjvkfjvkjg kdjglkgjslkgjslkgj kjlkjdfglkjdfglkjd xclkvjcxlkvjxlkvj lkjlkj
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read more</Link>
                        </div>
                    </div>
                </div>   
            </section>

            {/*our vision, mission and values*/}

            <Vmc />

            {/*Our service*/}

            <section className="section border-top">
                <div className="container">
                    <div classsName="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h1 className="main-heading">Our Services</h1>
                            <div className="underline mx-auto"></div>
                            <div className="services-cards">
                                <div className="col-md-4 products">
                                    <div className="shadow card">
                                        <img src={GhostPepper} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6>The Ghost Pepper Sauce Flavour</h6>
                                            <div className="underline"></div>
                                            <p>
                                                Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                            </p>
                                            <Link to="/services" className="btn btn-link">Read more</Link>
                                        </div>
                                    </div>    
                                </div>

                                <div className="col-md-4 products">
                                    <div className="shadow card">
                                        <img src={Jalapeno} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6>The Jalapeno Sauce Flavour</h6>
                                            <div className="underline"></div>
                                            <p>
                                                Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                            </p>
                                            <Link to="/services" className="btn btn-link">Read more</Link>
                                        </div>
                                    </div>    
                                </div>    

                                <div className="col-md-4 products">
                                    <div className="shadow card">
                                        <img src={SmokedPeriPeri} className="w-100 border-bottom" alt="services" />
                                        <div className="card-body">
                                            <h6>The Smoked Peri-Peri Sauce Flavour</h6>
                                            <div className="underline"></div>
                                            <p>
                                                Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                            </p>
                                            <Link to="/services" className="btn btn-link">Read more</Link>
                                        </div>
                                    </div>    
                                </div>        
                            </div>    
                        </div>
                    </div>
                </div>   
            </section>


        </div>               
    );
}

export default Home;