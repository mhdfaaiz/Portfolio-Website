/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { DiDjango } from "react-icons/di";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Description.css'

const About = () => {
    const aboutArray = 'About Me'.split('')

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="des about-page home-about-description">
                <div className="text-zone">

                    <h1 style={{ fontSize: "2.6em" }}>
                        LET ME <span className="purple"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body">
                        I am a passionate and driven <b className="purple">software engineer</b>, holding a <b className="purple">first-class honors in Engineering in Information Technology</b>, with a strong commitment to creating high-performance, user-focused applications across <b className="purple">both web and mobile platforms.</b>
                        <br />
                        <br />As a <b className="purple">full-stack developer</b>,
                        <i>
                            I bring expertise in <b className="purple">backend technologies (Python, Django, PostgreSQL)</b> alongside a robust <b className="purple">front-end skill set (React JS, React Native, JavaScript)</b>, ensuring end-to-end functionality and seamless user experiences.
                        </i>
                        <br />
                        <br />
                        Currently, my work revolves around <b className="purple">designing and developing</b> scalable, responsive applications that address real-world challenges and streamline business processes.  &nbsp;
                        <i>
                            I am also highly motivated by the potential of <b className="purple">machine learning and artificial intelligence</b> to revolutionize technology, and I am eager to expand my skills in{" "}
                            <b className="purple">AI</b> in the near future to create data-driven, intelligent solutions.
                        </i>
                        <br />
                        <br />
                        Known for my <b className="purple">adaptability, collaborative spirit, and problem-solving abilities</b>, I thrive in dynamic, team-oriented environments where I can leverage technology to make a positive impact.<br />
                        <i>
                            I am committed to continuous learning and delivering results
                        </i>
                        &nbsp; that stand out even
                        <i>
                            <b className="purple"> in challenging situations.</b>
                        </i>
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About