import './Project.css';

const Project = (props) =>{
    // console.log(props);

    return(
        <div className='project' id={props.projectName}>
            <h1>Project Name</h1>
            <div>Icons</div>
            <p>Small Description</p>
            <button>V</button>
        </div>
    )
}

export default Project;