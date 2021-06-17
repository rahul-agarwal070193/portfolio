import React from 'react'
import '../UnorderedList.css'
export default function UnorderedList(props) {
    var arr = props.arr;
    // console.log(arr);
    const List = arr.map((item, index) =>
        <li key={index} class="list">
            {item}
        </li>
    );
    return (
        <ul class="unordered_list">
            {List}
        </ul>

    )
}
