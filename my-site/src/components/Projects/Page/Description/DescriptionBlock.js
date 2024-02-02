import React from "react";
import { useParams } from "react-router-dom";

const DescriptionBlock = (props) => {
    const title = (props.title);
    console.log('curr title:', title)

    const { project } = useParams();
    console.log(project);



    return(
        <div className="my-card">
            hi
        </div>
    )
}

export default DescriptionBlock;