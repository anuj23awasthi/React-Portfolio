import React from 'react'
import "./css/style.css"
const Navbar = () => {
  return (
    <>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><a href="index.html">Portfolio</a></h1>
         <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="./">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav> 
      </div>
    </header>
    </>
  )
}

export default Navbar