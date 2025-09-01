// import { useSelector } from 'react-redux';

import { ScrollTo } from '../../Navigation';

import NextButton from '../NextButton/NextButton';
import IconDisplay from './IconDisplay/IconDisplay';

import './project.css';

const ProjectDescription = (props) => {
    // console.log(props.projectDescription[0]);
    let rtnComponent = [];

    for (let i = 0; i < 3; i++) {
        rtnComponent.push(
            <div className={'single-project-description description-index-' + i} key={i}>
                {props.projectDescription[i]}
            </div>
        )
    }

    return rtnComponent;
}


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
                        <a href={props.projectGithub} target='_blank' className='project-name-link'>

                            {props.projectName}

                        </a>
                    </h1>

                    <IconDisplay technologies={props.projectTechnology} />

                    {/* <p className='project-description'>{props.projectDescription}</p> */}
                    <div className='project-description'>
                        <ProjectDescription projectDescription={props.projectDescriptionTest} />
                    </div>
                </div>
                <div className='project-bottom-half'>
                    {nextButton}
                </div>
            </div>
        </div>
    )
}

export default Project;