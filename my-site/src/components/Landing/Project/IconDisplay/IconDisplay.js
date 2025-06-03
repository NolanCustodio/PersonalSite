import { React } from 'react';

import './icon-display.css'

import { ReactComponent as Apache } from '../../../../images/tech-icons/Apache.svg'
import { ReactComponent as Bootstrap } from '../../../../images/tech-icons/Bootstrap.svg'
import { ReactComponent as Docker } from '../../../../images/tech-icons/Docker.svg';
import { ReactComponent as Linux } from '../../../../images/tech-icons/Linux.svg'
import { ReactComponent as MySQL } from '../../../../images/tech-icons/MySQL.svg';
import { ReactComponent as Nginx } from '../../../../images/tech-icons/NGINX.svg'
import { ReactComponent as PHP } from '../../../../images/tech-icons/PHP.svg'
import { ReactComponent as Prisma } from '../../../../images/tech-icons/Prisma.svg'
import { ReactComponent as RabbitMQ } from '../../../../images/tech-icons/RabbitMQ.svg'
import { ReactComponent as ReactSVG } from '../../../../images/tech-icons/React.svg'
import { ReactComponent as Redux } from '../../../../images/tech-icons/Redux.svg'
import { ReactComponent as SolidJS } from '../../../../images/tech-icons/SolidJS.svg'
import { ReactComponent as Ubuntu } from '../../../../images/tech-icons/Ubuntu.svg'
import { ReactComponent as VirtualBox } from '../../../../images/tech-icons/VirtualBox.svg'
import { ReactComponent as Vite } from '../../../../images/tech-icons/Vite.svg'


const techIcons = {
    Apache: Apache,
    Bootstrap: Bootstrap,
    Docker: Docker,
    Linux: Linux,
    MySQL: MySQL,
    Nginx: Nginx,
    PHP: PHP,
    Prisma: Prisma,
    RabbitMQ: RabbitMQ,
    React: ReactSVG,
    Redux: Redux,
    SolidJS: SolidJS,
    Ubuntu: Ubuntu,
    VirtualBox: VirtualBox,
    Vite: Vite,
}


const SingleTechIcon = ({ name }) => {
    const Component = techIcons[name];

    return (
        <Component className="single-icon" />
    )
}

/**
 * takes list of technologies used, and uses names to find the correct SVGs
 * each icon is then created as a react component in SingleTechIcon
 */

const IconDisplay = (props) => {
    return (
        <div className='tech-icon-container'>
            {/* <div className='tool-text'>
                <p>
                    Tools
                </p>
                <p>
                    Used:
                </p>
            </div> */}
            <div className='all-tech-icons'>
                {props.technologies.map((name) => (
                    <SingleTechIcon name={name} key={name} />

                ))}
            </div>
        </div>
    )
}

export default IconDisplay;