import React from 'react'
import './HomePage.css'
import newpic from '../static/newww.png'
import Role from '../Components/Role'

function HomePage() {
    return (
        <div className='homepage'>
            <div className='first'>
                <h2 className='hi'>Hi ,I am</h2>
                <h1 className='name'>Muhammed Fayis P</h1>
                <Role />
                <p className='desc'>An innovative software engineer with expertise in full-stack development. Experienced in designing and building dynamic web and mobile applications with a strong focus on both backend and frontend technologies. Hardworking, Motivated, adaptable and Interested in the field of coding.</p>
            </div>
            <div className='second'>
                <img className='pic' src={newpic} alt='Loading'></img>
            </div>
        </div>
    )
}

export default HomePage
