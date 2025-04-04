import { createSlice } from "@reduxjs/toolkit";
// import { getWindowDimensions } from "../components/Navigation";

const windowInfoSlice = createSlice({
    name: "windowInfo",
    initialState: 0,
    reducers:{
        changeState:(state, action) =>{
            state = action.payload
        }
    }
});


export const {changeState} = windowInfoSlice.actions;
export default windowInfoSlice.reducer;
