

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Project from "./Project/Project";

import { useWindowDimensions } from "../Navigation";

import "./Landing.css";

const Landing = () =>{

    // const windowDimensions = useWindowDimensions();

    // console.log(windowDimensions.height);

    return(
        <div className="content">
            <PersonalInfo/>
            <Project projectName="Portfolio"/>
            <Project projectName="Synchat"/>
            <Project projectName="NewsBox"/>
        </div>
    )
}

export default Landing;