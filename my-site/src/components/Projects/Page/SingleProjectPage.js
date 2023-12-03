import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./SingleProjectPage.css"

const SingleProjectPage = () => {
    let { projectName } = useParams();
    // console.log(typeof(projectName));
    console.log(projectName);

    const project = useSelector((state) => {
        projectName = projectName.toLowerCase();

        let rtnVal

        if (projectName == "portfolio"){
            rtnVal = state.project.value.portfolio
        }else if (projectName == "newsbox"){
            rtnVal = state.project.value.newsbox
        }else if (projectName == "synchat"){
            rtnVal = state.project.value.synchat
        }
        return rtnVal
    });
    
    console.log(project)



    return (
        <div>
            <div className="title">
                <h1 className="display-1 title-text">
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