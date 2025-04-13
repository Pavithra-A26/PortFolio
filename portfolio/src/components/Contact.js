import React from 'react'
// import { motion } from "framer-motion";
import '../Styles/Contact.css'
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-option">
          <MdEmail className="contact-icon" />
          <a href="mailto:pavithraannadurai2@gmail.com" target="_blank" rel="noopener noreferrer">
            pavithraannadurai2@gmail.com
          </a>
        </div>

        <div className="contact-option">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/pavithra-a-6716b527b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      
    </section>
  )
}
