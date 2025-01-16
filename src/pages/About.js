import React from "react";
import { Link } from "react-router-dom"; 
import "./About.css"; 

const About = () => {
    return (
        <div>
            <h3>About Me</h3>
            <p className="intro">
                    I'm a passionate Software Developer with experience in Java, Spring Boot, and Microservices. Currently, I'm expanding my skills in new technologies to contribute effectively to development projects.
               </p>

            <h4>Work Experience</h4>
            <div className="experience">
                <h5>Intern - The Baap Company</h5>
                <p><em>Aug 2022 - Present</em></p>
                <ul>
                    <li>Backend: Java, Spring Boot, Microservices, Nodejs ,Fastify,Python</li>
                    <li>Frontend: React, React Native</li>
                    <li>Databases: MongoDB, MySQL,MariaDB</li>
                    <li>Blockchain: Solidity, ERC20, ERC721,Ether.js ,Web3.js</li>
                    <li>DevOps: AWS</li>
                    <li>Version control: Git</li>
                    <li>Familiar with: GitHub,GitLab,Bitbucket</li>
                </ul>
            </div>
            
            <div className="about-buttons">
                <Link to="/contact">
                    <button className="contact-btn">Contact Me</button>
                </Link>
                <Link to="/projects">
                    <button className="projects-btn">My Projects</button>
                </Link>
                <Link to="/work">
                    <button className="projects-btn">My work</button>
                </Link>
            </div>
        </div>
    );
};

export default About;
