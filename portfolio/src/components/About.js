import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'


export const About = () => {
  return (
    <motion.section id="about" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>About Me</h2>
        <p>I am Pavithra, an energetic developer skilled in React, Angular, MERN stack, and .NET. I enjoy building applications that solve real-world problems.</p>
    </motion.section>
  )
}
