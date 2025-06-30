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
        const arr = Object.entries(response.data || {});
        return arr;  
    }
);
export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({ email, password }) => {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjdYBye_LuZ6Ft6QPsDWiZvwfJ6-JaZZo`,
        {
          email,
          password,
          returnSecureToken: true
        }
      );
      console.log(" response" , response.data);
      return response.data; // accessToken, refreshToken, userId гэх мэт
    }
  );
export const logIn = createAsyncThunk(
    'auth/signUp',
    async ({ email, password }) => {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjdYBye_LuZ6Ft6QPsDWiZvwfJ6-JaZZo`,
        {
          email,
          password,
          returnSecureToken: true
        }
      );
      console.log(" response" , response.data);
      return response.data; // accessToken, refreshToken, userId гэх мэт
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
    },
    status: "idle",
    error: null,
   
    newOrder: {
        saving: false,
        finished: false,
        error:null
    },
    orders:[],
    loadingOrders: false,
    ordersError:null,
    auth: {
        user: null,
        token: null,
        uid: null,
        loading: false,
        error: null,
      },

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
            state.fileMeta = { name, size, type};
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
            })
            .addCase(GetOrder.pending, (state) => {
                state.loadingOrders = true;
                state.ordersError = null;
              })
            .addCase(GetOrder.fulfilled, (state, action) => {
                state.loadingOrders = false;
                state.orders = action.payload.map(([id,order])=> ({
                    id,
                    ...order
                }));
              })
            .addCase(GetOrder.rejected, (state, action) => {
                state.loadingOrders = false;
                state.ordersError = action.error.message;
              })
            .addCase(signUp.pending, (state) => {
                state.auth.loading = true;
                state.auth.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.auth.loading = false;
                state.auth.user = action.payload.email;
                state.auth.token = action.payload.idToken;
                state.auth.uid = action.payload.localId;

            })
            .addCase(signUp.rejected, (state, action) => {
                state.auth.loading = false;
                state.auth.error = action.error.message;
            })
            .addCase(logIn.pending, (state) => {
                state.auth.loading = true;
                state.auth.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.auth.loading = false;
                state.auth.user = action.payload.email;
                state.auth.token = action.payload.idToken;
                state.auth.uid = action.payload.localId;

            })
            .addCase(login.rejected, (state, action) => {
                state.auth.loading = false;
                state.auth.error = action.error.message;
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