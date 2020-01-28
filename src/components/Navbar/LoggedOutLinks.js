import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router' 

import './Links.css'

function LoggedOutLinks() {

  const history = useHistory(); 

  return (
    <ul className='link-box-out'>
      {history.location.pathname !== '/login' && <li><NavLink className='out-link' to='/login'>Login</NavLink></li>}
      {history.location.pathname !== '/register' && <li><NavLink className='out-link' to='/register'>Register</NavLink></li>}
    </ul>
  )
}

export default LoggedOutLinks
