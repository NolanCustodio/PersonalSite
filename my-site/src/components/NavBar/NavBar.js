import React from 'react';

import './NavBar.css';



const NavBar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
            <ul className="nav">
                <li className="nav-item active">
                    <a className="nav-link nav-item-link" href="/">Home</a>
                </li>
                
                <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle nav-item-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Projects
                    </a>
                    <div className='dropdown-menu' aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/old">Old</a>
                    </div>
                    
                </li>

                <li className="form-inline my-email">
                    custodionolan@gmail.com
                </li>
            </ul>
        </nav>
    )
    
}

export default NavBar;