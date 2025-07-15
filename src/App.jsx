import React from 'react'
import { useState } from 'react'
import UserContaxt from './test/UserContaxt';
import Compo1 from './test/Compo1';
import Compo2 from './test/Compo2';

const App = () => {
  const [name, setName] = useState("Sorn Piseth");
  const [gender, setGender] = useState("male");
  const [age , setAge] = useState(21);
  return (
    
    <div>
      <UserContaxt.Provider value={{ name, gender ,age  }} >
        <Compo1/>
      

      </UserContaxt.Provider>
    </div>
  )
}

export default App
