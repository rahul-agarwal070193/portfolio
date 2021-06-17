import React from 'react'
import "../Card.css"
export default function Card(props) {
    const title = props.title;
    const description = props.description;
    const arr = props.tech;
    var github = props.github;
    var external = props.external;

    return (
        <>
            <h3 class="card-title">{title}</h3>
            <div class="card">
                <div class="card-body">
                    <span class="card-text">{description}</span>
                    <br></br>
                    <>
                        {arr.map((item, index) => {
                            return <span key={index} class="tag"><code style={{ color: "inherit" }}>{item}</code></span>
                        })}
                    </>
                    <br></br>
                    <>
                        {github ?
                            <a class="btn btn-sm" href={github} role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#64ffda" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a> : <></>}
                        {external ?
                            <a class="btn btn-sm" href={external} role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#64ffda" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                </svg>
                            </a> : <></>}
                    </>

                </div>
            </div>

        </>
    )
}
