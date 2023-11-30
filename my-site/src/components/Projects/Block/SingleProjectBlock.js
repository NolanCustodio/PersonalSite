import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './SingleProjectBlock.css';

//Reducers
import { changeProject } from "../../../features/project";

const SingleProjectBlock = (props) => {
    let project = props.project;
    // console.log(props.project);
    const dispatch = useDispatch();

    // const [currentProject, setCurrnetProject] = useState(useSelector((state) => state.project));
    const [currentProject, setCurrentProject] = useState();

    function changeCurrnetProject(projectName, projectSubtext, projectDescription, projectTechnology) {
        let currentProjectInfo = {
           projectName,
           projectSubtext,
           projectDescription,
           projectTechnology
        }

        setCurrentProject(currentProjectInfo);
        dispatch(changeProject(currentProjectInfo));
   }

    return(
        <div className="card">
            <Link 
                className="singleProjectBlock"
                onClick={() => {
                    changeCurrnetProject(
                        project.projectName,
                        project.projectSubtext,
                        project.projectDescription,
                        project.projectTechnology
                    )

                    // window.location.href = `/project/${project.projectName}`
                }}
                to={`/project/${project.projectName}`}
            >
                <div className="row no-gutters">
                    <div className="col-md-4 card-body">
                        <h1>
                            {project.projectName}
                        </h1>
                    </div>
                    <p className="col-md">
                        {project.projectBlurb}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default SingleProjectBlock;