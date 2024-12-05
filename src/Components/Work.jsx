import React from "react";
import "./Work.css";

const WorkTimeline = () => {
    const workExperience = [
        {
            company: "Sonic Technologies",
            position: "Full Stack Developer",
            location: "Mussaffah, Abudhabi",
            duration: "November 2024 - Present",
            description: "App development, Web development, Hardware , IOT, AI",
        },
        {
            company: "Freelance",
            position: "Full Stack Developer",
            location: "UAE",
            duration: "October 2024 - Present",
            description: "Static and Dynamic App and Web developement",
        },
    ];

    return (
        <div className="timeline-container">
            <h1 className="timeline-title">PROFESSIONAL EXPERIENCE</h1>
            <div className="timeline">
                {workExperience.map((experience, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">{experience.duration}</div>
                        <div className="timeline-content">
                            <h3>{experience.position}</h3>
                            <h4>{experience.company} - {experience.location}</h4>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkTimeline;
