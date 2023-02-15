import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}
const vendorOnboardingApi = "http://vrm.webvilleedemo.xyz/api/vendorOnboarding"


// vendorOnboardingApi
export const vendorOnboarding = createAsyncThunk('vendorOnboarding', async ({ vendor_company,
    vendor_address: { street_address, city, state, country, zip },
    vendor_gst_nbr,
    vendor_msme_registerd,
    vendor_bench_strength,
    vendor_technical_skills,
    vendor_type,
    vendor_name1,
    vendor_email1,
    vendor_contact1,
    vendor_name2,
    vendor_email2,
    vendor_contact2 }) => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        },
    };
    const body = JSON.stringify({ vendor_company,
        vendor_address: { street_address, city, state, country, zip },
        vendor_gst_nbr,
        vendor_msme_registerd,
        vendor_bench_strength,
        vendor_technical_skills,
        vendor_type,
        vendor_name1,
        vendor_email1,
        vendor_contact1,
        vendor_name2,
        vendor_email2,
        vendor_contact2})
    try {
        await axios.post(`${vendorOnboardingApi}`, body, config)

    } catch (error) {
        console.log(error)
    }
})



//vendorOnboarding Slice

const vendorOnboardingSlice = createSlice({
    name : "vendorOnboarding",
    initialState,
    reducers : {},
    extraReducers : {}
})

export default vendorOnboardingSlice.reducer