import { useSelector, useDispatch } from 'react-redux';

import ProjectsInfo from '../../features/ProjectText';

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Project from "./Project/Project";

import "./landing.css";



const Landing = () => {
    const windowInfo = useSelector(state => state.windowInfo.index);
    // console.log(windowInfo);

    function createProjectComponents(projectsInfo){
        const rtnComponents = [];
        for (let i = 0; i < projectsInfo.length; i++) {
            // console.log(projectsInfo[i]);
            rtnComponents.push(<Project
                key={i}
                projectName={projectsInfo[i].projectName}
                projectGithub={projectsInfo[i].projectGithub}
                projectTechnology={projectsInfo[i].projectTechnology}
                projectDescription={projectsInfo[i].projectDescription}
                windowPosition={(windowInfo.height * 1.02) * (i + 2)}
                // nextProject={projectsInfo[i+1].projectName}
            />)
        }
        // console.log(rtnComponents);
        return rtnComponents
    }


    return (
        <div className="content">
            <PersonalInfo />

            {/* {ProjectsInfo[i].map((project) => {


                return <Project 
                    key={projectsInfo[i].projectName} 
                    projectName={projectsInfo[i].projectName}
                    projectGithub={projectsInfo[i].projectGithub}
                    projectTechnology={projectsInfo[i].projectTechnology} 
                    projectDescription={projectsInfo[i].projectDescription}
                    windowHeight={windowInfo.height} 
                    windowWidth={windowInfo.width}
                    nextProject={project}
                    />
            })} */}

            {createProjectComponents(ProjectsInfo)}

        </div>
    )
}

export default Landing;