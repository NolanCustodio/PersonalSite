 import { createSlice } from "@reduxjs/toolkit";

 const projectCounterSlice = createSlice({
    name: "projectCounter",
    initialState:{
        value: 0
    },
    reducers:{
        changeValue:(state, action) => {
            state.value = action.payload;
        }
    }
 })

 export const { changeValue } = projectCounterSlice.actions;
 export default projectCounterSlice.reducer;