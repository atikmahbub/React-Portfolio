import React from 'react'
import '../assets/css/intro.css'
import picture from '../assets/Images/pic.png'

function Intro() {
    return (
        <div>
            <div className="intro-title">
                About Me
                <hr/>
            </div>
            <div className="intro-content">
                <div className= "intro-image">
                    <img src={picture}/>
                </div>
                <div className="intro-desc">
                    <h2>Hi There</h2>
                    <p>
                    From my childhood, I've had a passion for technologies.
                    After higher school certificate, I got an opportunity to admit in Computer Science & Engineering what I was looking for.
                    I completed graduation in Computer Science & Engineering from East West University in early 2019.
                    As a Computer Science student, I am always keen to learn new technologies, solving complex problems, design, etc.
                    </p>
                    <p>
                    In my leisure time, I love to play guitar, watch videos on youtube, play video games and travel whenever I can.
                    </p>
                    <p>I always love to meet new people and learn new things.Feel free to contact me</p>
                    <div className="intro-lower">
                        <div className="intro-lower-content">
                            <div>Name</div>
                            <div>Atik Mahbub</div>
                        </div>
                        <div className="intro-lower-content">
                            <div>Email</div>
                            <div>atikmahbub100@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
