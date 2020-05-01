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
import FlightIcon from '@material-ui/icons/Flight';
import "animate.css/animate.min.css";


function FullPage() {

    const fullref = React.useRef()
    const [navigate , setNavigate] = React.useState(false)

    React.useEffect(() =>{
        document.addEventListener("scroll", function(e) {
            let offsetTop = fullref.current.getBoundingClientRect().top
            if(offsetTop < -2000){
                setNavigate(true)
            }
            else{
                setNavigate(false)
            }
          });
    },[])

    const handlenavigate = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    return (
        <div ref={fullref}>
            <div id="Nav-Bar">
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
            <div className={ !navigate ? "top-nav" : "top-nav top-nav-show"} onClick = {handlenavigate} >
                <FlightIcon style={{fontSize : "30px" , color : "#ff4a57"}}/>
            </div> 
        </div>
    )
}

export default FullPage
