import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Route } from 'react-router-dom'
import firebase from '../../config/fbConfig.js'
import Navbar from '../Navbar'
import LoginScreen from '../LoginScreen/'
import RegisterScreen from '../RegisterScreen'
import PageForAuthed from '../PageForAuthed'
import HomeScreen from '../HomeScreen/index.js'
import ProtectedRoute from '../ProtectedRoute'

import './App.css'

export default function App() {

  const history = useHistory()

  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isInitialized, setInitialized] = useState(false)
  const [signUpError, setSignUpError] = useState({})
  const [authError, setAuthError] = useState({})

  useEffect(() => {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    // .then(function() {
    // // Existing and future Auth states are now persisted in the current
    // // session only. Closing the window would clear any existing state even if
    // // a user forgets to sign out.
    // });
    firebase.auth().onAuthStateChanged(function(user) {
      setInitialized(true)
      if (user) {
        console.log('user signed in ')
        setIsAuthorized(true)
      } else {
        console.log('no user signed in')
        setIsAuthorized(false)
      }
    });
    //  firebase.auth().currentUser
  }, [])

  const handleLogin = data => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setIsAuthorized(true)
        setAuthError({})
        history.push('/')
      })
      .catch(function(error) {
        setIsAuthorized(false)
        setAuthError(error)
      })
  }
  
  const handleRegister = data => {
    
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setIsAuthorized(true)
        setSignUpError({})
        history.push('/pageforauthed')
      })
      .catch(function(error) {
        setSignUpError(error)
        setIsAuthorized(false)
      });
  }

  const onLogOut = () => {
    firebase.auth().signOut()
    .then(() => {
      setIsAuthorized(false)
      history.push('/login')
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  const renderLoginScreen = (props) => {
    return(<LoginScreen 
      {...props}
      isAuthorized={isAuthorized}
      submit={handleLogin}
      authError={authError}
      isInitialized={isInitialized}
    />)
  }

  const renderRegisterScreen = (props) => {
    return(<RegisterScreen 
      {...props}
      isAuthorized={isAuthorized}
      submit={handleRegister}
      signUpError={signUpError}
      isInitialized={isInitialized}
    />)
  }
  
  return (
    <div className="App">
      <Navbar isAuthorized={isAuthorized} onLogOut={onLogOut} />
      <ProtectedRoute path='/' exact isAuthorized={isAuthorized} isInitialized={isInitialized} component={HomeScreen} />
      <Route path='/login' render={renderLoginScreen} />
      <Route path='/register' render={renderRegisterScreen} />
      <ProtectedRoute path='/pageforauthed' exact isAuthorized={isAuthorized} isInitialized={isInitialized} component={PageForAuthed} />
    </div>
  )
}
