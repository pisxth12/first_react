import React, { useContext } from 'react'
import UserContact from './UseEffect'

const Component2 = () => {
    const name = useContext(UserContact);
  return (
    <div>
      <h2>This is my name : {name}</h2>
    </div>
  )
}

export default Component2
