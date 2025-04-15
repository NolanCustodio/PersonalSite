//Node Modules
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


//Components
import './App.css';
// import LandingPage from './LandingPage/LandingPage';
// import NavBar from './NavBar/NavBar';

import Landing from './Landing/Landing';
import IntersectionObserver from './IntersectionObserver/IntersectionObserver';


import { useWindowDimensions } from './Navigation';




function App() {
    useWindowDimensions();
    // IntersectionObserver();

    return (
        <div className='entire-page'>
            <Landing/>
        </div>
    )
}


export default App;