// import { useSelector } from 'react-redux';

import { scrollIntoView} from '../../Navigation';
import ProjectCard from './ProjectCards/ProjectCard';
import NextButton from '../NextButton/NextButton';

import { ReactComponent as ArrowDown } from "../../../images/navigation/ArrowDown.svg"
import logo from "../../../images/logo/test_logo.jpg"

import './personal-info.css';

const PersonalInfo = () => {
    // const windowInfo = useSelector((state) => state.windowInfo.index);

    return(
        <div className='personal-info'>
            <div className='personal-info-top-half'>
                <div className="logo">
                    {/* <img src={logo}/> */}
                </div>

                <div className='name-container'>
                    <h1 className='name' data-text="Nolan.Custodio">Nolan.Custodio</h1>
                </div>
                {/* <div className='links'>
                    <p>Resume</p><p>Github</p>
                </div> */}
                {/* <p>{`window size H:${windowInfo.height} W:${windowInfo.width}`}</p> */}

                <div className='project-list'>
                    <ProjectCard projectName="Portfolio"/>
                    <ProjectCard projectName="Synchat"/>
                    <ProjectCard projectName="NewsBox"/>
                </div>
            </div>

            <div className='personal-info-bottom-half'>
                <NextButton projectIndex={-1} />
            </div>
        </div>
    )
}

export default PersonalInfo;