import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            
            <h2>Portfolio</h2>
            <nav>
                <ul>
                    <li><Link to="/">
                    <img src="/home.png" alt="Logo" className="sidebar-logo" />
                    Home </Link></li>
                    <li><Link to="/about"> 
                    <img src="/about.png" alt="Logo" className="sidebar-logo" />
                    About</Link></li>
                    <li><Link to="/projects">
                    <img src="/project.png" alt="Logo" className="sidebar-logo" />
                    Projects</Link></li>
                    <li><Link to="/work">
                    <img src="/work.png" alt="Logo" className="sidebar-logo" />
                    Work</Link></li>
                    <li><Link to="/contact">
                    <img src="/contact.png" alt="Logo" className="sidebar-logo" />
                    Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;






