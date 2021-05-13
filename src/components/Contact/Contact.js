import React from "react";
import "./Contact.css";
import phone from "../../images/phone-call.png";
import gmail from "../../images/gmail.png";
import codepen from "../../images/codepen.png"
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import resume from "../../images/resume.png";
import place from "../../images/home.png";
 

const Contact = () => {
    return (
        <div>
            <div id="Contact">
                {/* <h1>Contact</h1> */}
                <div class="social-container">
                    <a className="phone" href="#" > 
                        <img src={phone} alt="phone" /> +91-8660804309</a>
                    <a className="gmail" href="maheshsangeet0@gmail.com" target="_blank">
                        <img src={gmail} alt="gmail"/><span>maheshsangeet0@gmail.com</span></a>
                    <a className="codepen" href="https://codepen.io/mahesh-sangeet-m-h-" target="_blank" >
                        <img src={codepen} alt="codepen" />https://codepen.io/mahesh-sangeet-m-h-</a>
                    <a className="github" href="https://github.com/maheshsangeet" target="_blank" >
                        <img src={github} alt="github" />https://github.com/maheshsangeet</a>
                    <a className="linkedin" href="https://www.linkedin.com/in/mahesh-sangeet/" target="_blank" >
                        <img src={linkedin} alt="linkedin" />www.linkedin.com/in/mahesh-sangeet/</a>
                    <a className="resume" href="" target="_blank" >
                        <img src={resume} alt="resume" />Resume</a>
                    <a className="place" href="#"  >
                        <img src={place} alt="place" />Hubli,Karnatak</a>

                </div>
            </div>
        </div>
    )
}


export default Contact;
