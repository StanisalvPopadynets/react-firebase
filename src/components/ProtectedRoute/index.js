import React from 'react'
import { Route, Redirect } from 'react-router'

export default function ProtectedRoute({ component: Component, ...rest}) {

  if (!rest.isInitialized) return null 

  return (
    <Route {...rest} render={props => (
      rest.isAuthorized === true 
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}
