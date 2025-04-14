import { useSelector } from 'react-redux';

import { ScrollTo } from '../../Navigation';

import NextButton from '../NextButton/NextButton';
import IconDisplay from './IconDisplay/IconDisplay';

import './project.css';


const Project = (props) =>{
    const windowInfo = useSelector((state) => state.windowInfo.index);
    // console.log(props.index);
    let nextButton;

    if(props.projectName === 'NewsBox'){
        nextButton = <div></div>
    }else{
        nextButton = <NextButton projectName={props.projectName} projectIndex={props.index}/>
    }

    return(
        <div className='project' id={props.projectName} 
            style={{height: (windowInfo.height * .98)}}
        >
            <h1 className='project-name'>
                Project Name: {props.projectName}
            </h1>
            <br/>
            <h1>Tools Used:</h1>
            <IconDisplay technologies={props.projectTechnology}/>
            
            <p>{props.projectDescription}</p>

            {nextButton}
        </div>
    )
}

export default Project;