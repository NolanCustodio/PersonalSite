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
                className="singleProjectBlock"

                to={`${project.projectName}`}
            >
                <div className="row no-gutters">
                    <h1>
                        {project.projectName}
                    </h1>
                    <p className="col-md text">
                        {project.projectBlurb}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default SingleProjectBlock;