import { useSelector, useDispatch } from "react-redux";

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Project from "./Project/Project";

import { useWindowDimensions } from "../Navigation";
import { changeState } from "../../features/windowInfo";

import "./Landing.css";

const Landing = () =>{
    const dispatch = useDispatch();
    const windowInfo = useSelector((state) => state.windowInfo);

    console.log(windowInfo);

    dispatch(changeState(useWindowDimensions()));

    return(
        <div>
            <PersonalInfo/>
            <Project projectName="Portfolio"/>
            <Project projectName="Synchat"/>
            <Project projectName="NewsBox"/>
        </div>
    )
}

export default Landing;