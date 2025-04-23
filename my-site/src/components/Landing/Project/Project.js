// import { useSelector } from 'react-redux';

import { ScrollTo } from '../../Navigation';

import NextButton from '../NextButton/NextButton';
import IconDisplay from './IconDisplay/IconDisplay';

import './project.css';


const Project = (props) => {
    // const windowInfo = useSelector((state) => state.windowInfo.index);
    // console.log(props.index);
    let nextButton;

    if (props.projectName === 'NewsBox') {
        nextButton = <div></div>
    } else {
        nextButton = <NextButton projectIndex={props.index} />
    }

    return (
        <div className='project-spacing' id={props.projectName}>
            <div className='project'>
                <div className='project-top-half'>
                    <h1 className='project-name'>
                        Project Name: {props.projectName}
                    </h1>
                    <br />
                    <h1>Tools:</h1>
                    <IconDisplay technologies={props.projectTechnology} />

                    <p className='project-description'>{props.projectDescription}</p>
                </div>
                <div className='project-bottom-half'>
                    {nextButton}
                </div>
            </div>
        </div>
    )
}

export default Project;