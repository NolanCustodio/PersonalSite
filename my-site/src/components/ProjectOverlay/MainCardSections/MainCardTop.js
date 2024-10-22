import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import SingleResource from '../../Resources/SingleResource';
import resumePath from '../../Resume/NolanLeyCustodioResume.pdf';
import SingleProjectBlock from '../../Projects/Block/SingleProjectBlock';

import { changeCount } from "../../../features/projectCounter";

const MainCardTop = () =>{

    const [projectIndex, setProjectIndex] = useState(0);

    const projects = useSelector((state) => state.project.value);

    const projectCount = useSelector((state) => state.projectCounter.value);
    console.log(projectCount);

    const dispatch = useDispatch();
    dispatch(changeCount(1));

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
    )
}

export default MainCardTop;