import React, { Component } from 'react';

export class NewComp extends Component {
    render() {
        return (
            <div className="navBarMenu">
                <div>
                    <h1>The Bull Sauce</h1>
                </div>
                <div>
                    <ul className="navBar">
                        <li className="navList">Home</li>
                        <li className="navList">Shop</li>
                        <li className="navList">About</li>
                        <li className="navList">Contact</li>
                    </ul>
                </div>  
            </div>
        );
    }
}

export default NewComp;