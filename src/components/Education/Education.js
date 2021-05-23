import React from "react"
import "./Education.css"

const Education = () => {
    return (
        <div>
            <div id="Education">
                <div className="heading"> 
                    <h1>Education</h1>
                </div>
                <div className="container">
                        <div className="course">
                            <section className="engg" data-aos="fade-left">
                                    <h1>Bachelor Of Engineering 2015-2018</h1>
                                    <p>Mechanical Engineering</p>
                                    <p>Rural Engineering College,Hulkoti</p>
                                    <p> Aggregate of 62.46%</p>
                            </section>

                            <section className="diploma" data-aos="fade-right">
                                    <h1>Diploma 2012-2015</h1>
                                    <p>Mechanical Engineering</p>
                                    <p>Govt Polytechnic,Hubli</p>
                                    <p> Aggregate of 67.66%</p>
                            </section>

                            <section className="SSLC" data-aos="fade-down">
                                    <h1>SSLC 2012</h1> 
                                    <p>Lamington High School for Boys,Hubli</p>
                                    <p> Aggregate of 77.76%</p>
                            </section>
                        </div>

                        <div className="projects">
                                <section className="engg-project slide-top">
                                    <h1>Engineering Project</h1>
                                    <p><span>Title:</span>"Effect of Heat treatment on Mechanical properties of EN-31 Alloy steel"</p>
                                    <p><span>Objective:</span>In this project a sample of steel alloy type EN-31 is selected where various heat treatments are 
                                    carried out for improving its mechanical properties. After that heat treated samples are used for different 
                                    mechanical tests.</p>

                                </section>

                                <section className="dip-project slide-top" >
                                    <h1>Diploma Project</h1>
                                    <p><span>Title:</span>"Multidirectional Vehicle with Digital communication system"</p>
                                    <p><span>Objective:</span>Whenever a person wants to turn his vehicle, he needs to turn it by taking it forward and 
                                    backward several times. This is avoided by installing a system which allows us to turn the vehicle wheel for 
                                    360 degrees. Digital communication system is installed to overcome difficulties of overtaking, ,over heat of 
                                    engine,parking.</p>
                                </section>
                            
                        </div>

                </div>
            </div>
        </div>


    )
}

export default Education;