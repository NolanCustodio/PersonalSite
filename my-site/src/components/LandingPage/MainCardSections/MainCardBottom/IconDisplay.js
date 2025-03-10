import { React } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Apache } from '../../../../images/icons/Apache.svg'
import { ReactComponent as Docker } from '../../../../images/icons/Docker.svg';
import { ReactComponent as Linux } from '../../../../images/icons/Linux.svg'
import { ReactComponent as MySQL } from '../../../../images/icons/MySQL.svg';
import { ReactComponent as Nginx } from '../../../../images/icons/NGINX.svg'
import { ReactComponent as PHP } from '../../../../images/icons/PHP.svg'
import { ReactComponent as Prisma } from '../../../../images/icons/Prisma.svg'
import { ReactComponent as RabbitMQ } from '../../../../images/icons/RabbitMQ.svg'
import { ReactComponent as ReactSVG } from '../../../../images/icons/React.svg'
import { ReactComponent as Redux } from '../../../../images/icons/Redux.svg'
import { ReactComponent as SolidJS } from '../../../../images/icons/SolidJS.svg'
import { ReactComponent as Ubuntu } from '../../../../images/icons/Ubuntu.svg'
import { ReactComponent as VirtualBox } from '../../../../images/icons/VirtualBox.svg'
import { ReactComponent as Vite } from '../../../../images/icons/Vite.svg'

import './MainCardBottom.css'

const techIcons = {
    Apache: Apache,
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


const SingleTechIcon = ({ name, techIconCountArg }) => {
    const Component = techIcons[name];

    return (
        <Component className="single-icon" />
    )
}


const IconDisplay = () => {
    
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];
    const techList = Object.keys(currentProject.projectTechnology);

    // setTechIconCount(techList.length);

    return (
        <div className='bottom all-tech-icons'>
            {techList.map((name) => (

                <SingleTechIcon name={name} key={name} techIconCountArg={techList.length} />

            ))}
        </div>
    )
}

export default IconDisplay;