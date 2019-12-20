import React from 'react'
import LoginForm from './LoginForm'

import './LoginScreen.css'

function LoginScreen(props) {
 
  if(!props.isInitialized) return null

  return (
    <div className="login-screen">
      {props.isAuthorized ? <h2>You are already logged in</h2> : <LoginForm authError={props.authError} submit={props.submit} />}
    </div>
  )
  
}

export default LoginScreen