import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get user from local storage
const userToken = localStorage.getItem('userToken')

const initialState = {
    message: "",
    userInfo: null,
    userToken: userToken ? userToken : null,      //for storing the JWT
    loading: false,
    error: false,
    success: false,
}

const registerApi = "http://vrm.webvilleedemo.xyz/api/createVendor" //make changes before deployment
const loginApi = "http://vrm.webvilleedemo.xyz/api/signin"

//Actions
//register user
export const signupUser = createAsyncThunk('registerUser', async ({ user_fname, user_lname, user_email }, { rejectWithValue }) => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        },
    };
    const body = JSON.stringify({ user_fname, user_lname, user_email })
    try {
        const response = await axios.post(`${registerApi}`, body, config)
        return response

    } catch (error) {
        console.log(error)
        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(error.response)
    }
})

//login user
export const loginUser = createAsyncThunk('loginUser', async ({ user_email, user_password }, { rejectWithValue }) => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        },
    };
    const body = JSON.stringify({ user_email, user_password })
    try {
        const response = await axios.post(`${loginApi}`, body, config)
        console.log("response", response.data)
        if (response.status === 200) {
            localStorage.setItem('userToken', response.data.data)      
            return response.data
        }
        else {
            return null
        }

    } catch (error) {
        console.log("Error", error.response.data)
        alert("")
        return rejectWithValue(error.response)
    }
})

//logout user
export const logoutUser = createAsyncThunk('logoutUser', async () => {
    try {
        localStorage.removeItem('userToken')
        return true
    } catch (error) {
        console.log(error)
        return false
    }
})

//fetchUserByToken
// export const fetchUserBytoken = createAsyncThunk(
//     'users/fetchUserByToken',
//     async ({ token }, thunkAPI) => {
//       try {
//         const response = await fetch(
//           'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//           {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               Authorization: token,
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         let data = await response.json();
//         console.log('data', data, response.status);

//         if (response.status === 200) {
//           return { ...data };
//         } else {
//           return thunkAPI.rejectWithValue(data);
//         }
//       } catch (e) {
//         console.log('Error', e.response.data);
//         return thunkAPI.rejectWithValue(e.response.data);
//       }
//     }
//   );



//authSlice
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearState: (state) => {
            state.error = false
            state.success = false;
            state.loading = false;
            state.message = "";
            state.userInfo = "";
            state.userToken = "";
            return state;
        },
    },
    extraReducers: {
        //login
        [loginUser.pending]: (state) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            // console.log("payload===",payload.data)
            state.loading = false   // login successful
            state.userInfo = ""
            state.userToken = payload.data
            state.message = payload.message
            state.success = true
            state.error = false;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.userToken = ""
            state.loading = false   // login successful
            state.message = payload.message
            state.success = false;
            state.error = true;
        },
        //register user
        [signupUser.pending]: (state) => {
            state.loading = true
        },
        [signupUser.fulfilled]: (state, { payload }) => {
            state.loading = false   // registration successful
            state.success = true
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = true;
            state.error = payload;
        },
        [logoutUser.fulfilled]: (state) => {
            state.userToken = null;
        },
        //fetchUserToken
        // [fetchUserBytoken.pending]: (state) => {
        //     state.isFetching = true;
        //   },
        //   [fetchUserBytoken.fulfilled]: (state, { payload }) => {
        //     state.isFetching = false;
        //     state.isSuccess = true;

        //     state.email = payload.email;
        //     state.username = payload.name;
        //   },
        //   [fetchUserBytoken.rejected]: (state) => {
        //     console.log('fetchUserBytoken');
        //     state.isFetching = false;
        //     state.isError = true;
        //   },
    }
})

export const { clearState } = authSlice.actions;    //for logout

export default authSlice.reducer

export const userSelector = (state) => state.user;

