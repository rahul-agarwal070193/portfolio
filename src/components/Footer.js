import React from 'react'
import Side from '../HelpingComponents/Side'
import '../Footer.css'
import user from "./detail.json"
export default function Footer() {
    return (
        <>
            <div class="footer">
                <Side />
            </div>
            <div class="footer">
                <h6>Designed & Built by {user.name}</h6>
                <a href="https://github.com/rahul-agarwal070193/portfolio" target="_blanck" style={{ textDecoration: "none", color: "#64ffda" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg> star me on github</a>
            </div >
        </>
    )
}
