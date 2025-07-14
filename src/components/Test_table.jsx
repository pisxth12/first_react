import React from 'react'

const Test_table = ({imgs ,name , gender  , detail}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
         <img className='rounded-5 w'   src={imgs} alt="" />
            <h1 className='card-title'>{name}</h1>
            <h1 className='card-subtitle'>{gender}</h1>
            <h5 className="card-detail">{detail}</h5>
            <div className="btn-field d-flex gap-3">
                <button className='btn btn-primary'> Add Friend</button>
                <button className='btn btn-danger'>Block</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Test_table
