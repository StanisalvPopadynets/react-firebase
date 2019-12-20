import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import Logo from './Logo'

import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Logo />
      {props.isAuthorized ? <LoggedInLinks onLogOut={props.onLogOut}/> : <LoggedOutLinks />}
    </nav>
  )
}
