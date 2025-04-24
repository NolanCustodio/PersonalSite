import { scrollIntoView } from "../../../Navigation";

import "./project-card.css"
import "../../Card/card.css"

const ProjectCard = (props) =>{

    return(
        <button className="card project-card"
            onClick={() =>{
                scrollIntoView(props.projectName);
            }}
        >
            {props.projectName}
        </button>
    )
}

export default ProjectCard;