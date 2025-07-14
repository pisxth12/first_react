import React, { useState } from 'react'

const Text = () => {
    const [number , setNumber] = useState(0);
    const increment = () =>{
        setNumber(number +1);
    };
    const decrement = () =>{
        if(number>0){
            setNumber(number -1);
        }else{
            alert('error')
            
        }
    };
  return (
    <div className='container bg-secondary p-5'>
        <h1>{number}</h1>
        
        <div className="btn-field d-flex gap-2">

           <button className='btn btn-success' onClick={increment}>Increment</button>
           <button className='btn btn-danger' onClick={decrement}>Decrement</button>

           <h1></h1>
        </div>
    </div>
  )
};

export default Text
