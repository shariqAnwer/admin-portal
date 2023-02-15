import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reduxToolkit/authSlice"
import vendorOnboardingSlice from "./reduxToolkit/vendorOnboardingSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        vendorOnboarding : vendorOnboardingSlice,
    },
});