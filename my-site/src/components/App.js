//Node Modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useDispatch } from "react-redux";


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import ScrollToTop from './Navigation/ScrollToTop';
import Landing from './LandingNew/Landing';

function App() {

    return (
        <div>
            <NavBar/>
            <div className="content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/old" exact element={<LandingPage />} />
                        <Route path="/" exact element={<Landing/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}


export default App;