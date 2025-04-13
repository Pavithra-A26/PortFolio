import React from 'react'
import '../Styles/Nav.css'

export const Navbar = () => {
  return (
    <nav className="custom-navbar">
  <h1 className="custom-logo">Pavithra</h1>
  <ul className="custom-menu">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#certificates">Certificates</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    
  </ul>
</nav>

  )
}
