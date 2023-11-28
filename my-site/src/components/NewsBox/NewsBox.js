import React from "react";

import SingleProject from "../Projects/SingleProject";
import raw from './NewsBoxInfo.js';

const NewsBox = () => {

    // console.log(raw);

    let text = raw.sections.top
    console.log(typeof(text));
    console.log(text);

    return(
        <div>
            <SingleProject/>

            <br></br>

            <a>{raw.sections.middle}</a>
        </div>
    )
}

export default NewsBox;