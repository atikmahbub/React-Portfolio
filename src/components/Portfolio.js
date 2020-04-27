import React from 'react'
import '../assets/css/portfolio.css'
import Paper from '@material-ui/core/Paper';
import covid from '../assets/Images/covid.png'
import blood from '../assets/Images/blood.png'
import data from '../assets/Images/data.png'
import voice from '../assets/Images/voice.jpeg'
import retina from '../assets/Images/retina.png'
import blog from '../assets/Images/blog.png'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ScrollAnimation from 'react-animate-on-scroll';

function Portfolio() {
    return (
        <div className="portfolio-section">
            <div className="portfolio-title">
            <ScrollAnimation animateIn="bounce" animateOnce={true}>
                My Portfolio
            </ScrollAnimation>
                <hr/>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="portfolio-content">
                <div className="portfolio-card-container">
                    <Paper elevation={2} className="portfolio-card">
                        <img src ={covid} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Covid-19 Dashboard</div>
                        <div className="portfolio-card-desc">A real time covid 19 update application with some great feature's</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button">See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={blood} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Blood Donor Network</div>
                        <div className="portfolio-card-desc">Professional Blood donating web application with post, comment & notifications feature</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button">See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={data} width="100%"  height ="280px" className="portfolio-image"/>
                        <div className="portfolio-card-header">Data Compression App</div>
                        <div className="portfolio-card-desc">Improved Piecewise Constant Approximation Method on Data Streams</div>
                        <div className="portfolio-card-button-container">
                            <div className="portfolio-card-button">See Details </div>
                            <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                        </div>
                    </Paper>
                </div>

                <div className="portfolio-card-container">
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={voice} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Voice Assistant</div>
                    <div className="portfolio-card-desc">A windows application that can perform tasks for an individual task via voice command</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button">See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={blog} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Full Fetaured Blog App</div>
                    <div className="portfolio-card-desc">Django Blog app with multiple type user role & permissions</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button">See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                    <Paper elevation={2} className="portfolio-card">
                    <img src ={retina} width="100%"  height ="280px" className="portfolio-image"/>
                    <div className="portfolio-card-header">Smart Retina</div>
                    <div className="portfolio-card-desc">Smart Retina is a screening software, which helps for detecting eye diseases.</div>
                    <div className="portfolio-card-button-container">
                        <div className="portfolio-card-button">See Details </div>
                        <div className="portfolio-card-button-icon"><ArrowRightIcon /></div>
                    </div>
                    </Paper>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Portfolio
