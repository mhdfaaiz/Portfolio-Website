import React from 'react'
import './Project.css'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from '../Components/ProjectCard';
import Ecommerce from '../static/ecommerce.png';
import chatapp from '../static/chatapp.jpg';
import netflix from '../static/netflix.png';
import notes from '../static/notes.png';
import MHDS from '../static/MHDS.jpeg';
import VoiceCar from '../static/VoiceCar.jpeg';
import dv from '../static/DV.png';



function Project() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p className='subheading'>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Ecommerce}
                            isBlog={false}
                            title="E-Commerce Website of Home appliances"
                            description="Developed an e-commerce platform using Python (Django), featuring user authentication, product management, and order tracking"
                            ghLink="https://github.com/mhdfaaiz/E-Commerce_Website.git"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatapp}
                            isBlog={false}
                            title="Real-Time Chat Application"
                            description="Developed a real-time chat web application using Django Channels and WebSockets, featuring user authentication, online status tracking, and group/private chat functionalities."
                            ghLink="https://github.com/mhdfaaiz/Real-Time_Chat-App.git"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={netflix}
                            isBlog={false}
                            title="NETFLIX CLONE APP"
                            description="Built a responsive Netflix-inspired React app with auto-scrolling posters and YouTube trailer integration. Enhanced user engagement with a seamless movie exploration interface"
                            ghLink="https://github.com/mhdfaaiz/Netflix_Inspired_Clone_App.git"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={notes}
                            isBlog={false}
                            title="Notes App"
                            description="Developed a notes app with CRUD functionalities and a dynamic search feature. Improved user experience by implementing note categorization of personal, business, and important with color-coded design."
                            ghLink="https://github.com/mhdfaaiz/Notes_App-Backend.git"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={VoiceCar}
                            isBlog={false}
                            title="Voice Controlled Car"
                            description="Developed a car that responds to voice commands for movement using Arduino . This interactive setup combines voice recognition technology with basic robotics, allowing you to control the car's movements using just your voice."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MHDS}
                            isBlog={false}
                            title="Multiple human activity detection and alert mechanism"
                            description="Developed a real-time monitoring system using deep learning for anomaly detection. Built and fine-tuned models with TensorFlow, achieving accurate human activity recognition."

                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dv}
                            isBlog={false}
                            title="Real-Time Anomaly Detection in Data Streams With AI & Data Visualization"
                            description="Developed a tool that continuously monitors data streams to detect anomalies in real-time, leveraging AI-driven analytics and data visualization techniques."
                            ghLink="https://github.com/mhdfaaiz/Real-Time_Anomaly-Detection_in_Data-Streams_With_AI_and_Data-Visualization.git"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Project
