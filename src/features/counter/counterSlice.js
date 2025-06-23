import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios-order";

export const saveOrder = createAsyncThunk(
    'counter/saveOrder',
    async (orderData) => {
        const response = await axios.post("/orders.json", orderData);
        return response.data;
    }
);
export const GetOrder = createAsyncThunk(
    'counter/getOrder',
    async (orderData) => {
        const response = await axios.get("/orders.json");
        const arr = Object.entries(response.data);
        return arr;  
    }
);

// useEffect(() => {
//     axios.get("/orders.json").then(response => {
//         const arr = Object.entries(response.data);
//        arr.forEach(el => {
//             console.log(el[1]);
//        });
//     });
// }, []);

const initialState = {
    fileMeta: {
        name: '',
        size: 0,
        type: '',
        timestamp:'',
    },
    status: "idle",
    error: null,
   
    newOrder: {
        saving: false,
        finished: false,
        error:null
    }

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
            const { name, size, type,timestamp } = action.payload;

            state.status = "success";
            state.fileMeta = { name, size, type, timestamp };
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
                timestamp: '',
            };
            state.status = "idle";
            console.log('Status display :', state.status);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveOrder.pending, (state) => {
                state.newOrder.saving = true;
                state.newOrder.finished = false;
                state.newOrder.error = null;
            })
            .addCase(saveOrder.fulfilled, (state) => {
                state.newOrder.saving = false;
                state.newOrder.finished = true;
                state.newOrder.error = null;
            })
            .addCase(saveOrder.rejected, (state, action) => {
                state.newOrder.saving = false;
                state.newOrder.finished = true;
                state.newOrder.error = action.error.message;
            });
    }
});

export const { 
    uploadStart, 
    uploadSuccess, 
    uploadFailure, 
    removeFile,
    continueSectionOn,
} = counterSlice.actions;
export default counterSlice.reducer;