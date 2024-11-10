import React from "react";
import './Tools.css'
import { Col, Row } from "react-bootstrap";
import {
    SiOverleaf,
    SiMicrosoftpowerpoint,
    SiMicrosoftword,
    SiGithub,
    SiCanva,
} from "react-icons/si";

function Toolstack() {
    return (

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tool-icons">
                <SiGithub />
                <h3>GitHub</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <SiCanva />
                <h3>Canva</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <SiMicrosoftpowerpoint />
                <h3>Power Point</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <SiMicrosoftword />
                <h3>Word</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <SiOverleaf />
                <h3>Overleaf</h3>
            </Col>
        </Row>
    );
}

export default Toolstack;
