import React, { useState } from 'react'
import { TextField, Typography, Button, Stepper, Step, StepLabel } from '@mui/material'

function getSteps() {
  return [
    "Basic Info",
    "Contact Info",
    "Personal Info",
    "Thank You"
  ]
}
function getStepsContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
      )
      case 1:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
      )
      case 2:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
      )
      case 3:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
      )
      default : return "unknown step";
  }
}

const StepperForm = () => {
  const [currStep, setCurrStep] = useState(0)
  const steps = getSteps()

  const handleStep = (value) => {
    setCurrStep(currStep + value)
  }

  return (
    <div>

      {currStep === 4 ? (<Typography variant='h2' align='center' sx={{ m: 3 }} >Thank You</Typography>) : (
        <>
          <Stepper activeStep={currStep}>
            {steps.map((step, index) => {
              return (

                <Step><StepLabel>{step}</StepLabel></Step>
              )
            })}
          </Stepper>
          <form>{getStepsContent(currStep)}</form>
          <Button variant='contained' color='primary' disabled={currStep === 0} onClick={() => handleStep(-1)}>Back</Button>
          <Button variant='contained' color='primary' onClick={() => handleStep(1)}>{currStep === steps.length-1 ? "FINISH" : "NEXT"}</Button>
        </>
      )}


    </div>
  )
}

export default StepperForm