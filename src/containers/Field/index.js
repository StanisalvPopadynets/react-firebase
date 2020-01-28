import React from 'react'

import './Field.css'

export default function Field(props) {
  return (<div className='field-box'>
  
      <label className='input'>
        <input onChange={props.onChange} placeholder=' ' type={props.type} name={props.name} />
        <span className="placeholder">{props.name}</span>
        <span className="border"></span>
      </label>
      
      {/* <br /> */}
    </div>
  )
}
