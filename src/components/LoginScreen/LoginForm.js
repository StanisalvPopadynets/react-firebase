import React, { useState } from 'react'
import Field from '../../containers/Field'
import Button from '@material-ui/core/Button'
import FormContainer from '../../containers/FormContainer'
import ErrorAlert from '../../containers/ErrorAlert'

import './LoginForm.css';

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
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <Field onChange={onChange} name="email"/> 
      <Field onChange={onChange} type="password" name="password"/> 
      {Object.keys(props.authError).length !== 0 && <ErrorAlert message={props.authError.message} />}
      <Button type="submit" variant="contained">Submit</Button>
    </FormContainer>
  );
}

export default LoginForm