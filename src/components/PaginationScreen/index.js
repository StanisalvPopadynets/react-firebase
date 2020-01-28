import React, { useState, useEffect } from 'react'
import DivWrapper from '../../containers/DivWrapper'
import Pagination from '../../containers/Pagination'

import './PaginationScreen.css'
import Spinner from '../../containers/Spinner'

function PaginationScreen() {
  
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchPosts =  () => {
      // setLoading(true)
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(body => {
        setPosts(body)
      })
      setLoading(false)
      // console.log(res.data)
    }

    fetchPosts()
    
  }, [])

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const indexOfLastPost = currentPage * 10
  const indexOfFirstPost = indexOfLastPost - 10
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <DivWrapper class='pagination-screen'>
      {loading 
        ? <Spinner />
        : currentPosts.map(post => {
        return <p key={post.id}>{post.title}</p>
      })}
      <Pagination currentPage={currentPage} totalPosts={posts.length} paginate={paginate} />
    </DivWrapper>
  )
}

export default PaginationScreen
