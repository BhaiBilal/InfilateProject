import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home from "../images/home.mp4"

function Home({ data }) {

    var imagetype = ["jpg","jpeg","png","gif"]
    var ext = ''
    
    
    for(let i = 0; i < imagetype.length; i++) {
        if ( imagetype[i].includes(data && data[0].banner_media_type) ){
            ext = 'image'
            break;
        }
        else {
            ext = 'link'
        }

    }

    console.log(ext)

    return (
        <div className="home-main" style={{ width: "100%", }}>
            <div style={{ width: "100%", paddingTop:'90px' }}>
                { ext == 'image' ? <img className='banner-image-container' src={`http://infilate.com/backend/public/images/${data && data[0].banner_media}`} />
                :
                <iframe width="100%" height="500" src={`${data && data[0].banner_media ? data && data[0].banner_media : home }`} autoPlay >
                </iframe>                
                 }

            </div>

        </div>
    )
}

export default Home
