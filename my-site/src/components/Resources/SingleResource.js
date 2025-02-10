import React from "react";

const SingleResource = (props) => {
    const resourceLink = props.link;
    const resrouceName = props.name
    return(
        <div className="card my-card-landing">
            <h1 className="link-title">{resrouceName}</h1>
            
                <a href={resourceLink} target="_blank" className="card-text stretched-link resource-link" rel="noopener noreferrer">
                </a>

        </div>
    )
}



export default SingleResource;