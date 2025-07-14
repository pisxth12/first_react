import React, { useState } from 'react'

const Test2 = () => {
   const [id , setID] = useState('')
   const [name , setName] = useState('')
   const [person , setPerson] = useState([])

   const handleAdd = (e) =>{
    e.preventDefault();
    if(name){
        setPerson([...person, {id , name}])
        setName('')
        setID('')
    }
   };
const handleDelete = (e)=>{
    e.preventDefault();
    setPerson(person.slice(0, -1))
}
  return (
    <div className='container bg-secondary flex-column d-flex'>
     <label htmlFor="">Enter name</label>
     <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
     <label htmlFor="">Enter ID</label>
     <input value={id} onChange={(e)=>setID(e.target.value)}  type="text" />
     <btn-field className='d-flex mt-3 gap-2'>
        <button className='btn btn-success' onClick={handleAdd}>Add</button>
        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>

     </btn-field>





     <div className="output d-flex justify-content-center mt-5 py-5">
        {person.map((u , index)=>(
            <tr key={index}>
                <h1>{u.name}</h1>
                <h1>{u.name}</h1>
            </tr>
        ))}
     </div> 
    </div>
    

  )
}

export default Test2
