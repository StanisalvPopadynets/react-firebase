import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Field(props) {
  return (
    <React.Fragment>
      <TextField onChange={props.onChange} type={props.type} name={props.name} label={props.name} />
      <br />
    </React.Fragment>
  )
}
