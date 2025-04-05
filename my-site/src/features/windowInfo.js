import { createSlice } from "@reduxjs/toolkit";
import { getWindowDimensions } from "../components/Navigation";

const windowInfoSlice = createSlice({
    name: "windowInfo",
    initialState: {index: getWindowDimensions()},
    reducers:{
        changeState:(state, action) =>{
            state.index = action.payload
        }
    }
});


export const {changeState} = windowInfoSlice.actions;
export default windowInfoSlice.reducer;
