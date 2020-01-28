import React from 'react'
import { NavLink } from 'react-router-dom'

import './Links.css'

function LoggedInLinks(props) {
  return (
    <ul className='link-box'>
      <li><NavLink className='link' exact activeClassName='active-link' to='/'><i className="fa fa-home"></i> Home</NavLink></li>
      <li><NavLink className='link' exact activeClassName='active-link' to='/pageforauthed'><i className="fa fa-lock"></i> Page for auth</NavLink></li>
      <li><NavLink className='link' exact activeClassName='active-link' to='/table'><i className="fa fa-table"></i> Table</NavLink></li>
      <li><NavLink className='link' exact activeClassName='active-link' to='/dogs'><i className="fa fa-paw" aria-hidden="true"></i> Dogs</NavLink></li>
      <li><NavLink className='link' exact activeClassName='active-link' to='/pagination'>Pagination</NavLink></li>
      <li onClick={props.onLogOut} className='logout-btn link'><i className="fa fa-sign-out"></i> Log out</li>
    </ul>
  )
}

export default LoggedInLinks
