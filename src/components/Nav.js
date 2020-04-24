import React from 'react'
import '../assets/css/Nav.css'

function Nav() {
    return (
        <div>
            <nav role="navigation" className="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Info</li></a>
                    <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>   
        </div>
    )
}

export default Nav
