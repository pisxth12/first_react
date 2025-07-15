import React, { useContext } from 'react'
import UserContact from './UseEffect'

const Component1 = () => {
    const name = useContext(UserContact);
  return (

    <div>
      <h1>My Name is : {name}</h1>
    </div>
  )
}

export default Component1
