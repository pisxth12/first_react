import React from 'react'

const Header = () => {
  return (
    <div className="container">
     <header className='d-flex justify-content-between align-content-center flex-md-row shadow-lg  bg-secondary mb-3 px-3 '>
        <div className="logo d-flex my-auto">
           <h1 className='text-uppercase fw-bold '>Sorn piseth</h1>
        </div>
        <div className="info align-content-center h-100 d-none d-md-flex  ">
            <ul className="header_nav d-flex list-unstyled gap-4  fw-bold  ">
                <li><a className='fs-4 ' href="">Home</a></li>
                <li><a className='fs-4' href="">About</a></li>
                <li><a className='fs-4' href="">Contact</a></li>
                <li><a className='fs-4' href="">Setting</a></li>
            </ul>
        </div>
        <div className="list d-md-none">
            <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='bi bi-list fs-2 '></i></button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body  bg-black d-flex w-100 mx-auto">
                <ul className="d-flex flex-column w-100 align-items-center list-unstyled gap-4  fw-bold bg-black ">
                <li><a className='fs-4 ' href="">Home</a></li>
                <li><a className='fs-4' href="">About</a></li>
                <li><a className='fs-4' href="">Contact</a></li>
                <li><a className='fs-4' href="">Setting</a></li>
            </ul>
            </div>
            </div>

        </div>
    </header>
    </div>
  )
}

export default Header
