import React from 'react'
import Heading from '../HelpingComponents/Heading'
import user from "./detail.json"
export default function Contact() {
    return (
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }} id="contact">
            <>
                <div class="container" >
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                            <Heading title="Contact Me" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6 text-center" style={{ color: "#8892b0" }}>
                            <h5>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</h5>
                            <a href={user.email} class="btn btn-lg btn-outline" role="button" target="_blanck" >Mail Me</a>
                        </div>
                    </div>

                </div >
            </>
        </section >
    )
}
