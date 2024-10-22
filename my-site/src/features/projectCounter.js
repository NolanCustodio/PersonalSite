 import { createSlice } from "@reduxjs/toolkit";

 const projectCounterSlice = createSlice({
    name: "projectCounter",
    initialState:{
        value: 0
    },
    reducers:{
        changeCount:(state, action) => {
            state.value = action.payload;
        }
    }
 })

 export const { changeCount } = projectCounterSlice.actions;
 export default projectCounterSlice.reducer;