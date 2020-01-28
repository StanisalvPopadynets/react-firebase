import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import firebase from '../../config/fbConfig.js'
import Navbar from '../Navbar'
import LoginScreen from '../LoginScreen/'
import RegisterScreen from '../RegisterScreen'
import PageForAuthed from '../PageForAuthed'
import HomeScreen from '../HomeScreen/index.js'
import Table from '../TableScreen'
import DogScreen from '../DogScreen'
import PaginationScreen from '../PaginationScreen/index.js'
import ProtectedRoute from '../../containers/ProtectedRoute'

import './App.css'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      isAuthorized: true,
      isInitialized: false,
      isNavOpen: false,
      signUpError: {},
      authError: {}
    }
  }

  const

  componentDidMount() {
    // this.setState({
    //   isInitialized: true
    // })
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        this.setState({
          isInitialized: true,
          isAuthorized: true
        })
      } else {
        console.log('no user signed in')
        this.setState({
          isAuthorized: false,
          isInitialized: true
        })
      }
    })
  }

  handleLogin = data => {
    console.log(data)
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.setState({
          isAuthorized: true,
          authError: {}
        })
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({
          isAuthorized: false,
          authError: error
        })
      })
  }
  
  handleRegister = data => {
    
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.setState({
          isAuthorized: true,
          signUpError: {}
        })
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({
          isAuthorized: false,
          signUpError: error
        })
      });
  }

  onLogOut = () => {
    firebase.auth().signOut()
    .then(() => {
      this.setState({
        isAuthorized: false
      })
      this.props.history.push('/login')
    })
    .catch((error) => {
      console.log(error)
    });
  }

  renderLoginScreen = (props) => {
    return(<LoginScreen 
      {...props}
      isAuthorized={this.state.isAuthorized}
      submit={this.handleLogin}
      authError={this.state.authError}
      isInitialized={this.state.isInitialized}
    />)
  }

  renderRegisterScreen = (props) => {
    return(<RegisterScreen 
      {...props}
      isAuthorized={this.state.isAuthorized}
      submit={this.handleRegister}
      signUpError={this.state.signUpError}
      isInitialized={this.state.isInitialized}
    />)
  }

  trackNav = (isNavOpen) => {
    this.setState({
      ...this.state,
      isNavOpen
    })
  }
  render() {
    
    const AppClassName = this.state.isAuthorized && this.state.isNavOpen ? 'App' : 'App normal' 

    return (
      <div className={AppClassName}>
        <Navbar trackNav={this.trackNav} isAuthorized={this.state.isAuthorized} onLogOut={this.onLogOut} />
        <ProtectedRoute path='/' exact isAuthorized={this.state.isAuthorized} isInitialized={this.state.isInitialized} component={HomeScreen} />
        <Route path='/login' render={this.renderLoginScreen} />
        <Route path='/register' render={this.renderRegisterScreen} />
        <ProtectedRoute path='/pageforauthed' exact isAuthorized={this.state.isAuthorized} isInitialized={this.state.isInitialized} component={PageForAuthed} />
        <ProtectedRoute path='/table' exact isAuthorized={this.state.isAuthorized} isInitialized={this.state.isInitialized} component={Table} />
        <ProtectedRoute path='/dogs' exact isAuthorized={this.state.isAuthorized} isInitialized={this.state.isInitialized} component={DogScreen} />
        <ProtectedRoute path='/pagination' exact isAuthorized={this.state.isAuthorized} isInitialized={this.state.isInitialized} component={PaginationScreen} />
      </div>
    )
  }

}

export default withRouter(App)
