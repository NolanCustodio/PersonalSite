import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./SingleProjectPage.css"

const SingleProjectPage = () => {
    let { projectName } = useParams();
    // console.log(typeof(projectName));

    const project = useSelector((state) => {
        projectName = projectName.toLowerCase();

        let rtnVal = "none"

        if (projectName === "portfolio"){
            rtnVal = state.project.value.portfolio
        }else if (projectName === "newsbox"){
            rtnVal = state.project.value.newsbox
        }else if (projectName === "synchat"){
            rtnVal = state.project.value.synchat
        }

        if (rtnVal === "none"){
            window.location.href = "/"
        }

        return rtnVal
    });

    

    return (
        <div className="page">
            <div className="title">
                <Link to={project.projectGithub} target="_blank" rel="noopener noreferrer">
                    <div className="title-text-button">
                        <h1 className="display-1 title-text">
                            { project.projectName }
                        </h1>
                    </div>
                </Link>

                <p className="project-subtext">{ project.projectSubtext }</p>
            </div>
            
            <div className="description">
                { project.projectDescription }
            </div>

            <div className="technology">
                <h3 className="tools-title">Tools and Tech</h3>
                <ul>
                    { 
                        project.projectTechnology.map(
                                (singleTool, a) => {
                                   return <li className="singleTech" key={a}> {singleTool} </li>
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default SingleProjectPage;