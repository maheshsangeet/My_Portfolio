import React from "react"
import "./Skills.css"

const Skills = () => {
    return (
        <div id="Skills">
            <h1 className="heading">Skills</h1>
            <div className="container">
                <section className="programming-skills">
                    <h1>Web Technologies</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </section>

                <section className="FrameWorks/Libraries">
                    <h1>FrameWorks/Libraries</h1>
                    <ul>
                        <li>Tailwind CSS</li>
                        <li>Bootstarp</li>
                        <li>React.js</li>
                    </ul>
                </section>

                <section className="Others">
                    <h1>Others</h1>
                    <ul >
                        <li>Microsoft Office</li>
                        <li>AUTOCAD 2016</li>
                        <li>CATIA V5</li>
                        <li>SOLIDEDGE</li>
                    </ul>
                </section>

                <section className="personal-skills">
                    <h1>Personal-skills</h1>
                    <ul>
                        <li>Positive in nature</li>
                        <li>Confident and Determined</li>
                        <li>Strong time management skills</li>
                        <li>Disciplined, Punctuality</li>
                        <li>Dedication towards work</li>
                        <li>Team player</li>
                        <li>Adoptive</li>
                    </ul>
                </section>

            </div>
        </div>
    )
}

export default Skills;