import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import SingleResource from '../../Resources/SingleResource';
import resumePath from '../../Resume/NolanLeyCustodioResume.pdf';
import SingleProjectBlock from '../../Projects/Block/SingleProjectBlock';

import { changeCount } from "../../../features/projectCounter";

import "./MainCard.css"

const MainCardTop = () =>{
    const projects = useSelector((state) => state.project.value);
    const projectCount = useSelector((state) => state.projectCounter.value);
    const dispatch = useDispatch();

    const currentProject = (projectCount) => {
        switch(projectCount){
            case 0:
                return <SingleProjectBlock project={projects.portfolio}/>;
            case 1:
                return <SingleProjectBlock project={projects.newsbox}/>;
            case 2:
                return <SingleProjectBlock project={projects.synchat}/>;
            default:
                return null;
        }   
    }

    const incrementState = () => {
        if (projectCount >= 2){
            dispatch(changeCount(0));
            return;
        }
        dispatch(changeCount(projectCount + 1));
    }

    const decrementState = () => {
        if (projectCount <= 0){
            dispatch(changeCount(2));
            return;
        }
        dispatch(changeCount(projectCount - 1));
    }

    return(
        <div className='card-top'>
            <div className='landing-left'>
                <div className='landing-external-links'>
                    <SingleResource link="https://github.com/NolanCustodio" name="Github"/>
                    <SingleResource link={resumePath} name="Resume"/>
                </div>
            </div>
            <div className='landing-right'>
                <h2>Projects</h2>

                    <div className='scrolling-project-container'>
                        <div className='project-nav-buttons nav-left'>
                            <button className='btn btn-primary' onClick={() =>{
                                decrementState();
                            }}
                            >{`<`}</button>
                        </div>
                        <div className="card-container">
                            {currentProject(projectCount)}
                        </div>
                        <div className='project-nav-buttons nav-right'>
                            <button className='btn btn-primary' onClick={() => {
                                incrementState();
                            }}>{`>`}</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default MainCardTop;