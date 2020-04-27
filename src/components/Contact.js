import React from 'react'
import '../assets/css/contact.css'
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-title">
            <ScrollAnimation animateIn="bounce" animateOnce={true}>
                <div>HAVE ANY QUERY?</div>
                <div>Contact</div>
            </ScrollAnimation>
                <hr/>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="contact-content">
                <Paper elevation={2} className="contact-content-item">
                <LocationOnIcon style={{color: "#ff4a57" , fontSize : "40px"}}/>
                <div className="contact-item">
                    <span>Address</span>
                    <br/>
                    Rampura, Dhaka, Bangladesh
                </div>
                </Paper>

                <Paper elevation={2} className="contact-content-item">
                <CallIcon style={{color: "#ff4a57" , fontSize : "40px"}}/>
                <div className="contact-item">
                    <span>Call</span>
                    <br/>
                    +880-1689127737
                </div>
                </Paper>
                <Paper elevation={2} className="contact-content-item">
                <EmailIcon style={{color: "#ff4a57" , fontSize : "40px"}}/>
                <div className="contact-item">
                    <span>Email</span>
                    <br/>
                    atikmahbub100@gmail.com
                </div>
                </Paper>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Contact
