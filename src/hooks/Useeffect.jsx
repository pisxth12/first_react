import React, { useEffect, useState } from 'react'
import AB from './AB';

const Useeffect = () => {
    const [num , setNum]= useState(0);

    useEffect(()=>{
        console.log("Hello world");
        
    });
    useEffect(()=>{
        console.log('This is :' +num);
        
    },[num])
    
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center h-100">
            <h1>{num}</h1>
            <button onClick={()=>setNum(num+1)}>Increment</button>
            <AB num={num}/>
      </div>
    </div>
  )
}

export default Useeffect
