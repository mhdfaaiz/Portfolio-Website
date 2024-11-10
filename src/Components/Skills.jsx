import React from "react";
import './Skills.css'
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiPython,
    DiGit,
    DiJava,
    DiBootstrap,
    DiCss3,
    DiDjango,
    DiHtml5,
    DiMysql,

} from "react-icons/di";
import {
    SiPostgresql,
    SiDotnet
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa";

function Techstack() {
    return (

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <h3>Python</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDjango />
                <h3>Django</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <h3>React</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <h3>JavaScript</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
                <h3>PostgreSQL</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
                <h3>MySQL</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
                <h3>HTML</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
                <h3>CSS</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
                <h3>Bootstrap</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <h3>Git</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaCuttlefish />
                <h3>C Programming</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
                <h3>Java</h3>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDotnet />
                <h3>Dot Net</h3>
            </Col>
        </Row>
    );
}

export default Techstack;
