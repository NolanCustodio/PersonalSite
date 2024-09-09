import React from "react";

const SingleResource = (props) => {
    const resourceLink = props.link;
    const resrouceName = props.name
    return(
        <div className="card my-card-landing">
            <h1 className="col-sm link-title">{resrouceName}</h1>
            <div className="card-body">
                <a href={resourceLink} target="_blank" className="card-text stretched-link resource-link" rel="noopener noreferrer">
                    Link to my {resrouceName}.
                </a>
            </div>
        </div>
    )
}



export default SingleResource;