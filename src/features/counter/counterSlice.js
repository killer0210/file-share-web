import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    file: null,
    status: "idle"
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        newFile: (state, action) => {
            state.file = action.payload;
            console.log('Incoming parload:', action.payload);
            state.status = "uploading";
        },
        removeFile: (state) => {
            state.file = null;
            state.status = "idle";
            console.log('Status display :', state.status);
        }
    },
});

export const { newFile, removeFile } = counterSlice.actions;
export default counterSlice.reducer;