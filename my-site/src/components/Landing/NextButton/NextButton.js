import React from "react";

import { scrollIntoView } from "../../Navigation";

import { ReactComponent as ArrowDown } from '../../../images/navigation/ArrowDown.svg';

const partitions = [
    'PersonalInfo',
    'Portfolio',
    'Synchat',
    'NewsBox'
]



const NextButton = (props) => {
    let rtnComponent;

    if (props.projectIndex + 1 > partitions.length){
        rtnComponent = <div></div>
    }else{
        // rtnComponent = ArrowDown;
        const nextProject = partitions[props.projectIndex + 2]

        rtnComponent = <ArrowDown
            className="next-button"
            onClick={() => {
                scrollIntoView(nextProject);
            }}
        />    
    }

    

    return (rtnComponent)
}

export default NextButton;