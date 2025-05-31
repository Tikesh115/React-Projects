import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
    </div>
  )
}

export default Person