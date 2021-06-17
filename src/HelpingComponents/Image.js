import React from 'react'
import "../Image.css"
export default function Image(props) {
    var img = props.img;
    return (
        <div class="primary">
            <img
                src={img}
                alt="me" />
        </div>
    )
}
