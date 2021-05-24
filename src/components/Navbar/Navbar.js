    import React from "react"
    import {Link} from 'react-scroll'
    import "./Navbar.css"



    const Navbar = () => {
        return (
                <nav id="Navbar">

                    <div className = "nav-content" >
                        <p  className="brand"><Link to = 'Home' smooth = {true} duration = {2000}> Mahesh Sangeet</Link></p>
                        <div class="bars">
                            <div class="first"></div>
                            <div class="second"></div>
                            <div class="third"></div>
                        </div>
                    </div>

                    <Link to = 'Home' className="brand-name" smooth = {true} duration = {2000}> Mahi </Link>

                    <ul className = "nav-list" >
                        <li className="Home  active"><Link to ='Home'  smooth = {true} duration = {1000}>About</Link></li>
                        <li className="Experience"><Link to ='Experience' smooth = {true} duration = {1000}>Experience</Link></li>
                        <li className="Skills"><Link to ='Skills' smooth = {true} duration = {1000}>Skills</Link></li>
                        <li className="Education"><Link to ='Education' smooth = {true} duration = {1000}>Education</Link></li>
                        <li className="Contact"><Link to ='Contact' smooth = {true} duration = {1000}>Contact</Link></li>
                    </ul>

                </nav>
        
        )
        // componentDidMount() {
        //     const sections = document.querySelectorAll("section");
        //     const navLi = document.querySelectorAll("nav .container ul li");
        //     window.addEventListener("scroll", () => {
        //     let current = "";
        //     sections.forEach((section) => {
        //         const sectionTop = section.offsetTop;
        //         const sectionHeight = section.clientHeight;
        //         if (pageYOffset >= sectionTop - sectionHeight / 3) {
        //         current = section.getAttribute("id");
        //         }
        //     });

        //     navLi.forEach((li) => {
        //         li.classList.remove("active");
        //         if (li.classList.contains(current)) {
        //         li.classList.add("active");
        //         }
        //     });
        //     });
        // }
 
    }


    export default Navbar;