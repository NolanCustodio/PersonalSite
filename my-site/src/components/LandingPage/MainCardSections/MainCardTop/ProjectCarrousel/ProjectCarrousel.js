import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SingleProjectCard from "../ProjectCard/SingleProjectCard";

import { changeState } from "../../../../../features/projectCarousel";

const MobileProjectCarrousel = ({ decrementState, incrementState }) => {
    return (
        <div className="mobile-container">
            <div className='scrolling-project-container'>
                <SingleProjectCard />
            </div>
            <div className="mobile-buttons">
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
        </div>
    )
}

const DesktopProjectCarrousel = ({ decrementState, incrementState }) => {
    return (
        <div className='scrolling-project-container'>
            <div className='project-nav-buttons nav-left'>
                <button className='btn btn-primary' onClick={() => {
                    decrementState();
                }}
                >{`<`}</button>
            </div>
            
                <SingleProjectCard />
 
            <div className='project-nav-buttons nav-right'>
                <button className='btn btn-primary' onClick={() => {
                    incrementState();
                }}>{`>`}</button>
            </div>
        </div>
    )
}

const ProjectCarrousel = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const projectIndex = useSelector((state) => state.projectCarousel.index);
    const dispatch = useDispatch();

    const decrementState = () => {
        if (projectIndex <= 0) {
            dispatch(changeState(2));
            return;
        }
        dispatch(changeState(projectIndex - 1));
    }

    const incrementState = () => {
        if (projectIndex >= 2) {
            dispatch(changeState(0));
            return;
        }
        dispatch(changeState(projectIndex + 1));
    }

    //this only changes on load, need to add function to implement dynamic changing
    if (screenWidth <= 1100) {
        return (
            <div className='landing-right'>
                <MobileProjectCarrousel
                    decrementState={decrementState}
                    incrementState={incrementState}
                />
            </div>
        )
    } else {
        return (
            <div className='landing-right'>
                <DesktopProjectCarrousel
                    decrementState={decrementState}
                    incrementState={incrementState}
                />
            </div>
        )
    }
}


export default ProjectCarrousel;