import React from "react";
import './Other.css'
import { Col, Row } from "react-bootstrap";

function Other() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tool-icons">
                <h3>Communication Skills</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <h3>Problem Solving Skills</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <h3>Teamwork Skills</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <h3>Adaptability Skills</h3>
            </Col>
            <Col xs={4} md={2} className="tool-icons">
                <h3>Multi Tasking Skills</h3>
            </Col>
        </Row>
    )
}

export default Other
