import React from 'react';

import {ReactComponent as Docker} from '../../../../images/icons/Docker.svg';
import docker from '../../../../images/icons/Docker.svg';
import {ReactComponent as Mysql} from '../../../../images/icons/MySQL.svg';
// import mysql from '../../../../images/icons/MySQL.svg';

// const IconTest = () =>{
//     return(
//         <img src={docker} alt="icon test"/>
//     )
// }
function IconTest() {
    return(
        <div>
            <Docker/>
        </div>
    )
}

const IconDisplay = () =>{
    return(
        <div style={{ width: '100px', height: '100px' }}>
            <IconTest/>
        </div>
    )
}

export default IconDisplay;