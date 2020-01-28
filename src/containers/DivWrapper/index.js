import React from 'react'

function DivWrapper(props) {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  )
}

export default DivWrapper
