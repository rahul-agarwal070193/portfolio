import React from 'react'
import Heading from '../HelpingComponents/Heading'
import Project from '../HelpingComponents/Project'

export default function FeatureProject() {
    return (
        <section>
            <>
                <div class="container" style={{ minHeight: "100vh" }}>
                    <div class="row" id="projects">
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                            <Heading title="My Projects" />
                        </div>
                    </div>
                    <Project />
                </div >
            </>
        </section >
    )
}
