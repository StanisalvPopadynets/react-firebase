import React from 'react'
import { useLocation } from 'react-router'
import DivWrapper from '../DivWrapper'

import './FormContainer.css'

export default function FormContainer(props) {
  
  const location = useLocation()
  
  let currForm
  if (location.pathname === '/login') currForm = <>Login</>
  else currForm = <>Register</>
  
  return (
    <DivWrapper class='form-container'>
      <DivWrapper class='form-box'>
      <h2 className='form-label'>{currForm}</h2>
        {/* <form onSubmit={props.onSubmit} className={classes.root + " myclass"} noValidate autoComplete="off">
          {props.children}
        </form> */}
        <form onSubmit={props.onSubmit} className='input-box'>
          {props.children}  
        </form>
      </DivWrapper>
    </DivWrapper>
  )
}
