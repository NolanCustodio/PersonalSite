import { createSlice } from "@reduxjs/toolkit";
import ProjectsInfo from './ProjectText';

const initialCarouselState = {
    items: ProjectsInfo,
    index: 0,
}

const projectCarouselSlice = createSlice({
    name: "projectCarousel",
    initialState: initialCarouselState,
    reducers:{
        changeState:(state, action) =>{
            state.index = action.payload
        }
    }
});

export const {changeState} = projectCarouselSlice.actions;
export default projectCarouselSlice.reducer;



