import React from "react";
import "./Contact.css";
import {FaPhoneAlt ,FaEnvelope,FaCodepen,FaGithub, FaLinkedin, FaAddressCard, FaMapMarkerAlt} from "react-icons/fa";
import  { IconContext }  from "react-icons";
 

const Contact = () => {
    return (
        <IconContext.Provider   value={{ size:"2.5rem" }} >
        <div>
            <div id="Contact">
                {/* <h1>Contact</h1> */}
                <div class="social-container">
                    <a className="phone" href="#" > 
                    <FaPhoneAlt /> 
                    <strong> +91-8660804309 </strong>
                    </a>

                    <a className="gmail" href="mailto:maheshsangeet0@gmail.com" target="_blank">
                    <FaEnvelope /> 
                    <strong> maheshsangeet0@gmail.com </strong> 
                    </a>

                    <a className="codepen" href="https://codepen.io/mahesh-sangeet-m-h-" target="_blank" >
                    <FaCodepen />
                    <strong>  https://codepen.io/mahesh-sangeet-m-h- </strong> 
                    </a>

                    <a className="github" href="https://github.com/maheshsangeet" target="_blank" >
                    <FaGithub />
                    <strong>  https://github.com/maheshsangeet </strong> 
                    </a>

                    <a className="linkedin" href="https://www.linkedin.com/in/mahesh-sangeet/" target="_blank" >
                    <FaLinkedin />
                    <strong> www.linkedin.com/in/mahesh-sangeet/ </strong> 
                    </a>

                    <a className="resume" href="Mahesh_Sangeet_Resume.pdf" target="_blank" >
                    <FaAddressCard />
                    <strong> Resume </strong> 
                    </a>

                    <a className="place" href="#"  >
                    <FaMapMarkerAlt />
                    <strong>  Hubli,Karnatak </strong> 
                    </a>

                </div>
            </div>
        </div>

        </IconContext.Provider>
    )
}


export default Contact;
