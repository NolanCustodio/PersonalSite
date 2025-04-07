import './Project.css';

const Project = (props) =>{
    // console.log(props);

    return(
        <div className='project' id={props.projectName} 
            style={{height: props.windowHeight}}
        >
            <h1 className='project-name'>
                Project Name: {props.projectName}
            </h1>
            <div>Icons</div>
            <p>Small Description</p>
            <button className='next-button'>V</button>
        </div>
    )
}

export default Project;