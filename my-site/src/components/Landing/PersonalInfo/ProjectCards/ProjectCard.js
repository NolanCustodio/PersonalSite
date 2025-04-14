import { scrollIntoView } from "../../../Navigation";

import "./project-card.css"

const ProjectCard = (props) =>{

    return(
        <button className="project-card"
            onClick={() =>{
                scrollIntoView(props.projectName);
            }}
        >
            {props.projectName}
        </button>
    )
}

export default ProjectCard;