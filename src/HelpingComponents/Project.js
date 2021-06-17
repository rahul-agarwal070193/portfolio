import React from 'react'
import Card from './Card'
import StackedImage from './StackedImage'
import user from '../components/detail.json'
export default function Project() {
    const arr = user['Feature Project'];
    console.log(arr[0].img1);
    const pr = arr.map((item, index) => {
        return (
            <div class="row" style={{ alignItems: "center", marginBottom: "9vh" }}>
                <div class="col-md-6">
                    <StackedImage img={item.image} />
                </div>
                <br></br>
                <div class="col-md-6" style={{ zIndex: '100', marginTop: "23px" }}>
                    <Card title={item.name} description={item.description} github={item.githublink}
                        tech={item.tag} external={item.external} />

                </div>
            </div>

            //     <div class="row" style={{ alignItems: "center" }}>


            //         <div class="col-md-6" style={{ zIndex: '100', marginTop: "23px" }}>
            //             <Card title={item.name} description={item.description} github={item.githublink}
            //                 tech={item.tag} external={item.external} />

            //         </div>
            //         <br></br>
            //         <div class="col-md-6">
            //             <StackedImage img1={process.env.PUBLIC_URL + item.img1}
            //                 img2={process.env.PUBLIC_URL + item.img2}
            //                 img3={process.env.PUBLIC_URL + item.img3} />
            //         </div>
            //     </div>
            // 
        )
    })
    return (
        <>
            {pr}
        </>

    )
}
