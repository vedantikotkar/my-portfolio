import React from "react";
import "./Projects.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const projects = [
        {
            title: " Restaurant Website",
            description: "A static restaurant website platform built with Html & Css",
            imgSrc: "/tea.png",
            projectLink: "https://meek-pie-719017.netlify.app/",
        },
        {
            title: "Blockchain-Library Management System",
            description: "A decentralized and distributed library management system using Solidity and Ethereum smart contracts  with Ether.js and react in frontend with Web3.js",
            imgSrc: "/pic2.PNG",
            projectLink: "https://library-management-dapp3.netlify.app/",
        },
        {
            title: "Student Registration",
            description: "The Student Registration Desktop App is a Java Swing-based graphical user interface (GUI) application designed to facilitate the registration process for students.",
            imgSrc: "/snip.png",
            projectLink: "https://github.com/vedantikotkar/StudentRegistration",
          //  projectLink2:"https://github.com/vedantikotkar/StudentDetails"
        },
        {
            title: "Real-time Chat App",
            description: "A chat application using Node.js and socket.io  for real-time messaging.",
            imgSrc: "/chat5.png",
            projectLink: "https://github.com/vedantikotkar/ChatApp",
        },
        {
            title: "Notification System",
            description: "A notification system with role-based access built using Spring Boot, Keycloak, Kafka, and Redis. ",
            imgSrc: "/notify2.png",
            projectLink: "https://github.com/vedantikotkar/Notification",
        },
        {
            title: "Easy-Shirdi App",
            description: "A responsive and intuitive travel app built with React Native, designed to simplify and enhance the travel experience for visitors to Shirdi. The app provides seamless navigation.",
            imgSrc: "/easy.png",
            projectLink: "https://github.com/vedantikotkar/easyShirdiPage3",
        }
        
    ];

    const leftProjects = projects.slice(0, 3);
    const rightProjects = projects.slice(3, 6);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="projects-column">
                    {leftProjects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-actions">
                                      <a 
                                      href={project.projectLink} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="link-icon"
                                    >
                                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                   
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={project.imgSrc} alt={project.title} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-column">
                    {rightProjects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-actions">
                                <a 
                                      href={project.projectLink} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="link-icon"
                                    >
                                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                   
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={project.imgSrc} alt={project.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
