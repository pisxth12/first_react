import React, { useState } from 'react'

const Text3 = () => {
    const [id , setId] =  useState('');
    const [name , setName] = useState('')
    const [gender , setGender] = useState('')
  
    const [person , setPerson] = useState([]);

    const handleAdd = (e) =>{
        e.preventDefault();
        if(id && name && gender){
          setPerson([...person,{id , name , gender}])
          setId('');
          setName('');
          setGender('');
          }
    }

    const handleDelete =(e)=>{
     e.preventDefault();
     setPerson(person.slice(0 ,-1))
    }
    const handleEdit = (e) =>{

    }
  return (
    <div className='container text-white'>
      <div className="container text-white p-4 bg-dark rounded">
  <form onSubmit={handleAdd}>
    <div className="mb-3">
      <label className="form-label">Enter ID</label>
      <input
        type="text"
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Enter Name</label>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Gender</label>
      <input
        type="text"
        className="form-control"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
    </div>
    


    <div className="d-flex gap-3">
      <button type="submit" className="btn btn-success">Add</button>

    </div>
  </form>
</div>

      <table className="table table-bordered table-striped mt-4 text-white">
  <thead className="table-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {person.map((u, index) => (
      <tr key={index}>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.gender}</td>
        <td className='d-flex gap-2'>
          <button className='btn btn-danger' onClick={handleDelete}>Delede</button>
          <button className='btn btn-warning' onClick={handleEdit}>Edit</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  )
}

export default Text3
