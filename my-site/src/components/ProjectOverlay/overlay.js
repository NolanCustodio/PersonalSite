import { useSelector } from 'react-redux';
import { useState } from 'react';

import SingleResource from '../Resources/SingleResource';
import resumePath from '../Resume/NolanLeyCustodioResume.pdf';
import SingleProjectBlock from '../Projects/Block/SingleProjectBlock';

import './Overlay.css';

export default function Overlay(){
    const [projectIndex, setProjectIndex] = useState(0);

    const projects = useSelector((state) => state.project.value);
    // console.log(Object.keys(projects).filter(key => 
    //     key.includes(project)));


    const currentProject = (projectIndex) => {
        switch(projectIndex){
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
        if (projectIndex >= 2){
            setProjectIndex(projectIndex => 0);
            return;
        }
        setProjectIndex(projectIndex => projectIndex + 1);
    }

    const decrementState = () => {
        if (projectIndex <= 0){
            setProjectIndex(projectIndex => 2);
            return;
        }
        setProjectIndex(projectIndex => projectIndex - 1);
    }

    return(
        <div>
            <h1>Nolan Ley Custodio</h1>
            <div className='main-card'>
                <div className='card-top'>
                    <div className='landing-left'>
                        <div className='landing-external-links'>
                            <SingleResource link="https://github.com/NolanCustodio" name="Github"/>
                            <SingleResource link={resumePath} name="Resume"/>
                        </div>
                    </div>
                    <div className='landing-right'>
                        <div className='scrolling-project-container'>
                            <div className='project-nav-buttons'>
                                <button className='btn btn-primary' onClick={() =>{
                                    decrementState();
                                }}
                                >{`<`}</button>
                            </div>
                            <div>
                                <h2>Projects</h2>
                                {currentProject(projectIndex)}
                            </div>
                            <div className='project-nav-buttons'>
                                <button className='btn btn-primary' onClick={() => {
                                    incrementState();
                                }}>{`>`}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-bottom'>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
        </div>
    )
}



