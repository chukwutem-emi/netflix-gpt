import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
    name:"text",
    initialState: {
       search:[], 
    },
    reducers:{
        addSearchMovie: (state, action) => {
            state.search = action.payload;
        },
        
    }

});
export const{addSearchMovie} = searchTextSlice.actions;
export default searchTextSlice.reducer;