import React from 'react'
import { motion } from "framer-motion";
import '../Styles/Style.css'


export const Contact = () => {
  return (
    <motion.section id="contact" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2>Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </motion.section>
  )
}
