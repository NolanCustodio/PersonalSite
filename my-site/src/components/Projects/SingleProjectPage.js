import React from "react";
import { useSelector } from "react-redux";

const SingleProjectPage = () => {
    const project = useSelector((state) => state.project.value);
    console.log(project);

    return (
        <div>
            <h1>{ project.projectName }</h1>

            {/* <p>{ project.projectSubtext }</p> */}
            
            <div>
                { project.projectDescription }
            </div>

            {/* make this a .map() */}
            <div>
                { project.projectTechnology }
            </div>
        </div>
    )
}

export default SingleProjectPage;