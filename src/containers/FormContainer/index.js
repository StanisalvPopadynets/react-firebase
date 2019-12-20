import React from 'react'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

import './FormContainer.css'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
})); 


export default function FormContainer(props) {
  
  const location = useLocation()
  
  let currForm
  if (location.pathname === '/login') currForm = <>Login</>
  else currForm = <>Register</>

  const classes = useStyles();
  
  return (
    <div className='form-container'>
      <div className='form-box'>
      <h2 className='form-label'>{currForm}</h2>
        <form onSubmit={props.onSubmit} className={classes.root + " myclass"} noValidate autoComplete="off">
          {props.children}
        </form>
      </div>
    </div>
  )
}
