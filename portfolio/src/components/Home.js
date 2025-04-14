import React from 'react';
import '../Styles/Home.css';
import { motion } from "framer-motion";
import profileImg from '../Assets/profile1.jpg'; // Replace with your actual image path
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../Assets/Resume-Pavi.pdf'

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="container">
        {/* Image with animation */}
        <motion.div
          className="profile-pic"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImg} alt="Pavithra" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">Hello, I'm</p>
          <h1 className="name">Pavithra</h1>
          <h2 className="role">Software Developer</h2>

          <div className="buttons">
            <a href={resume} className="btn btn-outline" download>
              Download CV
            </a>
            <a href="#contact" className="btn btn-dark">
              Contact Info
            </a>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pavithra-a-6716b527b/" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Pavithra-A26" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
