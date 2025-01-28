import {React, useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';

import {ReactComponent as Docker} from '../../../../images/icons/Docker.svg';
import {ReactComponent as MySQL} from '../../../../images/icons/MySQL.svg';

const techIcons = {
    docker: Docker,
    mysql: MySQL
}


const SingleTechIcon = ({name}) =>{
    const Component = techIcons[name];

    return(
        <Component/>
    )
}


const IconDisplay = () =>{
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];

    const techList = ['docker', 'mysql']

    return(
        <div style={{ width: '100px', height: '100px' }}>
            <div>
                {techList.map((name) =>(
                    <SingleTechIcon key={name} name={name}/>
                ))}
            </div>
        </div>
    )
}

export default IconDisplay;