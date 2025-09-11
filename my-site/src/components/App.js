//Node Modules
import React, { useState, useEffect, useRef } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


//Components
import './App.css';
// import LandingPage from './LandingPage/LandingPage';
// import NavBar from './NavBar/NavBar';

import Landing from './Landing/Landing';
import NavBar from './NavBar/NavBar';
import FloatingButtons from './FloatingButtons/FloatingButtons';
// import IntersectionObserver from './IntersectionObserver/IntersectionObserver';


import { useWindowDimensions } from './Navigation';

function App() {
    useWindowDimensions();
    // IntersectionObserver();

    return (
        <div>
            {/* <NavBar/> */}
            <FloatingButtons/>
            <div className='entire-page'>
                {/* <ResumeButton/>/ */}
                <Landing />
            </div>
        </div>
    )
}


export default App;