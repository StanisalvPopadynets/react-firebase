import React from 'react'
import { Link } from 'react-router-dom'

import './Links.css'

function LoggedInLinks(props) {
  return (
    <ul className="link-box">
      <li><Link to='/pageforauthed'>Page for auth</Link></li>
      <li onClick={props.onLogOut} className='logout-btn'>Log out</li>
    </ul>
  )
}

export default LoggedInLinks
