import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'

function Logo() {
  return (
    <h1 className='logo'>
      <Link to='/'>
        Logo
      </Link>
    </h1>
  )
}

export default Logo
