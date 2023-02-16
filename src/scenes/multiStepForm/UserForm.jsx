import React, {useEffect} from 'react'
import StepperForm from "./StepperForm"

import { CssBaseline, Container, Paper, Box } from '@mui/material' 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearState } from '../../reduxToolkit/authSlice';
import { useDispatch } from 'react-redux';
const UserForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

const user = useSelector((state) => state.user)
// console.log("user", user)
useEffect(() => {
  if(!user) {
    dispatch(clearState)
    navigate("/login")
  }
}, [user, navigate, dispatch])

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