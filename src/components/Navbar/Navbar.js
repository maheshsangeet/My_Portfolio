import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
            <nav id="Navbar">
                <ul className ="nav-list">
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
    )
}

export default Navbar;