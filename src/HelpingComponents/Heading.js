import React from 'react'
import "../CSS/Heading.css"
export default function Heading(props) {
    var title = props.title;
    return (
        <div>
            <div class="heading">{title}</div>
            <br></br>
        </div>
    )
}
