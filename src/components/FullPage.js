import React from 'react'
import Nav from './Nav'
import '../assets/css/Fullpage.css'
import About from './About'
import Service from '../components/Service'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function FullPage() {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className="about-section" id="about" >
                <About/>
            </div>
            <div className="service-container" id="service">
                <Service/>
            </div>
            <div className="intro-container" id="intro">
                <Intro/>
            </div>
            <div className="experience-container" id="experience">
                <Experience/>
            </div>
            <div className="portfolio-container" id="portfolio">
                <Portfolio/>
            </div>
            <div className="skill-container" id="skill">
                <Skill/>
            </div>
            <div className="contact-container" id="contact">
                <Contact/>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    )
}

export default FullPage
