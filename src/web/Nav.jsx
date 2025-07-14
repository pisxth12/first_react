import React from 'react'

const Nav = () => {
  return (
    <nav className='container'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
        <img className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/960px-F-35A_flight_%28cropped%29.jpg" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img className='' src="https://irp.cdn-website.com/e346530e/dms3rep/multi/iStock-1269357962-4004538f.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='' src="https://www.slashgear.com/img/gallery/12-best-fighter-jets-in-the-world-in-2023/l-intro-1738948456.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </nav>
  )
}

export default Nav
