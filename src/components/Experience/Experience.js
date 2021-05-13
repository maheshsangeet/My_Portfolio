import React from "react"
import "./Experience.css"

const Experience = () => {
    return (
        <div id="Experience">
            <h1 className="heading">Experience</h1>
            <div className="experience-grid">
                <section className="exp1">
                    <div class="flip-card">
                        <div class="flip-card-inner">

                            <div class="flip-card-front">
                                <h1>Sathvik softech </h1>
                                <h4>(Web Development Intern)</h4>
                            </div>

                            <div class="flip-card-back">
                                <ul clasName="back">
                                    <li className="marg-bottom"><strong>Portfolio</strong></li>
                                    <p>Design and developed my Portfolio by using React</p>
                                    <li className="marg-bottom"><strong>Rock,Paper,Scissor Game</strong></li>
                                    <p>Design And developed game by using HTML, CSS& JavaScript technology</p>
                                    <li className="marg-bottom"><strong>Number Guessing Game</strong></li>
                                    <p>A random number will generate we have to guess that number is odd or even. Design And developed game by using HTML, CSS & JavaScript technology.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="exp2">
                    <div class="flip-card">
                        <div class="flip-card-inner">

                            <div class="flip-card-front">
                                <h1>Trillium Flow Technology</h1>
                                <h4>(Engineer Trainee)</h4>
                            </div>

                            <div class="flip-card-back">
                                <ul clasName="back">
                                    <li>Productivity Improvement of a manual assembly line</li>
                                    <li>Coordinate with production department to review the routing and cycle time planned Vs actual.</li>
                                    <li>Finalizing process flow and setting routing of individual parts as well as assembly parts.</li>
                                    <li>Developing work instructions and assembly procedures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="exp3">
                    <div class="flip-card">
                        <div class="flip-card-inner">

                            <div class="flip-card-front">
                                <h1>Sri Guru Enterprises</h1>
                                <h4>(Trainee)</h4>
                            </div>

                            <div class="flip-card-back">
                                <ul clasName="back">
                                    <li>Store in charge –conducting inventory of touls.</li>
                                    <li>Performing mechanical operations on Lathe, drilling, grinding machines.</li>
                                    <li> Materials procurement.</li>
                                    <li>Material handling</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Experience;