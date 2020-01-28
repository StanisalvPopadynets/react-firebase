import React, { useState, useEffect } from 'react'
import Spinner from '../../containers/Spinner'
import TableHead from './TableHead'

import './TableContainer.css'

function TableContainer(props) {

  const [screenWidth, setWidth] = useState(window.innerWidth)
  const [currEditable, setCurrEditable] = useState(0)

  useEffect(() => {
    
    const handler = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
    
  }, [])

  const doneEditing = () => {
    setCurrEditable(0)
  } 

  if(screenWidth > 568){
    return (<React.Fragment>
      <table className='swapi-table'>
        <TableHead headings={['Name', 'Diameter', 'Population', 'Rotation period']} />
        <tbody>
          {props.data.map(element => {
            let isEditable = false
            if(element.diameter === currEditable) isEditable = true
            return(
              <tr suppressContentEditableWarning={true} className={isEditable ? 'being-edited': ''} contentEditable={isEditable} key={Math.floor(Math.random() * 1000000)}>
                <td><span>{element.name}</span></td>
                <td><span>{element.diameter}</span></td>
                <td><span>{element.population}</span></td>
                <td>
                  <span>{element.rotation_period}</span>
                  <span contentEditable={false} onClick={() => props.handleDelete(element.diameter)} className='icon-btn'><i className="fa fa-trash" aria-hidden="true"></i></span>
                  {
                    currEditable !== element.diameter
                    ? <span contentEditable={false} onClick={() => setCurrEditable(element.diameter)} className='icon-btn'><i className="fa fa-pencil" aria-hidden="true"></i></span>
                    : <span contentEditable={false} onClick={() => doneEditing()} className='icon-btn'><i className="fa fa-check" aria-hidden="true"></i></span>
                  }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    {props.loading && <Spinner />}
    </React.Fragment>
    )
  }else {
    if(props.loading) return <Spinner />
    return (
      <table className='swapi-table'>
        
        <tbody>
          {props.data.map(element => {
            return(
              <tr className='tr-mobile' key={Math.floor(Math.random() * 1000000)}>
                <td><span>Name</span> <span>{element.name}</span></td>
                <td><span>Diameter</span><span>{element.diameter}</span></td>
                <td><span>Population</span><span>{element.population}</span></td>
                <td><span>Rotation period</span><span>{element.rotation_period}</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default TableContainer
