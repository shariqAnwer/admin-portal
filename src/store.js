import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reduxToolkit/authSlice"

export const store = configureStore({
    reducer: {
        user: authSlice,
    },
});