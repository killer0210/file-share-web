import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    file: null,
    status: "idle"
  };

export const counterSlice = createSlice({
    name:'counter', 
    initialState,
    reducers:{
        newFile: (state, action) => {
            state.file = action.payload;
            console.log('Incoming parload:',action.payload );
            state.status = "uploading";
        }
    },
});

export const { newFile } = counterSlice.actions;
export default counterSlice.reducer;