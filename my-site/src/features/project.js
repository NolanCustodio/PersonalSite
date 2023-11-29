import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
    projectName: 'test name',
    projectDescription: 'test des',
    projectTechnology: 'test tech'
}

export const projectSlice = createSlice({
    name: "project",
    initialState: {value: initialProjectState},
    reducers: {
        changeProject: (state, action) => {
            state.projectName = action.payload;
        }
    }
});

export const { changeProject } = projectSlice.actions;

export default projectSlice.reducer;