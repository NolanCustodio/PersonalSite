import React from 'react';
import { useSelector } from 'react-redux';

import {ReactComponent as Docker} from '../../../../images/icons/Docker.svg';
import {ReactComponent as Mysql} from '../../../../images/icons/MySQL.svg';

function IconTest() {
    return(
        <div>
            <Docker/>
        </div>
    )
}

const IconDisplay = () =>{
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];

    

    return(
        <div style={{ width: '100px', height: '100px' }}>
            <IconTest/>
        </div>
    )
}

export default IconDisplay;