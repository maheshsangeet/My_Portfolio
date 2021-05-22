import React from "react"
import "./Experience.css"

const Experience = () => {
  return (
    <div id="Experience">
            <div className="heading">
                <h1>Experience</h1>
            </div>
            <div className="section-container">
                <section className="exp1"    data-aos="fade-down-right">
                    <div class="tag-container">
                        <div class="tag">

                            <div class="tag-side  tag-1-side">
                                <div class="tag-text tag-1-text front-side">
                                    <h1>Sathvik softech </h1>
                                    <p>(Web Development Intern)</p>
                                </div>
                            </div>

                            <div class="tag-side tag-1-side is-back">
                                <div class="tag-text tag-1-text back-side">
                                    <ul clasName="back">
                                        <li><span>Portfolio</span></li>
                                        <p>Design and developed my Portfolio by using React</p>
                                        <li><span>Rock,Paper,Scissor Game</span></li>
                                        <p>Design And developed game by using HTML, CSS& JavaScript technology</p>
                                        <li><span>Number Guessing Game</span></li>
                                        <p>A random number will generate we have to guess that number is odd or even. Design And developed game by using HTML, CSS & JavaScript technology.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="exp2"  data-aos="fade-down-left">
                    <div class="tag-container">
                        <div class="tag">

                            <div class="tag-side  tag-1-side ">
                                <div class="tag-text tag-1-text front-side">
                                    <h1>Trillium Flow Technology</h1>
                                    <p>(Engineer Trainee)</p>
                                </div>
                            </div>

                            <div class="tag-side tag-1-side is-back">
                                <div class="tag-text tag-1-text back-side">
                                    <ul clasName="back">
                                        <li>Productivity Improvement of a manual assembly line</li>
                                        <li>Coordinate with production department to review the routing and cycle time planned Vs actual.</li>
                                        <li>Finalizing process flow and setting routing of individual parts as well as assembly parts.</li>
                                        <li>Developing work instructions and assembly procedures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="exp3" data-aos="fade-down">
                    <div class="tag-container">
                        <div class="tag">

                            <div class="tag-side  tag-1-side">
                                <div class="tag-text tag-1-text front-side">
                                    <h1>Sri Guru Enterprises</h1>
                                    <p>(Trainee)</p>
                                </div>
                            </div>

                            <div class="tag-side tag-1-side is-back">
                                <div class="tag-text tag-1-text back-side">
                                    <ul clasName="back">
                                        <li>Store in charge –conducting inventory of touls.</li>
                                        <li>Performing mechanical operations on Lathe, drilling, grinding machines.</li>
                                        <li> Materials procurement.</li>
                                        <li>Material handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </div>

    
  );
}
export default Experience;