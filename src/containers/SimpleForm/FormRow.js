import React from 'react'

function FormRow(props) {
  return (
    <div className='form-row'>
      <label className={props.class} >{props.label}</label>
      <input required={props.required} type={props.type} name={props.name} onChange={props.onChange} />
    </div>
  )
}

export default FormRow
