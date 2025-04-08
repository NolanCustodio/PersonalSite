import IconDisplay from './IconDisplay';

import './project.css';

const Project = (props) =>{
    // console.log(props);

    return(
        <div className='project' id={props.projectName} 
            style={{height: (props.windowHeight * .9)}}
        >
            <h1 className='project-name'>
                Project Name: {props.projectName}
            </h1>
            <br/>
            <h1>Tools Used:</h1>
            <IconDisplay technologies={props.projectTechnology}/>
            
            <p>{props.projectDescription}</p>

            <button className='next-button'>V</button>
        </div>
    )
}

export default Project;