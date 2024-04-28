import React from 'react';
import {Link} from 'react-router-dom'; 

function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">The Bull Sauce</Link>                                                 
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to ="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contacts</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    </div>
    );
}

export default Navbar;