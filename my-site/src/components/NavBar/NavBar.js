import React from 'react';

// import { connect } from 'react-redux';


const NavBar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                   
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <div className='dropdown-menu' aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Portfolio">Portfolio</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/NewsBox">NewsBox</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/Synchat">Synchat</a>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default NavBar;