import React from 'react'
import RegisterForm from '../RegisterScreen/RegisterForm'
import DivWrapper from '../../containers/DivWrapper'

import './RegisterScreen.css'

function RegisterScreen(props) {

  if(!props.isInitialized) return null
  
  return (
    <DivWrapper class="register-screen">
      {
        props.isAuthorized 
          ? <h2>You are already registered</h2>
          : <RegisterForm signUpError={props.signUpError} submit={props.submit}/>
      }
    </DivWrapper>
  )
  
}

export default RegisterScreen