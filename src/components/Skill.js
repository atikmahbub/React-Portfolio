import React from 'react'
import '../assets/css/skill.css'
import ScrollAnimation from 'react-animate-on-scroll';

function Skill() {
    return (
        <div className="skill-section">
            <div className="skill-title">
            <ScrollAnimation animateIn="bounce" animateOnce={true}>
                <div>I'm Expert On..</div>
                <div>Let's Work Together</div>
            </ScrollAnimation>
                <hr/>
            </div>
            <div className="skill-content-section">
                <div className="skill-content">
                    <div className="skill-content-header">
                    <ScrollAnimation animateIn="bounce" animateOnce={true}>
                        Programming Language's
                        </ScrollAnimation>
                    </div>
                    <div className="skill-content-item">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                        <div className="skill-item-card">
                            Python
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={500}>
                        <div className="skill-item-card">
                            C++
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1000}>
                        <div className="skill-item-card">
                            C
                        </div>
                    </ScrollAnimation>
                    </div>
                </div>
                <div className="skill-content">
                 
                    <div className="skill-content-header">
                    <ScrollAnimation animateIn="bounce" animateOnce={true}>
                        Web (Front-End)
                    </ScrollAnimation>
                    </div>
                    <div className="skill-content-item">
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1500}>
                            <div className="skill-item-card">
                                HTML5
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1000}>
                            <div className="skill-item-card">
                                CSS3
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
                            <div className="skill-item-card">
                                Bootstrap4
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <div className="skill-item-card">
                            Javascript
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={500}>
                        <div className="skill-item-card">
                            ReactJS
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1000}>
                        <div className="skill-item-card">
                            Redux
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1500}>
                        <div className="skill-item-card">
                            Rest Api
                        </div>
                        </ScrollAnimation>                   
                    </div>
                </div>
                <div className="skill-content">
                    <div className="skill-content-header">
                    <ScrollAnimation animateIn="bounce" animateOnce={true}>
                        Web (Back-End)
                    </ScrollAnimation>
                    </div>
                    <div className="skill-content-item">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                        <div className="skill-item-card">
                            Django
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={500}>
                        <div className="skill-item-card">
                            Django Rest Framework
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
                        <div className="skill-item-card">
                            PHP
                        </div>
                    </ScrollAnimation>      
                    </div>
                </div>
                <div className="skill-content">
                    <div className="skill-content-header">
                    <ScrollAnimation animateIn="bounce" animateOnce={true}>
                        Cloud Service
                    </ScrollAnimation>
                    </div>
                    <div className="skill-content-item">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                        <div className="skill-item-card">
                            Microsoft Azure
                        </div>
                    </ScrollAnimation>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
