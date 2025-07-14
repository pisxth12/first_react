import React from 'react'

const Card = () => {
  return (
    <div className='container d-flex flex-wrap gap-2'>
       
        
         <div className="card">
            <div className="card-body">
                <div className="card-img-top d-flex justify-content-between">
                    <div className="left  bg-warning rounded-2 p-1">New</div>
                    <div className="right"><i class="bi bi-x fs-5 btn-danger btn "></i></div>
                </div>
                <div className="card-img"> 
                    <img className="w-50" src="https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Transparent-Image.png" alt="" />
                    </div>
                <h1 className="card-title d-flex justify-content-between w-100 mt-5">
                    <h1>Nike</h1>
                    <div className="price">$100</div>
                </h1>
                <div className="detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, soluta.
                </div>
                <div className="rating d-flex justify-content-between w-100 mt-4 fw-bold">
                    <div className="rate fs-5">
                        rate
                    </div>
                    <div className="star d-flex gap-1">
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-half'></i>
                    </div>
                </div>
                <div className="colors w-100 d-flex justify-content-between mt-2">
                    <div className="color-detail">
                        Color
                    </div>
                    <div className="color-choose d-flex gap-1">
                    <span className='color '></span>
                    <span className='color '></span>
                    <span className='color '></span>
                    </div>
                </div>
                <div className="button mt-5">
                    <button className="btn btn-success">
                        Buy Now
                    </button>
                </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Card
