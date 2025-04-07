import {useSelector, useDispatch} from 'react-redux';

import ProjectsInfo from '../../features/ProjectText';

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Project from "./Project/Project";

import "./Landing.css";

const Landing = () =>{
    const windowInfo = useSelector(state => state.windowInfo.index);
    console.log(windowInfo);

    // const ProjectsInfo;

    return(
        <div className="content">
            <PersonalInfo/>

            {ProjectsInfo.map((project) => {
                return <Project 
                    key={project} 
                    projectName={project.projectName} 
                    windowHeight={windowInfo.height} 
                    windowWidth={windowInfo.width}/>
            })}
            {/* {projects.map((project) => {
                return <Project 
                    key={project} 
                    projectName={project} 
                    windowHeight={windowInfo.height} 
                    windowWidth={windowInfo.width}/>
            })} */}

            {/* <Project projectName="Portfolio" windowHeight/>
            <Project projectName="Synchat"/>
            <Project projectName="NewsBox"/> */}
        </div>
    )
}

export default Landing;