//Node Modules
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useDispatch } from "react-redux";


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import SingleProjectPage from './Projects/Page/SingleProjectPage';
import ScrollToTop from './Navigation/ScrollToTop';

import Overlay from './ProjectOverlay/Overlay';

import ProjectsInfo from './Projects/ProjectText';
import { changeProject } from '../features/project';

function App() {
    const dispatch = useDispatch();
    dispatch(changeProject(ProjectsInfo));

    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="content">
                <BrowserRouter>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                        
                        <Route path="/:projectName" element={<SingleProjectPage/>}/>
                        <Route path="/Overlay/:projectName" element={<SingleProjectPage/>}/>
                       
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;