import React, { useState, useEffect } from 'react'
import Spinner from '../../containers/Spinner'

import './DogScreen.css'
import DivWrapper from '../../containers/DivWrapper'

function DogScreen() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/hound/english/images').then(response => response.json()).then(body => {
      setData(body.message.filter((elem, i) => i < 50))
      setLoading(false)
    })
  } , [])


  if(loading) return <Spinner />

  return (
    <DivWrapper class='grid-wrapper'>
      {
        data.map(elem => {
          let key = elem.match(/\d/g);
          key = key.join("");
          return(
            <div className='img-wrapper' key={key}>
              <img alt='img' width='200px' height='200px' src={elem}/>
              <p>Lorem ipsum</p>
            </div>
          )
        })
      }
    </DivWrapper>
  )
}

export default DogScreen
