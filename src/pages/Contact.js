import React from "react";
import "./Contact.css"; 
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaSkype, FaMicrosoft } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-card">
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                        <h4>Location</h4>
                        <p>Sangamner, Maharashtra, 422605, India</p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div>
                        <h4>Phone</h4>
                        <p><a href="tel:+919359339024">+91 93593 39024</a></p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:vedantikotkar45@gmail.com">vedantikotkar45@gmail.com</a></p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaSkype className="contact-icon" />
                    <div>
                        <h4>Skype</h4>
                        <p>vedanti kotkar</p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <div>
                        <h4>LinkedIn</h4>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/vedanti-kotkar-167233261/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin.com/in/vedanti-kotkar
                            </a>
                        </p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <div>
                        <h4>GitHub</h4>
                        <p>
                            <a
                                href="https://github.com/vedantikotkar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/vedantikotkar
                            </a>
                        </p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaMicrosoft className="contact-icon" />
                    <div>
                        <h4>Microsoft Teams</h4>
                        <p>Vedanti kotkar</p>
                        <p>vedantikotkar45@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
