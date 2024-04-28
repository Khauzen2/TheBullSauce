import React from 'react';
import Slider from "../inc/Slider";

function Home() {
    return (
        <div>
            <Slider />    
            <section className="section">
                <div className="container">
                    <div classsName="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-header">Our Company</h1>
                            <div className="underline mx-auto"></div>

                        </div>
                    </div>
                </div>
                
            </section>
        </div>               
    );
}

export default Home;