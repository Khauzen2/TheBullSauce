import React from 'react';
import {Link} from 'react-router-dom'; 
import BullSauceWhileLogo from '../images/BullSauceWhileLogo.jpg';

function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid py-3">
                    <Link to="/" class="navbar-brand"><img src={BullSauceWhileLogo} className="logo-image" alt="logo"/></Link>                                                 
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item color-white">
                            <Link to ="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to ="/shop" class="nav-link">Shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contacts</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                            
                        </li>
                        <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                   
                </div>    
            </div>
        </nav>
    </div>
    );
}

export default Navbar;