import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'


export const Skills = () => {
    const skills = ["React", "Angular", "Node.js", "MongoDB", "SQL", "C#", ".NET", "HTML", "CSS", "JavaScript"];
  return (
    <motion.section id="skills" className="section" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div className="skill-card" key={index} whileHover={{ scale: 1.1 }}>{skill}</motion.div>
        ))}
      </div>
    </motion.section>
  )
}
