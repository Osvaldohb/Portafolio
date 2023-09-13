import React from 'react'
import './Nav_comp.css'

const nav_comp = () => {
  return (
    <div className='w-100'>
    <nav className="navbar navbar-expand-lg  navbar-dark">
    <div className="container-fluid  ">
      <a className="navbar-brand" href="#"><h2>OsvaldoSJ</h2></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

    </div>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#"><h4>Home</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about"><h4>About</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Skills"><h4>Skills</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact"><h4>Contact</h4></a>
      </li>
    </ul>
  </div>
  </nav>
    </div>
  )
}

export default nav_comp