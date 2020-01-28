import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

import './LinkContainer.css'

function LinkContainer(props) {

  const location = useLocation().pathname

  useEffect(() => {
    // console.log(props.isNavOpen)
    if (location !== '/login' && location !== '/register') require('./LinkContainer.css')
  }, [location])

  let isActiveClass = props.isNavOpen && location !== '/login' && location !== '/register'? 'link-container active' : 'link-container'
  return (
    <div className={isActiveClass}>
      {props.children}
      <div onClick={props.onToggleClick} className='close-side'></div>
    </div>
  )
}

export default LinkContainer
