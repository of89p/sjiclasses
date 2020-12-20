import React from 'react';

function Navbar(){
    return(
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo center">SJI classes</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="/">All classes</a></li>
                <li><a href="/add">Declare class</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;