import React from "react";

import { useSelector} from "react-redux";

import './SingleProjectCard.css';


const SingleProjectCard = (props) => {
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index]
    return(
        <div className="card my-card">
            <a
                className="singleProjectBlock stretched-link"
            >
                <div className="carrousel-text">
                    <h1 className="card-title">
                        {currentProject.projectName}
                    </h1>
                    <div className="col-md project-blurb">
                        {currentProject.projectBlurb}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SingleProjectCard;