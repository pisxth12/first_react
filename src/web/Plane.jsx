import React from 'react'

const Plane = () => {
  return (
    <div className="plane ">
      <div className="sky position-relative">
        <img className='img-sky h-100 w-100 object-fit-cover' src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg" alt="" />
        <div className="b2 position-absolute top-0">
            <img className='b2-img' src="https://images.fineartamerica.com/images/artworkimages/medium/3/us-air-force-b-2-spirit-strategic-stealth-bomber-tom-hill-transparent.png" alt="" />
        </div>
      </div>
        
    </div>
  )
}

export default Plane
