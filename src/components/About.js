import React from 'react'
import user from "./detail.json"
import "../About.css"
export default function About() {
    // var detail = detail.json;
    return (
        <section>
            <div style={{ height: "100vh" }}>
                <div class="container">
                    <h1 class="text-white">About Me</h1>
                    <br></br>
                    <div class="row ">
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                            <h5 style={{ color: "#a8b2d1" }}>
                                Hello! My name is {user.short_name} and I enjoy creating things that live on the internet.
                            </h5>
                            <h5 style={{ color: "#a8b2d1" }}>
                                My interest in web development started back in 2020 when I decided to try make my own version of Foodblog site — taught me a lot about HTML,CSS,Dango!
                            </h5>
                            <h5 style={{ color: "#a8b2d1" }}>
                                Here are a few technologies I've been working with recently:
                            </h5>
                            <ul style={{ color: "#a8b2d1" }}>
                                <li>Python</li>
                                <li>Cpp</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Django</li>
                                <li>Lravel</li>
                                <li>Javascript</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="primary">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/me.jpg'}

                                    alt="me" />
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </section>
    )
}
