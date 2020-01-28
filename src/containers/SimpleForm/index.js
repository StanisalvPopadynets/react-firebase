import React from 'react'

function SimpleForm(props) {
  return (
    <form className='add-form' onSubmit={props.onAdd} >
        {props.children}
        <input type='submit' className='submit-add-btn' value='Add row' />
      </form>
  )
}

export default SimpleForm
