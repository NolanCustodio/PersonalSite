import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './SingleProjectBlock.css';

const SingleProjectBlock = (props) => {
    const project = props.project

    function setSingleProjectOverlay(project){
        
    }
    
    return(
        <div className="card my-card">
            <Link
                className="singleProjectBlock stretched-link"

                to={`${project.projectName}`}
            >
                <div className="row no-gutters card-info">
                    <h1 className="card-title">
                        {project.projectName}
                    </h1>
                    <div className="col-md project-blurb">
                        {project.projectBlurb}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleProjectBlock;