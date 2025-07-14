import React, { useState } from 'react'

const Test = () => {
    const [name , setName] = useState('');
    const [gender , setGender] = useState('');
    const [person , setPerson] = useState([]);

    const handleAdd = () =>{
        if(name && gender){
            setPerson([...person, {name ,gender}]);
            setName('');
            setGender('');
        }
    };

    const handleDelete = () =>{
        setPerson(person.slice(0,-1))
    }


  return (
    <div className='container flex gap-4'>
        <table className='border border-2 d-flex flex-column p-2 '>
            <label htmlFor="">Enter Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">Enter Gender</label>
            <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} />

            <div className="btn-faeld mt-3 d-flex gap-3">
                <button className='btn btn-success' onClick={handleAdd}>ADD</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </table>

      <table className='border border-2 mt-5 p-5'>
        <thead>
            <tr className='d-flex justify-content-evenly bg-secondary'>
                <td>Name</td>
                <td>Gender</td>
            </tr>
        </thead>
         <tbody>
          {person.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
          {person.length === 0 && (
            <tr>
              <td colSpan="2" className='text-center text-muted'>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Test
