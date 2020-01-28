import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import LinkContainer from '../../containers/LinkContainer'
import DivWrapper from '../../containers/DivWrapper'

import './Navbar.css'
import './responsive.css'

export default function Navbar(props) {

  const [ isNavOpen, setIsNavOpen ] = useState(false)
  const location = useLocation().pathname

  let activeClass = isNavOpen ? 'link-box active' : 'link-box' 

  useEffect(() => {
    // setIsNavOpen(false)
  }, [location])

  const onToggleClick = () => {
    setIsNavOpen(!isNavOpen)
    props.trackNav(!isNavOpen)
  }

  return (
    <DivWrapper class='navbar'>
      {props.isAuthorized && <button id='toggle' className='toggle' onClick={onToggleClick} ></button>} 
      {!props.isAuthorized && <LoggedOutLinks />} 
      <h1 className='logo'>LOGO</h1>
      <LinkContainer onToggleClick={onToggleClick} isNavOpen={isNavOpen}>
        {props.isAuthorized && <LoggedInLinks activeClass={activeClass} onLogOut={props.onLogOut}/>}
      </LinkContainer>
    </DivWrapper>
  )
}
