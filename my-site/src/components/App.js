//Node Modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import ScrollToTop from './Navigation/ScrollToTop';

function App() {

    return (
        <div className="content">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;