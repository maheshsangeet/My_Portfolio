import React from "react";
import "./Contact.css";
import {FaPhoneAlt ,FaEnvelope,FaCodepen,FaGithub, FaLinkedin, FaAddressCard, FaMapMarkerAlt} from "react-icons/fa";
import  { IconContext }  from "react-icons";
 

const Contact = () => {
    return (
        <IconContext.Provider   value={{ size:"2.5rem" }} >

            <div id="Contact">
                <div className="heading">
                    <h1>Contact</h1>
                </div>
                <div class="social-container">
                    <a className="phone" > 
                    <FaPhoneAlt /> 
                    <span> +91-8660804309 </span>
                    </a>

                    <a className="gmail" href="mailto:maheshsangeet0@gmail.com" target="_blank">
                    <FaEnvelope /> 
                    <span> maheshsangeet0@gmail.com </span> 
                    </a>

                    <a className="codepen" href="https://codepen.io/mahesh-sangeet-m-h-" target="_blank" >
                    <FaCodepen />
                    <span>  https://codepen.io/mahesh-sangeet-m-h- </span> 
                    </a>

                    <a className="github" href="https://github.com/maheshsangeet" target="_blank" >
                    <FaGithub />
                    <span>  https://github.com/maheshsangeet </span> 
                    </a>

                    <a className="linkedin" href="https://www.linkedin.com/in/mahesh-sangeet/" target="_blank" >
                    <FaLinkedin />
                    <span> www.linkedin.com/in/mahesh-sangeet/ </span> 
                    </a>

                    <a className="resume" href="Mahesh_Sangeet_Resume.pdf" target="_blank" >
                    <FaAddressCard />
                    <span> Resume </span> 
                    </a>

                    <a className="place">
                    <FaMapMarkerAlt />
                    <span>  Hubli,Karnatak </span> 
                    </a>

                </div>
            </div>
        </IconContext.Provider>
    )
}


export default Contact;
