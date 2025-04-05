import {useSelector, useDispatch} from 'react-redux';

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Project from "./Project/Project";

import "./Landing.css";

const Landing = () =>{


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