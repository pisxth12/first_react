import React, { useState } from 'react';

const Test5 = () => {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [person, setPerson] = useState([{ id: 1, name: 'Sorn Piseth', gender: 'male' }]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAdd = (e) => {
    e.preventDefault();
    if (id && name && gender) {
      setPerson([...person, { id: Number(id), name, gender }]);
      setID('');
      setName('');
      setGender('');
    }
  };

  const handleDelete = (id) => {
    if (id != null) {
      setPerson(person.filter((item) => item.id !== id));
      setEditIndex(-1);
      setID('');
      setName('');
      setGender('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setID(person[index].id);
    setName(person[index].name);
    setGender(person[index].gender);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (id && name && gender && editIndex !== -1) {
      const updated = [...person];
      updated[editIndex] = { id: Number(id), name, gender };
      setPerson(updated);
      setEditIndex(-1);
      setID('');
      setName('');
      setGender('');
    }
  };

  return (
    <div className='container'>
      <form className='d-flex flex-column gap-2 p-5 rounded-3'>
        <center><h1 className='mb-3'>Input Your Information</h1></center>

        <label htmlFor="id">Enter ID :</label>
        <input value={id} onChange={(e) => setID(e.target.value)} type="text" />

        <label htmlFor="name">Enter Name :</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />

        <label htmlFor="gender">Enter Gender :</label>
        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" />

        <div className="btn-field mt-4">
          {editIndex === -1 ? (
            <button className='btn btn-success' onClick={handleAdd}>ADD</button>
          ) : (
            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          )}
        </div>
      </form>

      <table className='display w-100 mt-5 border border-2'>
        <thead className='w-100 bg-primary text-center'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {person.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td className='d-flex justify-content-center gap-1'>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                <button className='btn btn-warning' onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test5;
