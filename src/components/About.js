import React from 'react'
import '../assets/css/About.css'
import Typist from 'react-typist';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

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
                <div className= "linked-in" >
                    <LinkedInIcon style={{fontSize : "30px" , color : "#fff"}} />
                </div>
                <div>
                    <GitHubIcon style={{fontSize : "30px", color : "#fff"}}/>
                </div>
                <div>
                    <TwitterIcon style={{fontSize : "30px", color : "#fff"}}/>
                </div>
            </div>
        </div>
    )
}

export default About
