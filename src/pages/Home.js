import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
    const navigate = useNavigate();


    const handleReadMore = () => {
        navigate("/about"); 
    };

    const handleViewResume = () => {
        window.open("/Myresume.pdf", "_blank"); 
    };

    return (
        <div className="home-container">
            <div className="left-side">
                <img
                    src="/vedanti2.jpeg" 
                    alt="Vedanti"
                    className="profile-image"
                />
            </div>
            <div className="right-side">
                <h1>Hello, I'm Vedanti...</h1>
                <p>
                    Welcome to my portfolio website! I’m a dedicated developer who enjoys turning ideas into reality.  
                    With a passion for exploring the latest in technology, I’m always eager to learn, grow, and create innovative solutions.  
                    Dive into my work, projects, and experiences to discover my journey!
                </p>

                <div className="buttons">
                    <button className="read-more" onClick={handleReadMore}>
                        Read More
                    </button>
                    <button className="view-resume" onClick={handleViewResume}>
                        View Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
