import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fileMeta: {
        name: '',
        size: 0,
        type: '',
    },
    status: "idle",
    error: null
   

};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        uploadStart: (state) => {
            state.status = "uploading";
            state.error = null;
        },
        uploadSuccess: (state, action) => {
            const { name, size, type } = action.payload;

            state.status = "success";
            state.fileMeta = { name, size, type };
            console.log("File succes", state.fileMeta);
        },
        uploadFailure: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        },
        removeFile: (state) => {
            state.fileMeta = {
                name: '',
                size: 0,
                type: '',
            };
            state.status = "idle";
            console.log('Status display :', state.status);
        },
        
    },
});

export const { uploadStart, uploadSuccess, uploadFailure, removeFile,continueSectionOn } = counterSlice.actions;
export default counterSlice.reducer;