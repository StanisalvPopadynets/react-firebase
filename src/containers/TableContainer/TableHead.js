import React from 'react'

function TableHead(props) {
  return (
    <thead>
      <tr>
        {
          props.headings.map(element => {
            return (<th key={element}>
              {element}
            </th>)
          })
        }
      </tr>
    </thead>
  )
}

export default TableHead
