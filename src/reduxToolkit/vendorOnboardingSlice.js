import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    vendorData: [],
    message:"",
    loading: false,
    error: false,
    success: false,
}
const vendorOnboardingApi = "http://vrm.webvilleedemo.xyz/api/vendorOnboarding"
const jwtStr = localStorage.getItem('userToken')
// console.log("jwtStr",jwtStr)

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
            'Content-Type': "application/json",
            'Authorization' : 'Bearer ' + jwtStr
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
        const {data} = await axios.post(`${vendorOnboardingApi}`, body, config)
        console.log("dataVendor", data)
        localStorage.setItem('vendorOnboardingDetails', JSON.parse(data))
        return data

    } catch (error) {
        console.log(error)
    }
})



//vendorOnboarding Slice

const vendorOnboardingSlice = createSlice({
    name : "vendorOnboarding",
    initialState,
    reducers : {
        clearState : (state) => initialState
    },
    extraReducers : {}
})


export const {clearState} = vendorOnboardingSlice.actions
export default vendorOnboardingSlice.reducer