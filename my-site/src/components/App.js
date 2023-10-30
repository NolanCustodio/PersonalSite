//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import Resume from './Resume/resume';


function App() {
    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="main container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;