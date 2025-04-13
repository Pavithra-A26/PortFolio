import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'


export const Projects = () => {
    const projects = [
        { name: "NoteKeeper App", desc: "Note app with CRUD using MERN stack", link: "#" },
        { name: "BookStore App", desc: "Bookstore app with cart and auth", link: "#" },
      ];
  return (
    <motion.section id="projects" className="section" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View Project</a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
