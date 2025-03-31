//Node Modules
import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useDispatch } from "react-redux";


//Components
import './App.css';
// import LandingPage from './LandingPage/LandingPage';
// import NavBar from './NavBar/NavBar';
// import ScrollToTop from './Navigation/ScrollToTop';
import Landing from './Landing/Landing';

function App() {

    return (
        <div className='entire-page'>
            <div className="content">
                <Landing/>
            </div>
        </div>
    )
}


export default App;