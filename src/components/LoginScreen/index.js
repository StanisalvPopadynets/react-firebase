import React from 'react'
import LoginForm from './LoginForm'
import DivWrapper from '../../containers/DivWrapper'

import './LoginScreen.css'

function LoginScreen(props) {
 
  if(!props.isInitialized) return null

  return (
    <DivWrapper  class='login-screen'>
      {
        props.isAuthorized
          ? <h2>You are already logged in</h2> 
          : <LoginForm authError={props.authError} submit={props.submit} />
      }
    </DivWrapper>
    
  )
  
}

export default LoginScreen