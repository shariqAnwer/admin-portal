import React, { useState } from 'react'
import { TextField, Typography, Button, Stepper, Step, StepLabel, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import { vendorOnboarding } from '../../reduxToolkit/vendorOnboardingSlice';



const initState = {
  vendor_company: "",
  street_address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  vendor_gst_nbr: "",
  vendor_msme_registerd: "",
  vendor_bench_strength: "",
  vendor_technical_skills: "",
  vendor_type: "",
  vendor_name1: "",
  vendor_email1: "",
  vendor_contact1: "",
  vendor_name2: "",
  vendor_email2: "",
  vendor_contact2: "",
}

const StepperForm = () => {
  const [currStep, setCurrStep] = useState(0)
  const [stepFormData, setStepFormData] = useState(initState);
  function getSteps() {
    return [
      "Basic Info",
      "Address Info",
      "Personal Info",
      "Thank You"
    ]
  }
  function getStepsContent(step) {
    const options = [
      { key: "true", value: "true" },
      { key: "false", value: "false" },
    ]
    const skills = [
      { key: "1", value: "Node" },
      { key: "2", value: "React" },
      { key: "3", value: "Salesforce" },
      { key: "4", value: "MongoDB" },
      { key: "5", value: "PHP" },
    ]
    const vendorTypes = [
      { key: "1", value: "1" },
      { key: "2", value: "2" },
      { key: "3", value: "3" },
    ]
  
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              id="vendor-company"
              label="Vendor Company"
              variant="outlined"
              placeholder="Enter Your Vendor Company"
              fullWidth
              required
              margin="normal"
              name="vendor_company"
              value={vendor_company}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_gst_nbr"
              label="Vendor GST Number"
              variant="outlined"
              placeholder="Enter Your GST Number"
              fullWidth
              margin="normal"
              name="vendor_gst_nbr"
              value={vendor_gst_nbr}
              onChange={(e) => handleChange(e)}
  
            />
            <TextField
              id="vendor_bench_strength"
              label="Vendor Bench Strength"
              variant="outlined"
              placeholder="Enter Your Bench Strength"
              fullWidth
              margin="normal"
              type="number"
              name="vendor_bench_strength"
              value={vendor_bench_strength}
              onChange={(e) => handleChange(e)}
  
            />
            <TextField
              select
              id="vendor_msme_registerd"
              label="MSME Registered"
              variant="outlined"
              placeholder="MSME Registered"
              fullWidth
              margin="normal"
              name="vendor_msme_registerd"
              value={vendor_msme_registerd}
              onChange={(e) => handleChange(e)}
            >
              {options.map((option) => {
                return (<MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>)
              })}
            </TextField>
            <TextField
              select
              id="vendor_technical_skills"
              label="Select Technical List"
              variant="outlined"
              placeholder="Technical List"
              fullWidth
              margin="normal"
              name="vendor_technical_skills"
              value={vendor_technical_skills}
              onChange={(e) => handleChange(e)}
            >
              {skills.map((option) => {
                return (<MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>)
              })}
            </TextField>
            <TextField
              select
              id="vendor_type"
              label="Select Vendor Type"
              variant="outlined"
              placeholder="Vendor Type"
              fullWidth
              margin="normal"
              name="vendor_type"
              value={vendor_type}
              onChange={(e) => handleChange(e)}
            >
              {vendorTypes.map((option) => {
                return (<MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>)
              })}
            </TextField>
          </>
        )
      case 1:
        return (
          <>
            <TextField
              id="street_address"
              label="Street Address"
              variant="outlined"
              placeholder="Enter Your Street Address"
              fullWidth
              margin="normal"
              name="street_address"
              value={street_address}
              onChange={(e) => handleChange(e)}
              
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="Enter Your City"
              fullWidth
              margin="normal"
              name="city"
              value={city}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="state"
              label="State"
              variant="outlined"
              placeholder="Enter Your State"
              fullWidth
              margin="normal"
              name="state"
              value={state}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country"
              fullWidth
              margin="normal"
              name="country"
              value={country}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="zip"
              label="Zip"
              variant="outlined"
              placeholder="Enter Your Zip"
              fullWidth
              margin="normal"
              name="zip"
              value={zip}
              onChange={(e) => handleChange(e)}
            />

          </>
        )
      case 2:
        return (
          <>
            <TextField
              id="vendor_name1"
              label="Vendor Name 1"
              variant="outlined"
              placeholder="Enter Your Name"
              fullWidth
              margin="normal"
              name="vendor_name1"
              value={vendor_name1}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_email1"
              label="Vendor Email 1"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              name="vendor_email1"
              value={vendor_email1}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_contact1"
              label="Vendor Contact 1"
              variant="outlined"
              placeholder="Enter Your Contact Number"
              fullWidth
              margin="normal"
              name="vendor_contact1"
              value={vendor_contact1}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_name2"
              label="Vendor Name 2"
              variant="outlined"
              placeholder="Enter Your Name"
              fullWidth
              margin="normal"
              name="vendor_name2"
              value={vendor_name2}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_email2"
              label="Vendor Email 2"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              name="vendor_email2"
              value={vendor_email2}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="vendor_contact2"
              label="Vendor Contact 2"
              variant="outlined"
              placeholder="Enter Your Contact Number"
              fullWidth
              margin="normal"
              name="vendor_contact2"
              value={vendor_contact2}
              onChange={(e) => handleChange(e)}
            />
          </>
        )
      default: return "unknown step";
    }
  }

  const { 
    vendor_company,
    street_address,
    city,
    state,
    country,
    zip,
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
    vendor_contact2 } = stepFormData;

  const steps = getSteps()

  const handleStep = (value) => {
    setCurrStep(currStep + value)
  }

  const handleChange = (e) => {
    return setStepFormData({ ...stepFormData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("stepFormData", stepFormData);
    dispatch(vendorOnboarding({vendor_company,
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
      vendor_contact2}));
      handleStep(1)
  }


  return (
    <div>

      {currStep === 3 ? (<Typography variant='h2' align='center' sx={{ m: 3 }} >Thank You <br /> <h5>Please wait for approval...</h5></Typography>) : (
        <>
          <Stepper activeStep={currStep}>
            {steps.map((step, index) => {
              return (

                <Step key={index}><StepLabel>{step}</StepLabel></Step>
              )
            })}
          </Stepper>
          <form>{getStepsContent(currStep)}</form>
          <Button variant='contained' color='primary' disabled={currStep === 0} onClick={() => handleStep(-1)}>Back</Button>
          <Button variant='contained' color='primary' disabled={currStep === 2} onClick={() => handleStep(1)}>NEXT</Button>
          <Button variant='contained' color='primary' disabled={currStep !== steps.length-2} onClick={(e) => handleSubmit(e)}>Submit</Button>

        </>
      )}


    </div>
  )
}

export default StepperForm