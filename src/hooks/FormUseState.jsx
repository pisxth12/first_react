import React, { useState } from 'react'

const FormUseState = () => {
    const [id, setID] = useState(0);
    const [name ,setName] = useState("");
    const [age , setAge] = useState("")
    const [user , setUser] = useState([{id:13 , name:"Sorn Piseth" , age:"A1"}])

    const  handleAdd = (e) =>{
      e.preventDefault();
      if(id && name && age){
        const newUser = {id , name , age};
        setUser([...user , newUser]);
        setID('');
        setName('');
        setAge('');
      }
    };
    const handleDelete = () =>{
      setUser([]);
    };

  return (

    <div className=' gap-3 font-monospace'>
        <div className="container d-flex flex-column justify-content-center  mx-auto  w-50 border border-2 p-3">
            <h1>Form</h1>
            <form action="" className="d-flex flex-column" onSubmit={handleAdd}>

                 <label htmlFor="" className='fw-bold fs-5'>Enter ID :</label>
                 <input type="text" value={id} onChange={(e) => setID(e.target.value)} name="" id="" />

                 <label htmlFor="" className='fw-bold fs-5'>Enter Name :</label>
                 <input type="text" value={name} onChange={(e)=> setName(e.target.value)} id="" />
 
                 <label htmlFor="" className='fw-bold fs-5'>Enter Age :</label>
                 <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} id="" />

                 <div className="btn-field d-flex gap-2 mt-3">
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger'>Delete</button>
                 </div>

            </form>
          
        </div>
        <div className="container">
          <table className=' '>
            <thead>
              <tr>
                <th>ID.</th>
                <th> Name</th>
                <th>Age</th>

              </tr>
            </thead>
            <tbody>
              {user.map((u, index)=>{
                return(
                <tr key={index}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
              </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>
          
    </div>
    
  )
}

export default FormUseState
