import React from "react";
import { Link } from "react-router-dom";

import './singleProjectBlock.css';

//Reducers

const SingleProjectBlock = (props) => {

    return(
        <div className="card">
            <Link to={`project/${props.projectName}`} className="singleProjectBlock">
                <div className="row no-gutters">
                    <div className="col-md-4 card-body">
                        <h1>
                            {props.projectName}
                        </h1>
                    </div>
                    <p className="col-md">
                        {props.projectBlurb}
                    </p>
                </div>
                </Link>
        </div>
    )
}

export default SingleProjectBlock;