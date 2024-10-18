import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
    name:"text",
    initialState: {
       search:null,
       otherResult:null, 
    },
    reducers:{
        addSearchMovie: (state, action) => {
            const {search, otherResult} = action.payload;
            state.search = search;
            state.otherResult = otherResult;
        },
        
    }

});
export const{addSearchMovie} = searchTextSlice.actions;
export default searchTextSlice.reducer;