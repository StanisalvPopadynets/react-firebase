import React, { useState } from 'react'
import Field from '../../containers/Field'
import FormContainer from '../../containers/FormContainer'
import Button from '@material-ui/core/Button'
import ErrorAlert from '../../containers/ErrorAlert'

export default function RegisterForm(props) {

  const repeatPassword = 'repeat password'

  const [data, setData] = useState({
    email: '',
    password: '',
    [repeatPassword]: '',
    localError: false
  });

  const onSubmit = (e) => {
    e.preventDefault()
    if(data.password === data[repeatPassword]) {
      props.submit(data)
      setData({
        ...data,
        localError: false
      })
    }else {
      setData({
        ...data,
        localError: true
      })
    }
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormContainer onSubmit={onSubmit} >
      <Field onChange={onChange} name="email"/> 
      <Field onChange={onChange} type="password" name="password"/> 
      <Field onChange={onChange} type="password" name="repeat password"/> 
      {data.localError  && <ErrorAlert message={'passwords doesn\'t match'} />}
      {Object.keys(props.signUpError).length !== 0 && <ErrorAlert message={props.signUpError.message} />}
      <Button type="submit" variant="contained">Submit</Button>
    </FormContainer>
  );
}
