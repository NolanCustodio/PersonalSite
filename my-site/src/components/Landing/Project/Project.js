import IconDisplay from './IconDisplay';

import './project.css';

const Project = (props) =>{
    // console.log(props);

    return(
        <div className='project' id={props.projectName} 
            style={{height: props.windowHeight}}
        >
            <h1 className='project-name'>
                Project Name: {props.projectName}
            </h1>
            <div>
                <IconDisplay technologies={props.projectTechnology}/>
            </div>
            <p>{props.projectBlurb}</p>
            <p>{props.projectSubtext}</p>
            <button className='next-button'>V</button>
        </div>
    )
}

export default Project;