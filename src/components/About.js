import React from 'react'
import '../assets/css/About.css'
import Typist from 'react-typist';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    return (
        <div className="about-section">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div className="about-name-title">
                <Typist cursor ={
                    {
                        hideWhenDone: true,
                        hideWhenDoneDelay: 100,
                    }
                }
                >
                I am Atik Mahbub
                </Typist>
            </div>
            <div className="about-name-desc">
                I am Atik Mahbub,Full Stack Developer with long experience in this field
            </div>

            <div className="social-link">
                <ScrollAnimation className= "linked-in" animateIn="zoomIn" >
                    <a href="https://www.linkedin.com/in/atik-mahbub-0b8428130" target="_BLANK"><LinkedInIcon style={{fontSize : "25px" , color : "#fff"}} /></a>
                </ScrollAnimation>
                <ScrollAnimation className= "linked-in" animateIn="zoomIn" delay={500}>
                    <a href="https://github.com/atikmahbub" target="_BLANK"><GitHubIcon style={{fontSize : "25px", color : "#fff"}}/></a>
                </ScrollAnimation>
                <ScrollAnimation className= "linked-in" animateIn="zoomIn" delay={500}>
                    <a href="https://twitter.com/atik_m11" target="_BLANK"><TwitterIcon style={{fontSize : "25px", color : "#fff"}}/></a>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default About
