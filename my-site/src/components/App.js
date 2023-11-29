//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import PersonalSite from './PersonalSite/PersonalSite';
import SingleProjectPage from './Projects/SingleProjectPage';
import NewsBox from './NewsBox/NewsBox';

function App() {
    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="content container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                        <Route path="/site" element={<PersonalSite/>}/>
                        <Route path="/project/:projectName" element={<SingleProjectPage/>}/>
                        <Route path="/NewsBox" element={<NewsBox/>}/>
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;