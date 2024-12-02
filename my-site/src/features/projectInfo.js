import { createSlice } from "@reduxjs/toolkit";
import ProjectsInfo from "./ProjectText";

const projectInfoState = {
    index: 0,
    value: ProjectsInfo[0]
}

const projectsInfoSlice = createSlice({
    name: "projectsInfo",
    initialState: projectInfoState,
    reducers:{
        changeProject: (state, action) => {
            state.value = action.payload
        },
        decrementProjectIndex:(state) => {
            projectInfoState.index -= 1;
            state.value = ProjectsInfo[projectInfoState.index];
        },
        incrementProjectIndex:(state) => {
            projectInfoState.index += 1;
            state.value = ProjectsInfo[projectInfoState.index];
        },
        resetProjectIndex:(state) =>{
            projectInfoState.index = 0;
            state.value = ProjectsInfo[projectInfoState.index];
        }
    }
});

export const { changeProject, decrementProjectIndex, incrementProjectIndex, resetProjectIndex} = projectsInfoSlice.actions;
export default projectsInfoSlice.reducer;