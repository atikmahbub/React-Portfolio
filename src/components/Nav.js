import React from 'react'
import '../assets/css/Nav.css'


function Nav() {

    const handleNavigate =(navigate) =>{
        let offsetTop  = document.getElementById(`${navigate}`).offsetTop;
        console.log(offsetTop)
        window.scrollTo({
            top: offsetTop-100, 
            behavior: "smooth"
        });
        document.getElementById("closeIcon").checked = false
    }
    return (
        <div className="navigation">
            <nav role="navigation" >
                <div id="menuToggle">
                    <input type="checkbox" id="closeIcon" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" >
                    <a href="#"><li onClick={ () => handleNavigate("about")}>Home</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("service")}>Services</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("intro")}>About</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("experience")}>Experience</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("portfolio")}>Portfolio</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("skill")}>Skills</li></a>
                    <a href="#"><li onClick={ () => handleNavigate("contact")}>Contact</li></a>
                    </ul>
                </div>
            </nav>  
        </div>
    )
}

export default Nav
