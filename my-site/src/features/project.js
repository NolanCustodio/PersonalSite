import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = { value: {
    null:null
}}

const projectSlice = createSlice({
    name: "project",
    initialState: initialProjectState,
    reducers: {
        changeProject: (state, action) => {
            state.value = action.payload;
        }
    }
});

// const projectCounterSlice = createSlice({
//     name: "projectCounter",
//     initialState: {value: 0},
//     reducers:{
//         changeProjectCount: (state, action) => {
//             state.value = action.payload;
//         }
//     }
// })

export const { changeProject } = projectSlice.actions;

export default projectSlice.reducer;

// export const { changeProjectCount } = projectCounterSlice.actions;

// export default projectCounterSlice.reducer;

// export {projectSlice.reducer, }