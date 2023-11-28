import React from "react";
import { Link } from "react-router-dom";

const SingleProjectBlock = (props) => {

    return(
        <div className="card">
            <Link to={`project/${props.projectName}`}>
                <div className="row no-gutters">
                    {/* This website name/image and small description */}
                    <h1 className="col-md-3 card-body">
                        {props.projectName}
                    </h1>
                    <p className="col-md">
                        {props.projectBlurb}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default SingleProjectBlock;