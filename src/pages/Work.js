
import React from "react";
import "./Work.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const Work = () => {
    const workExperience = [
        {
            title: "Intern - The Baap Company",
            description: "Worked on backend development using Java, Spring Boot.",
            imgSrc: "/vedanti3.png",
            duration: "Aug 2022 - Present",
        },
        {
            title: "Web Developer Intern",
            description: "Developed responsive websites using React and optimized UI/UX designs.",
            imgSrc: "/web4.png",
            duration: "Aug 2022",
        },
    ];

    const achievements = [
    
        {
            title: "Web Developer Intern",
            description: "Developed responsive websites using Html ,Css,Bootstrap ,Javascript and optimized UI/UX designs.",
            imgSrc: "/certify.jpeg",
            date: "Jan 2022 - Jul 2022",
            link:"https://in.docworkspace.com/d/sANQnbJ3Dwf7cAcDYvsyzpxQ"
        },
        {
            title: "Java Certification",
            description: "Earned certification for sucessfully completing java course.",
            imgSrc: "/certify.jpeg",
            date: "29 Aug 2023",
            link:"https://in.docworkspace.com/d/sAMgXjNDDwf7cAY6mxKmypxQ"
        },
    ];

    const photos = [
       
        {
            imgSrc: "/img5.jpeg",
            title: "Office Teamwork",
            description: "Memorable moments with team.",
            date: "Jan 2023",
        },
        {
            imgSrc: "/img1.jpeg",
            title: "12th Science Rank",
            description: "Secured a top position in the 12th Science board exams with excellent marks in all subjects.",
            date: "2021-2022",
        },
        {
            imgSrc: "/img3.jpeg",
            title: "Honored by  Grampanchayat ",
            description: "Proud moment of being honored by village Grampanchayat for achieving an excellent rank in my 12th board exams.",
            date: "2021-2022",
        },
         {
            imgSrc: "/last.jpeg",
            // title: "Office Teamwork",
            // description: "Memorable moments working with a great team.",
            // date: "Jan 2023",
        },
        {
            imgSrc: "/img4.jpeg",
            title: "Group Efforts",
           description: "Proudly showcasing an electric lamp created through the combined efforts of our team of friends.",
            date: "Feb 2020"
        },
    ];

    return (
        <div className="work-achievements">
            <h2>My Work Experience</h2>
            <div className="work-container">
                {workExperience.map((work, index) => (
                    <div key={index} className="work-item">
                        <img src={work.imgSrc} alt={work.title} className="work-image" />
                        <div className="work-info">
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                            <span>{work.duration}</span>
                        </div>
                    </div>
                ))}
            </div>

            <h2 class="certificate">My Certifications</h2>
            <div className="achievements-container">
                {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                        <img src={achievement.imgSrc} alt={achievement.title} className="achievement-image" />
                        <div className="achievement-info">
                            <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
                            <span>{achievement.date}</span>
                            <a 
  href={achievement.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="link-icon"
>
  <FontAwesomeIcon icon={faExternalLinkAlt} />
</a>


                        </div>
                    </div>
                ))}
            </div>

            <h2 class="team"> Teamwork & Achievements</h2>
            <div className="photos-container">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                        <img src={photo.imgSrc} alt={photo.title} className="photo-image" />
                        <div className="photo-info">
                            <h3>{photo.title}</h3>
                            <p>{photo.description}</p>
                            <span>{photo.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;









