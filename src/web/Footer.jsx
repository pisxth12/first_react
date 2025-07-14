import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 shadow-lg mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">FighterJet™</h5>
            <p>
              Power, precision, and performance. FighterJet is dedicated to showcasing the best of aviation tech and military design.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase text-info">Explore</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Jet Models</a></li>
              <li><a href="#" className="text-white text-decoration-none">Technology</a></li>
              <li><a href="#" className="text-white text-decoration-none">Missions</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase text-success">Connect</h6>
            <p><i className="bi bi-envelope-fill me-2"></i> contact@fighterjet.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Airbase HQ, Nevada, USA</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-white"><i className="bi bi-airplane-engines"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center small mb-0">&copy; 2025 FighterJet™ — All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
