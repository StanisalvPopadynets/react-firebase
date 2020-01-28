import React, { useState, useEffect } from 'react'
import TableContainer from "../../containers/TableContainer"
import DivWrapper from '../../containers/DivWrapper'
import SimpleForm from '../../containers/SimpleForm'
import Pagination from '../../containers/Pagination'
import FormRow from '../../containers/SimpleForm/FormRow'

import './TableScreen.css'

function TableScreen() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [addData, setAddData] = useState({})
  const [showAddForm, setShowAddForm] = useState(false)
  const [nextLink, setNextLink] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    
    // if(!localStorage.getItem('swapi-data')) {

      fetch('https://swapi.co/api/planets/').then(response => response.json()).then(body => {
        console.log('that\'s body', body)
        setData(body.results)
        setNextLink(body.next)
        setTotalPosts(body.count)
        setLoading(false)
        // localStorage.setItem('swapi-data', JSON.stringify(body.results))
        // console.log('setting data to localStorage')
      })
    // }else {
    //   setData(JSON.parse(localStorage.getItem('swapi-data')))
    //   setLoading(false)
    //   console.log('getting data from localStorage')
    // }

  }, [])

  const handleDelete = id => {
    setData(data.filter(element => {
      return element.diameter !== id
    }))
  }

  const onFieldChange = e => {
    setAddData({
      ...addData,
      [e.target.name]: e.target.value
    })
  }

  const onAdd = e => {
    e.preventDefault()
    console.log(addData)
    Object.keys(addData).length === 4 && 
    setData([
      addData,
      ...data
    ])
    setShowAddForm(false)
  }

  const handleChangePage = pageNumber => {
    if(currentPage === pageNumber)  return
    const link = pageNumber ? nextLink.replace(/\d/g, pageNumber) : nextLink

    fetch(link).then(response => response.json()).then(body => {
      setData(body.results)
      setNextLink(body.next || body.previous)
      setCurrentPage(pageNumber)
    })
  }

  return (
    <DivWrapper class='table-screen'>
      <button onClick={() => setShowAddForm(!showAddForm)} className='add-row-btn'><i className="fa fa-plus-square"></i></button>
      {showAddForm && 
        <SimpleForm onAdd={onAdd} onFieldChange={onFieldChange} >
          <FormRow required={true} label={'Name:'} class='add-label' type='text' name='name' onChange={onFieldChange} />
          <FormRow label={'Dimeter:'} class='add-label' type='text' name='diameter' onChange={onFieldChange} />
          <FormRow label={'Population:'} class='add-label' type='text' name='population' onChange={onFieldChange} />
          <FormRow label={'Rotation period:'} class='add-label' type='text' name='rotation_period' onChange={onFieldChange} />
        </SimpleForm>}
      <TableContainer handleDelete={handleDelete} loading={loading} data={data} />
      <Pagination paginate={handleChangePage} totalPosts={totalPosts} currentPage={currentPage} />
    </DivWrapper>
  )
}

export default TableScreen
