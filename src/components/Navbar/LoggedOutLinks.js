import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router' 

import './Links.css'

function LoggedOutLinks() {

  const history = useHistory(); 

  return (
    <ul className='link-box'>
      {history.location.pathname !== '/login' && <li><Link to='/login'>Login</Link></li>}
      {history.location.pathname !== '/register' && <li><Link to='/register'>Register</Link></li>}
    </ul>
  )
}

export default LoggedOutLinks
