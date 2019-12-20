import React from 'react'

import './ErrorAlert.css'

export default function ErrorAlert(props) {
  return (
    <div className="error-box">
      {props.message}
    </div>
  )
}
