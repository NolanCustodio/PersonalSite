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
                    <li className="nav-item active">
                        <a className="nav-link" href="/site">site</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/singleProject">singleProjectTest</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default NavBar;