import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiMysql } from 'react-icons/si';


export const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava size={30} color="#f89820" /> },
    { name: "React", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={30} color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
    { name: "SQL", icon: <SiMysql size={30} color="#00758F" /> },
    { name: "HTML", icon: <FaHtml5 size={30} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" /> },
    { name: "GitHub", icon: <FaGithub size={30} color="#000000" /> },
    { name: "Postman", icon: <SiPostman size={30} color="#FF6C37" /> },
  ];
  return (
    <motion.section id="skills" className="section" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div className="skill-card" key={index} whileHover={{ scale: 1.1 }}>
            <div className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
