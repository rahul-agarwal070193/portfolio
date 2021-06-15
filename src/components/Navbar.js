import React from 'react'
import user from "./detail.json"
import IconLogo from '../icon/Logo';

function Content() {
    var navlink = user.navLinks;
    return (
        <>
            {navlink.map(item => {
                return (<li class="nav-item pe-2">
                    <a class="nav-link " href={item.url}><h6>{item.name}</h6></a>
                </li>)
            })}
        </>
    )
}

export default function Navbar() {
    return (
        <div >
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
                <div class="container">

                    <a class="navbar-brand " href="/"><IconLogo /></a>
                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav m-2 d-flex flex-fill justify-content-end ">
                            <Content />
                            <li class="nav-item ">
                                <a href="/resume.pdf" class="btn btn-outline-info" role="button" >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
