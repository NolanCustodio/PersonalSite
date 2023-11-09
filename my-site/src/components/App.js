//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';

function App() {
    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="content container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;