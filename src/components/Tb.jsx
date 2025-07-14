import React from 'react'

const Tb = ({name , gender , age}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body ">
            <h1 className="card-title">
                {name}
            </h1>
            <h5>{gender}</h5>
            <p>{age}</p>
        </div>
      </div>
    </div>
  )
}

export default Tb
