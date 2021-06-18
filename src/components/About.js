import React from 'react';
import user from "./detail.json";
import Heading from '../HelpingComponents/Heading';
import UnorderedList from '../HelpingComponents/UnorderedList';
import Image from '../HelpingComponents/Image';
export default function About() {
    var arr = user.skills;
    return (
        <section style={{ minHeight: "100vh" }} id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <Heading title="About Me" />
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <h5 style={{ color: "#a8b2d1" }} >
                            Hello! My name is {user.short_name} and I enjoy creating things that live on the internet.
                        </h5>
                        <h5 style={{ color: "#a8b2d1" }}>
                            My interest in web development started back in 2020 when I decided to try make my own version of a <a href="https://rah070-foodblog.herokuapp.com/all_post" class="link-info ">Foodblog</a> site — taught me a lot about HTML,CSS,Dango!
                        </h5>
                        <h5 style={{ color: "#a8b2d1" }}>
                            Here are a few technologies I've been working with recently:
                        </h5>
                        <UnorderedList arr={arr} />

                    </div>
                    <div class="col-md-4">
                        <Image img={process.env.PUBLIC_URL + '/images/me.jpg'} />
                    </div>
                </div>
            </div >
        </section>
    )
}
