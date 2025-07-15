import React, { useContext } from 'react'
import UserContaxt from './UserContaxt'

const Compo2 = () => {
    const { name, gender } = useContext(UserContaxt);
  return (
    <div>
      <h1>Gender : {gender}</h1>
    </div>
  )
}

export default Compo2
