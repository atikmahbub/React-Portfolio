import React from 'react'
import '../assets/css/skill.css'

function Skill() {
    return (
        <div className="skill-section">
            <div className="skill-title">
                <div>I'm Expert On..</div>
                <div>Let's Work Together</div>
                <hr/>
            </div>
            <div className="skill-content-section">
                <div className="skill-content">
                    <div className="skill-content-header">
                        Programming Language's
                    </div>
                    <div className="skill-content-item">
                        <div className="skill-item-card">
                            Python
                        </div>
                        <div className="skill-item-card">
                            C++
                        </div>
                        <div className="skill-item-card">
                            C
                        </div>
                    </div>
                </div>
                <div className="skill-content">
                    <div className="skill-content-header">
                        Web (Front-End)
                    </div>
                    <div className="skill-content-item">
                        <div className="skill-item-card">
                            HTML5
                        </div>
                        <div className="skill-item-card">
                            CSS3
                        </div>
                        <div className="skill-item-card">
                            Bootstrap4
                        </div>
                        <div className="skill-item-card">
                            Javascript
                        </div>
                        <div className="skill-item-card">
                            ReactJS
                        </div>
                        <div className="skill-item-card">
                            Redux
                        </div>
                        <div className="skill-item-card">
                            Rest Api
                        </div>                      

                    </div>
                </div>
                <div className="skill-content">
                    <div className="skill-content-header">
                        Web (Back-End)
                    </div>
                    <div className="skill-content-item">
                        <div className="skill-item-card">
                            Django
                        </div>
                        <div className="skill-item-card">
                            Django Rest Framework
                        </div>
                        <div className="skill-item-card">
                            PHP
                        </div>         
                    </div>
                </div>
                <div className="skill-content">
                    <div className="skill-content-header">
                        Cloud Service
                    </div>
                    <div className="skill-content-item">
                        <div className="skill-item-card">
                            Microsoft Azure
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
