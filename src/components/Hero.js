import React from 'react'
import user from "./detail.json"
import '../CSS/Hero.css'
export default function Hero() {
    return (
        <section style={{ height: "100vh" }} >

            <div class="hero row ">
                <div class="col-md-1"></div>
                <div class="col">
                    <p style={{ color: "#64ffda " }}>Hi, my name is</p>
                    <h2 class="text-white display-2">{user.name}.</h2>
                    <h3 style={{ color: "#8892b0" }} class="display-3 "><strong>I love exploring new things!</strong></h3>
                    <br></br>
                    <h5 style={{ color: "#a8b2d1" }}>I'm a Software Engineering at Renew Power, India. Primarily interested in Web Development.</h5>
                    <h5 style={{ color: "#a8b2d1" }}>I enjoy writing tech blogs and also helping every tech beginner I come across!</h5>
                    <br></br>
                    <a href={user.email} class="btn btn-lg btn-outline" role="button" target="_blanck" >Get In Touch</a>
                </div>
            </div >

        </section>
    )
}
