import React from "react";
import Typewriter from "typewriter-effect";
import './Role.css'

function Type() {
    return (
        <div className="role">
            <Typewriter
                options={{
                    strings: [
                        "Software Engineer",
                        "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}

export default Type;