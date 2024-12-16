import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeState } from "../../../features/projectCarousel";

import './SingleProjectBlock.css';


const SingleProjectBlock = (props) => {
    const dispatch = useDispatch();
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index]

    const project = props.project;

    
    return(
        <div className="card my-card">
            <a
                className="singleProjectBlock stretched-link"

                // to={`${project.projectName}`}
                onClick={() => {
                    // console.log(projectCarousel.items[projectCarousel.index]);
                    // dispatch(changeState(1));

                    //Link to Github or site;
                }}
            >
                <div className="row no-gutters">
                    <h1 className="card-title">
                        {/* {project.projectName} */}
                        {currentProject.projectName}
                    </h1>
                    <div className="col-md project-blurb">
                        {currentProject.projectBlurb}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SingleProjectBlock;