import React from "react";
import { useSelector } from "react-redux";

import "./SingleProjectPage.css"

const SingleProjectPage = () => {
    const project = useSelector((state) => state.project.value);
    console.log(project.projectTechnology)

    return (
        <div>
            <div className="title">
                <h1 className="display-1">
                    { project.projectName }
                </h1>

                <p>{ project.projectSubtext }</p>
            </div>
            
            <div className="description">
                { project.projectDescription }
            </div>

            <div className="technology">
                <ul>
                    { 
                        project.projectTechnology.map(singleTool => <li className="singleTech"> {singleTool} </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SingleProjectPage;