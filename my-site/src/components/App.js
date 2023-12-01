//Node Modules
import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


//Components
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import SingleProjectPage from './Projects/Page/SingleProjectPage';

import ProjectsInfo from './Projects/ProjectText';
import { changeProject } from '../features/project';

function App() {
    const dispatch = useDispatch();
    dispatch(changeProject(ProjectsInfo));

    // useEffect (() => {
    //     dispatch(changeProject(ProjectsInfo));
    //     // console.log(ProjectsInfo);
    // }, []);

    return(
        <div>
            <NavBar></NavBar>
                    
            <div className="content container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}/>
                        <Route path="/:projectName" element={<SingleProjectPage/>}/>
                       
                    </Routes>
                </BrowserRouter>

                
            </div>
            
        </div>
    )
}


export default App;