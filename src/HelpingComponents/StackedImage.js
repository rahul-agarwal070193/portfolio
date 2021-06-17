import React, { useState } from 'react'
import '../StackedImage.css'
export default function Test(props) {
    const [arr, setarr] = useState(props.img);
    const [bo, setbo] = useState(false);
    var l = arr.length;
    const p = () => {
        var pe = arr;
        pe.unshift(pe.pop());
        console.log(pe);
        setarr(pe);
        setbo(!bo);
    }
    return (
        <div class="img-area" onClick={p}>
            {arr.map((item, index) => <img src={process.env.PUBLIC_URL + item} alt="item" class="img-box"
                style={{ transform: "rotate(" + ((Math.random() * 8) - 4) + "deg)", opacity: (1 / l) * (index + 1) }}></img>)
            }
        </div >
    )
}
