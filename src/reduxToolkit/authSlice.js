import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    msg: "",
    userInfo: "",
    token: "",      //for storing the JWT
    loading: false,
    error: ""
}

const registerApi = "http://vrm.webvilleedemo.xyz/api/createVendor"

//Actions
//register user
export const signupUser = createAsyncThunk('registerUser', async ({ user_fname, user_lname, user_email }) => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        },
    };
    const body = JSON.stringify({ user_fname, user_lname, user_email })
    try {
        await axios.post(`${registerApi}`, body, config)

    } catch (error) {
        console.log(error)
    }
})

//login user
// export const loginUser = createAsyncThunk('loginUser', async ({}) => {
//     const config  = {
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//     }
//     const body = JSON.stringify({user})
// })

//authSlice
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {
        //register user
        [signupUser.pending]: (state) => {
            state.loading = true
        },
        [signupUser.fulfilled]: (state, { payload }) => {
            state.loading = false   // registration successful
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})

export default authSlice.reducer


