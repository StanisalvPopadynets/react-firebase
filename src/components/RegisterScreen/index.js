import React from 'react'
import RegisterForm from '../RegisterScreen/RegisterForm'

import './RegisterScreen.css'

function RegisterScreen(props) {

  if(!props.isInitialized) return null
  
  return (
    <div className="register-screen">
      {props.isAuthorized ? <h2>You are already registered</h2> : <RegisterForm signUpError={props.signUpError} submit={props.submit}/>}
    </div>
  )
  
}

export default RegisterScreen