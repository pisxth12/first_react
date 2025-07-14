import React, { useState } from "react";

const Test4 = () => {
  const [id, setID] = useState('');
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [person , setPerson] = useState([]);
  const [editIndex , setEditIndex] = useState(-1);


  const handleAdd =(e)=>{
    e.preventDefault();
    if(id && name && gender){
      setPerson([...person ,{id , name , gender}])
      setID('');
      setName('');
      setGender('');
    }
  };
  const handleDelete=(id)=>{
    if(id != null){
      setPerson(person.filter((e)=> e.id !== id));
      if(editIndex !== -1 && person[editIndex].id ===id){
        setEditIndex(-1);
        setID('');
        setName('');
        setGender('');
      }
    }
    
  };
  const handleEdit =(index)=>{
    setEditIndex(index);
    setID(person[index].id);
    setName(person[index].name);
    setGender(person[index].gender);
    
  };
  const handleUpdate =(e) =>{
    e.preventDefault();
    if(id && name && gender && editIndex !== -1){
      const updatedPerson = [...person];
      updatedPerson[editIndex]= {id , name ,gender};
      setPerson(updatedPerson);
       setID('');
      setName('');
      setGender('');
      setEditIndex(-1);
    }
  }
  
  return (
    <div>
      <div className="container">
        <form action="" className="border border-2 border-black rounded-2 d-flex flex-column p-4 w-50 mx-auto">
          <label className="fw-bolder my-1" htmlFor="">Enter ID</label>
          <input className="rounded-1" value={id} type="text" onChange={(e)=>setID(e.target.value)} />

          <label className="fw-bolder my-1" htmlFor="">Enter Name</label>
          <input className="rounded-1" value={name} type="text" onChange={(e)=>setName(e.target.value)} />

          <label className="fw-bolder my-1" htmlFor="">Enter Gender</label>
          <input className="rounded-1" value={gender} type="text" onChange={(e)=>setGender(e.target.value)} />

         <div className="btn-field mt-3">
          {editIndex === -1 ? (
            <button className="btn btn-success" onClick={handleAdd}>Add</button>
          ):(
             <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          )}
          
         </div>
        </form>
      </div>
      
     <div className="container mt-5">
        <table className="table table-bordered w-50 mx-auto text-center rounded-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {person.map((item, index)=>(
              <tr className="fw-bold fs-1"> 
                <td>{item['id']}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td className="d-flex gap-1">
                  <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                  <button className="btn btn-warning" onClick={()=>handleEdit(index)}>Edit</button>

                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test4;
