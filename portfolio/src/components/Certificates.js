import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'
import intern from '../Assets/intern.jpg'
import agile from '../Assets/agile.jpg'
import docker from '../Assets/docker.jpg'
import genai from '../Assets/genai.jpg'


export const Certificates = () => {
    const certs = [
        { name: "Full Stack Internship", image: intern},
        { name: "Agile Methodology", image: agile },
      ];
  return (
    <motion.section id="certificates" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Certificates</h2>
      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <img src={cert.image} alt={cert.name} />
            <p>{cert.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
