import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeState } from "../../../features/projectCarousel";

import './SingleProjectBlock.css';


const SingleProjectBlock = (props) => {
    const dispatch = useDispatch();
    const projectCarousel = useSelector((state) => state.projectCarousel);


    const project = props.project;

    
    return(
        <div className="card my-card">
            <a
                className="singleProjectBlock stretched-link"

                // to={`${project.projectName}`}
                onClick={() => {
                    console.log(projectCarousel.items[projectCarousel.index]);
                    dispatch(changeState(4));
                }}
            >
                <div className="row no-gutters">
                    <h1 className="card-title">
                        {/* {project.projectName} */}
                        {projectCarousel.items[projectCarousel.index].projectName}
                    </h1>
                    <div className="col-md project-blurb">
                        {project.projectBlurb}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SingleProjectBlock;