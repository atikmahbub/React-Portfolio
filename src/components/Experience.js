import React from 'react'
import '../assets/css/experience.css'
import WorkIcon from '@material-ui/icons/Work';
import TimerIcon from '@material-ui/icons/Timer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Experience() {
    return (
        <div className="experience-section">
            <div className="experience-title">
                Experience
                <hr/>
            </div>
            <div className="experience-content">
                <div className="job-title">
                    <div className="job-title-item">
                    <WorkIcon style={{fontSize : "30px" , color : "#ff4a57"}}/>
                    <h3> Think Bricks LLC</h3>
                    </div>
                    <div className="job-title-item">
                    <TimerIcon style={{fontSize : "30px" , color : "#ff4a57"}}/>
                    <h3>October 2019 - Present</h3>
                    </div>
                </div>
                <div className="job-desc">
                    <div className="job-desc-item">
                        <CheckCircleIcon style={{fontSize : "25px" , color : "#ff4a57"}}/>
                        <p>
                        Designed & Developed an AI based screening software named ‘Smart Retina’ ,which helps
                        eye care professionals perform screenings or eye diseases in a safe and efficient manner. The
                        automated algorithm (AI) module detects signs of Diabetic Retinopathy by analyzing fundus
                        images
                        </p>
                    </div>
                    <div className="job-desc-item">
                        <CheckCircleIcon style={{fontSize : "25px" , color : "#ff4a57"}}/>
                        <p>
                        Working as a Full Stack Developer (Django ,Django Rest Framework,ReactJs,
                        Redux ) & I have working experience in the deployment sector. Deployed ‘Smart Retina’ in
                        cloud service(Microsoft Azure Service)
                        </p>
                    </div>
                    <div className="job-desc-item">
                        <CheckCircleIcon style={{fontSize : "25px" , color : "#ff4a57"}}/>
                        <p>
                        Working as a tech lead to help other developers to write clean code,front-end design pattern
                        etc
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
