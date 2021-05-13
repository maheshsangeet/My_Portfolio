import React from "react"
import Navbar from "../Navbar/Navbar"
import photo from "../../images/pp.png"
import "./Home.css"


const Home = () => {
    return (
        <div id="Home">
            <Navbar />
            <div className="profile-pic">
                <img src={photo}></img>
                {/* <img src="../../images/pp.png"></img> */}
            </div>

            <div className="container">
                <h2>
                    <span className="line">Hi,</span>
                    <span className="line">I am</span>
                </h2>
            
                <div className="introduction">
                    <div className="name">
                        <h1>Mahesh</h1>
                        <h3>Front end developer</h3>
                    </div>
                    <div className="detail-introduction">
                        <p>Mahesh Sangeet, a Mechanical Engineering graduate from Hulkoti, Gadag. Started as a Trainee at Sri Guru Enterprises, Hubli.After that joined to Trillium Flow Technology,Hubli.Carried out project on “Productivity Improvement of 
                        a manual assembly line”.I was responsible for Coordinate with production department to review the routing and cycle time planned Vs actual and Finalizing process flow and setting routing of 
                        individual parts as well as assembly parts. Currently, I am a Web developer intern at Sathvik Softech, Hubli. My responsibility include designing and developing UI for the websites and integrating it with back-end system.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;