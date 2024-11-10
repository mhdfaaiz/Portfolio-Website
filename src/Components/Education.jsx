import React from 'react'
import './Education.css'
import Card from './Card'
import Cardmim from './Cardmim'

function Education() {
    return (
        <div>
            <div className="timeline">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">
                        <i className="lni-cake"></i>

                    </div>
                    <div className="timeline__event__date">
                        <span>GPA : 6.98</span>
                        <span>2020 - 2024</span>
                    </div>
                    <div className="timeline__event__content" style={{ height: '450px', width: 'fit-content', justifyContent: 'center' }}>
                        <div className="timeline__event__title">
                            <h1>Bachelor of Technology</h1>Information Technology
                        </div>
                        <div className="timeline__event__description">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-burger"></i>

                    </div>
                    <div className="timeline__event__date">
                        <span>GPA : 7</span>
                        <span>2018 - 2020</span>
                    </div>
                    <div className="timeline__event__content " style={{ height: '450px', width: 'fit-content', justifyContent: 'center' }}>
                        <div className="timeline__event__title">
                            <h1>Higher Secondary</h1>Computer Science
                        </div>
                        <div className="timeline__event__description">
                            <Cardmim />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Education
