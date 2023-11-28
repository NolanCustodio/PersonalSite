import React from "react";

const SingleProject = (props) => {
    return (
        <div>
            <h1>{ props.projectName }</h1>
            
            <div>
                { props.projectDescription }
            </div>

            <div>
                { props.projectTechnology }
            </div>
        </div>
    )
}

export default SingleProject;