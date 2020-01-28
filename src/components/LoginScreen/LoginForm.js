import React, { useState } from 'react'
import Field from '../../containers/Field'
import FormContainer from '../../containers/FormContainer'
import Button from '../../containers/Button'
import ErrorAlert from '../../containers/ErrorAlert'

import './LoginForm.css'

function LoginForm(props) {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onSubmit = (e) => {
    e.preventDefault()
    props.submit(data)
  }

  const onChange = (e) => {
    console.log('change')
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <Field onChange={onChange} type="email" name="email"/> 
      <Field onChange={onChange} type="password" name="password"/> 
      {Object.keys(props.authError).length !== 0 && <ErrorAlert message={props.authError.message} />}
      <Button type='submit' class='submit-button'>Submit</Button>
    </FormContainer>
  )
}

export default LoginForm