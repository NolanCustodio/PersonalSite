import { createSlice } from "@reduxjs/toolkit";

const projectIndex = {
    index: 0,
}

const projectIndexSlice = createSlice({
    name: "projectIndex",
    initialState: projectIndex,
    reducers:{
        decrementProjectIndex:(state) => {
           state.value -= 1;

        },
        incrementProjectIndex:(state) => {
            state.value += 1;

        },
        resetProjectIndex:(state) =>{
            state.value = 0;

        }
    }
});

export const { 
    decrementProjectIndex, 
    incrementProjectIndex,
    resetProjectIndex} = projectIndexSlice.actions;
export default projectIndexSlice.reducer;