import React, { useEffect } from 'react'
import './AboutPage.css'
import Techstack from '../Components/Skills';
import Toolstack from '../Components/Tools';
import Other from '../Components/Other';
import { Container } from 'react-bootstrap';
import Education from '../Components/Education'
import 'animate.css/animate.min.css';
import Interest from '../Components/Interest'
import Description from '../Components/Description'
import Work from '../Components/Work'
import ReactGA from 'react-ga4';

function AboutPage() {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, []);

    return (
        <Container fluid className="about">
            <Description />
            <Interest />
            <Container>
                <Work />
            </Container>
            <h1 className='head' style={{ margin: '15px' }}>MY EDUCATION</h1>
            <Container>
                <Education />
                <h1 className='head' style={{ textAlign: 'center' }}>PROGRAMMING SKILLS</h1>
                <Techstack />
                <h1 className='head' style={{ textAlign: 'center' }}>TOOLS & TECHNOLOGIES</h1>
                <Toolstack />
                <h1 className='head' style={{ textAlign: 'center' }}>OTHER SKILLS</h1>
                <Other />
            </Container>
            <div className='cv'>
                <h2 className='cvhead'>To Download My CV</h2>
                <button className="download-cv-button">
                    <a href="/CV.pdf" download style={{ textDecoration: 'none', color: 'black' }}>
                        <h4 style={{ marginRight: 'auto' }}> Download CV</h4>
                    </a>
                </button>
            </div>
        </Container>
    )
}

export default AboutPage
