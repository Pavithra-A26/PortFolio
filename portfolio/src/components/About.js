import React from 'react'
// import { motion } from "framer-motion";
import '../Styles/About.css'
import profile from '../Assets/profile.jpg';
import { FaAward, FaUserGraduate } from 'react-icons/fa';


export const About = () => {
  return (
    <section className="about-section" id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-content">
          <div className="cards">
            <div className="card">
              <FaAward className="icon" />
              <h4>Experience</h4>
              <p>Intern<br />Full Stack Development</p>
            </div>

            <div className="card">
              <FaUserGraduate className="icon" />
              <h4>Education</h4>
              <p>B.Tech Information Technology</p>
            </div>
          </div>

          <p className="about-text">
          I am an energetic and goal-oriented individual with a strong passion for continuous learning and growth. 
          I have developed skills that align well with the needs of a rapidly growing company like yours. 
          I am eager to contribute to your organization’s success and would appreciate the opportunity to 
          demonstrate how my abilities can support and enhance your company’s growth.
          </p>
        </div>
      </div>
    </section>
  )
}
