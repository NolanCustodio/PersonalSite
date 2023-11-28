//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import PersonalSite from './PersonalSite/PersonalSite';
import SingleProject from './Projects/SingleProject';
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
                        <Route path="/singleProject" element={<SingleProject/>}/>
                        <Route path="/NewsBox" element={<NewsBox/>}/>
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;