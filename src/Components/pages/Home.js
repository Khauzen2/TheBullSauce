import React from 'react';
import Slider from "../inc/Slider";
import {Link} from "react-router-dom";
import Vmc from './secInc/Vmc';
import RootsButchery from '../images/RootsButchery.jpg';
import Watloo from '../images/Watloo.jpeg';
import Nizams from '../images/Nizams.png';

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
                                Our company is The Bull Sauce and it is based in the NorthCliff in Johnessburg. hvsds jfdsfds jfdsjkfhdsfh vkvkvjvkfjvkjg kdjglkgjslkgjslkgj kjlkjdfglkjdfglkjd xclkvjcxlkvjxlkvj lkjlkj
                                Our company is The Bull Sauce and it is based in the NorthCliff in Johnessburg. hvsds jfdsfds jfdsjkfhdsfh vkvkvjvkfjvkjg kdjglkgjslkgjslkgj kjlkjdfglkjdfglkjd xclkvjcxlkvjxlkvj lkjlkj
                                Our company is The Bull Sauce and it is based in the NorthCliff in Johnessburg. hvsds jfdsfds jfdsjkfhdsfh vkvkvjvkfjvkjg kdjglkgjslkgjslkgj kjlkjdfglkjdfglkjd xclkvjcxlkvjxlkvj lkjlkj
                                Dhvsds jfdsfds jfdsjkfhdsfh vkvkvjvkfjvkjg kdjglkgjslkgjslkgj kjlkjdfglkjdfglkjd xclkvjcxlkvjxlkvj lkjlkj
                                
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
                            <h1 className="main-heading">Places you can find our sauce</h1>
                            <div className="underline mx-auto"></div>
                                <div class="container-fluid-stores">
                                    <div className="services-cards">
                                        <div className="col-md-4 products">
                                            <div className="shadow card">
                                                <img src={RootsButchery} className="w-100 border-bottom" alt="services" />
                                                <div className="card-body">
                                                    <h6>Roots Butchery Eyethu Mall</h6>
                                                    <div className="underline"></div>
                                                    <p>
                                                        Roots Butchery is located at Eyethu Mall in Orange Farm. Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                                    </p>
                                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                                </div>
                                            </div>    
                                        </div>

                                        <div className="col-md-4 products">
                                            <div className="shadow card">
                                                <img src={Watloo} className="w-100 border-bottom" alt="services" />
                                                <div className="card-body">
                                                    <h6>Watloo Palm Springs</h6>
                                                    <div className="underline"></div>
                                                    <p>
                                                        Watloo is located in Palm Springs Shopping Center. Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                                    </p>
                                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                                </div>
                                            </div>    
                                        </div>    

                                        <div className="col-md-4 products">
                                            <div className="shadow card">
                                                <img src={Nizams} className="w-100 border-bottom" alt="services" />
                                                <div className="card-body">
                                                    <h6>Nizams Store Eyethu Mall</h6>
                                                    <div className="underline"></div>
                                                    <p>
                                                        Nizams Store is located at Eyethu Mall in Orange Farm. Our vision is to see clients happy and satisfied all the way having fun while cooking, marinating your food with very delicious tasty sauce filled with special engridients and all. htehevs jksdbda iueurfhh klfjdfd klsfdj 
                                                    </p>
                                                    <Link to="/services" className="btn btn-link">Read more</Link>
                                                </div>
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