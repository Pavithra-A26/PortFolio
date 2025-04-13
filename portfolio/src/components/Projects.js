import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Project.css'
import bookstore from '../Assets/bookstore.png'
import notekeeper from '../Assets/notekeepers.png'
import calc from '../Assets/calcu.png'


export const Projects = () => {
  const projects = [
    {
      title: "TechTome",
      image: bookstore,
      github: "https://github.com/Pavithra-A26/BookStore-MERN",
      demo: "https://tiny-muffin-32e78a.netlify.app/",
    },
    {
      title: "Calculator",
      image: calc,
      github: "https://github.com/Pavithra-A26/React-Projects/tree/main/calculator",
      demo: "https://golden-kringle-002ecf.netlify.app/",
    },
    {
      title: "Note Keeper",
      image: notekeeper,
      github: "https://github.com/Pavithra-A26/MERN-NoteKeeper",
      demo: "https://guileless-fudge-f4d524.netlify.app/",
    },
  ];
  
  return (
    <motion.section
    id="projects"
    className="py-16 px-6 bg-white text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h3 className="text-lg text-gray-600 mb-2">Browse My Recent</h3>
    <h2 className="text-4xl font-bold mb-10">Projects</h2>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl w-full mb-4"
          />
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Github
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
  )
}
