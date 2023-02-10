import React from 'react'
import StepperForm from "./StepperForm"

import { CssBaseline, Container, Paper, Box } from '@mui/material' 

const UserForm = () => {
  return (
    <>
    <CssBaseline />
    <Container component={Box} p={4}  >
      <Paper style={{background:"#f37d31"}} component={Box} p={3} >
        <StepperForm />
      </Paper>
    </Container>
    </>
  )
}

export default UserForm