import React, { useContext } from 'react'
import UserContaxt from './UserContaxt'

const Compo1 = () => {
    const { name, gender , age } = useContext(UserContaxt);
  return (
    <div>
        <h1>My name is : {name}</h1>
        <h1>Gender : {gender}</h1>
        <h1>Age : {age}</h1>
      
    </div>
  )
}

export default Compo1
