import React from 'react';
import NewGhostPepper from '../images/NewGhostPepper.jpg';
import NewJalapeno from '../images/NewJalapeno.jpg';
import NewSmokedPeriPeri from '../images/NewSmokedPeriPeri.jpg';
import NewSweetChilli from '../images/NewSweetChilli.jpg';


 

function Shop() {
    return (
        <div className="container">
            <div className="cart mt-4">
                <div className="card-body">
                    <h2>Welcome to Our Shop</h2>
                </div>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <a href=" "><img src={NewGhostPepper} class="card-img-top" alt="Sauce-Pack"/></a>
                    <div class="card-body">
                        <h5 class="card-title">Ghost Pepper Sauce</h5>
                        <p class="card-text">Price : Rxxx.xx</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={NewJalapeno} class="card-img-top" alt="Ghost-Pepper"/>
                    <div class="card-body">
                        <h5 class="card-title">Jalapeno Sauce</h5>
                        <p class="card-text">Price : Rxx.xx</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={NewSmokedPeriPeri} class="card-img-top" alt="Jalapeno"/>
                    <div class="card-body">
                        <h5 class="card-title">Smoked Peri Peri Sauce</h5>
                        <p class="card-text">Price : Rxx.xx</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={NewSweetChilli} class="card-img-top" alt="Smoked-Peri-Peri"/>
                    <div class="card-body">
                        <h5 class="card-title">Sweet Chilli Sauce</h5>
                        <p class="card-text">Price : Rxx.xx</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>            
    );
}

export default Shop;