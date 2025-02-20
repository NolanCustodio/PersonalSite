import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SingleProjectCard from "../ProjectCard/SingleProjectCard";

import { changeState } from "../../../../../features/projectCarousel";

const MobileProjectCarrousel = ({ decrementState, incrementState, currentProject, projectCount }) => {
    return (
        <div className='scrolling-project-container'>
            <div className="card-container">
                {currentProject(projectCount)}
            </div>
            <div className='project-nav-buttons nav-left'>
                <button className='btn btn-primary' onClick={() => {
                    decrementState();
                }}
                >{`<`}</button>
            </div>
            <div className='project-nav-buttons nav-right'>
                <button className='btn btn-primary' onClick={() => {
                    incrementState();
                }}>{`>`}</button>
            </div>
        </div>
    )
}

const DesktopProjectCarrousel = ({ decrementState, incrementState, currentProject, projectCount }) => {
    return (
        <div className='scrolling-project-container'>
            <div className='project-nav-buttons nav-left'>
                <button className='btn btn-primary' onClick={() => {
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
    )
}

const ProjectCarrousel = () => {
    const projects = useSelector((state) => state.project.value);
    const projectCount = 0;
    const projectCount0 = useSelector((state) => state.projectCarousel.index);

    const dispatch = useDispatch();

    const currentProject = (projectCount) => {
        switch (projectCount) {
            case 0:
                return <SingleProjectCard project={projects.portfolio} />;
            case 1:
                return <SingleProjectCard project={projects.newsbox} />;
            case 2:
                return <SingleProjectCard project={projects.synchat} />;
            default:
                return null;
        }
    }

    const decrementState = () => {
        if (projectCount0 <= 0) {
            dispatch(changeState(2));
            return;
        }
        dispatch(changeState(projectCount0 - 1));
    }


    const incrementState = () => {
        if (projectCount0 >= 2) {
            dispatch(changeState(0));
            return;
        }
        dispatch(changeState(projectCount0 + 1));
    }

    if (window.innerWidth <= 800) {
        return (
            <div className='landing-right'>
                <MobileProjectCarrousel
                    decrementState={decrementState}
                    incrementState={incrementState}
                    currentProject={currentProject}
                    projectCount={projectCount}
                />
            </div>
        )
    } else {
        return (
            <div className='landing-right'>
                <DesktopProjectCarrousel
                    decrementState={decrementState}
                    incrementState={incrementState}
                    currentProject={currentProject}
                    projectCount={projectCount}
                />
            </div>
        )
    }
}


export default ProjectCarrousel;