import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home from "../images/home.mp4"

function Home() {



    return (
        <div className="home-main" style={{ width: "100%", height: "80vh" }}>
            <div style={{ width: "100%" }}>
                <iframe width="100%" height="500" src={home} autoPlay >
                </iframe>
            </div>

        </div>
    )
}

export default Home
