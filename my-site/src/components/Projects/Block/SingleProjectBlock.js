import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './SingleProjectBlock.css';

//Reducers
import { changeProject } from "../../../features/project";

const SingleProjectBlock = (props) => {
    const project = props.project
    console.log(project);

    // useEffect(() => {
    //     const project = props.project;
    //     console.log(project);
    // }, []);
    // const dispatch = useDispatch();

    // const [currentProject, setCurrnetProject] = useState(useSelector((state) => state.project));
    // const [currentProject, setCurrentProject] = useState();

    function changeCurrnetProject(projectName, projectSubtext, projectDescription, projectTechnology) {
        let currentProjectInfo = {
           projectName,
           projectSubtext,
           projectDescription,
           projectTechnology
        }

        // setCurrentProject(currentProjectInfo);
        // dispatch(changeProject(currentProjectInfo));
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