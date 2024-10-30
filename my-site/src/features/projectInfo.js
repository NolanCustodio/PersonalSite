import { createSlice } from "@reduxjs/toolkit";
import ProjectsInfo from "./ProjectText";

const projectInfo = {
    value: ProjectsInfo.portfolio
}

const projectArray = ['portfolio', 'synchat', 'newsbox'];

const projectInfoSlice = createSlice({
    name: ProjectsInfo,
    initialState: projectInfo,
    reducers:{
        nextProject: (state) => {
            
        }
    }
})
