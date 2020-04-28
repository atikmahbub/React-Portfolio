import React from 'react'
import '../assets/css/intro.css'
import picture from '../assets/Images/pic.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Intro() {
    return (
        <div>
            <div className="intro-title">
                <ScrollAnimation animateIn="bounce" animateOnce={true}>
                About Me
                </ScrollAnimation>
                <hr/>
            </div>
            <div className="intro-content">
                <div className= "intro-image">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <img src={picture}/>
                </ScrollAnimation>
                </div>
                <div className="intro-desc">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <h2>Hi There</h2>
                    <p>
                        <em>
                    "From my childhood, I've had a passion for technologies.
                    After higher school certificate, I got an opportunity to admit in Computer Science & Engineering what I was looking for.
                    I completed graduation in Computer Science & Engineering from East West University in early 2019.
                    As a Computer Science student, I am always keen to learn new technologies, solving complex problems, design, etc.
                    </em>
                    </p>
                    <p>
                    <em>
                    In my leisure time, I love to play guitar, watch videos on youtube, play video games and travel whenever I can.
                    </em>
                    </p>
                    
                    <p>
                        <em>
                        I always love to meet new people and learn new things.Feel free to contact me"
                        </em>
                    </p>
                    {/* <div className="intro-lower">
                        <div className="intro-lower-content">
                            <div>Name</div>
                            <div>Atik Mahbub</div>
                        </div>
                        <div className="intro-lower-content">
                            <div>Email</div>
                            <div>atikmahbub100@gmail.com</div>
                        </div>
                    </div> */}
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Intro
