import React from 'react'
import '../Styles/Style.css'

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center z-50">
        <h1 className="font-bold text-xl">Pavithra</h1>
        <ul className="flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}
