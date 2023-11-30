import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = { value: {
    projectName: 'test name',
    projectDescription: 'test des',
    projectTechnology: 'test tech'
}}

export const projectSlice = createSlice({
    name: "project",
    initialState: initialProjectState,
    reducers: {
        changeProject: (state, action) => {
            // console.log(state.value)
            // console.log(action.payload)

            state.value = action.payload;

            // console.log(state.value);
        }
    }
});

export const { changeProject } = projectSlice.actions;

export default projectSlice.reducer;