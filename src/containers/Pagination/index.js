import React from 'react'

import './Pagination.css'
import Spinner from '../Spinner'

function Pagination(props) {

  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(props.totalPosts / 10) ; i++) {
    pageNumbers.push(i)
  }

  if(props.loading) return <Spinner />
  console.log(props)
  return (
    <ul className='pagination'>
      {pageNumbers.map(number => {
        const classForLink = props.currentPage === number ? 'pagination-link current' : 'pagination-link'
        return(
          <li key={number}>
            <button onClick={() => props.paginate(number)} href='#' className={classForLink}>{number}</button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
