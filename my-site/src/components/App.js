//Node Modules
import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


//Components
import './App.css';
// import LandingPage from './LandingPage/LandingPage';
// import NavBar from './NavBar/NavBar';
// import ScrollToTop from './Navigation/ScrollToTop';
import Landing from './Landing/Landing';

import { useWindowDimensions } from './Navigation';
import { changeState } from '../features/windowInfo';

function App() {
    const x = useSelector((state) => state.windowInfo);
    const dispatch = useDispatch();
    

    const windowInfo = useWindowDimensions();

    console.log(windowInfo);

    useEffect(() => {
        // dispatch(changeState(windowInfo));
    });


    return (
        <div className='entire-page'>
            <Landing/>
        </div>
    )
}


export default App;