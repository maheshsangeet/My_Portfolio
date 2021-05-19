import React from "react"
import {Link} from 'react-scroll'
import "./Navbar.css"
import logo from '../../images/logo.png'



const Navbar = () => {
    return (
            <nav id="Navbar">

                {/* <Link to = 'Home' className = 'logo' smooth = {true} duration = {2000}>
                    <img src = {logo} alt ='logo' />    
                </Link> */}
                <ul className = "nav-list" >
                    <li className="Home  active"><Link to ='Home'  smooth = {true} duration = {1000}>About</Link></li>
                    <li className="Experience "><Link to ='Experience' smooth = {true} duration = {1000}>Experience</Link></li>
                    <li className="Skills"><Link to ='Skills' smooth = {true} duration = {1000}>Skills</Link></li>
                    <li className="Education"><Link to ='Education' smooth = {true} duration = {1000}>Education</Link></li>
                    <li className="Contact"><Link to ='Contact' smooth = {true} duration = {1000}>Contact</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar;