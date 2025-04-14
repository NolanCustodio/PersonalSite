

import "./project-card.css"

const ProjectCard = (props) =>{

    return(
        <div className="project-card">
            {props.projectName}
        </div>
    )
}

export default ProjectCard;