//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import SingleProjectPage from './Projects/Page/SingleProjectPage';


function App() {
    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="content container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                        <Route path="/project/:projectName" element={<SingleProjectPage/>}/>
                       
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;