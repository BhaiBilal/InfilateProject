import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../images/banner.png"
import banner1 from "../images/banner1.png"
import banner2 from "../images/banner2.png"
import banner3 from "../images/banner3.jpg"
import banner4 from "../images/banner4.jpg"
import banner5 from "../images/banner5.jpg"
import banner6 from "../images/banner6.jpg"
import banner7 from "../images/banner7.jpg"
import banner8 from "../images/banner8.jpg"
import banner9 from "../images/banner9.jpg"
import logo1 from "../images/logo7.png"
import logo2 from "../images/logo8.png"
import logo3 from "../images/logo10.png"
import logo4 from "../images/logo7.png"
import logo5 from "../images/logo10.png"
import logo6 from "../images/logo7.png"
import logo7 from "../images/logo8.png"
import logo8 from "../images/logo10.png"
import logo9 from "../images/logo7.png"
import logo10 from "../images/logo10.png"
import { Container } from 'components/misc/Layouts';



const Data = [
    {

        name: "Hosting",
        type: "helllo hosting",
        img: logo1,
        bannners: banner,
        price: 245,
        bestprice: 200
    },
    {
        name: "Domain",
        type: "helllo Domain",
        img: logo2,
        price: 245,
        bestprice: 200,
        bannners: banner1,
    },
    {
        name: "SSL",
        type: "helllo ssl",
        img: logo3,
        price: 245,
        bannners: banner2,
        bestprice: 200
    },
    {
        bannners: banner3,
        name: "Hosting",
        type: "helllo hosting",
        img: logo4,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner4,
        name: "Domain",
        type: "helllo Domain",
        img: logo5,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner5,
        name: "SSL",
        type: "helllo ssl",
        img: logo6,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner6,
        name: "Hosting",
        type: "helllo hosting",
        img: logo7,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner7,
        name: "Domain",
        type: "helllo Domain",
        img: logo8,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner8,
        name: "SSL",
        type: "helllo ssl",
        img: logo9,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner9,
        name: "Hosting",
        type: "helllo hosting",
        img: logo10,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner,
        name: "Domain",
        type: "helllo Domain",
        img: logo1,
        price: 245,
        bestprice: 200
    },
    {
        bannners: banner1,
        name: "SSL",
        type: "helllo ssl",
        img: logo1,
        price: 245,
        bestprice: 200
    }
]

function Recommend() {

    const [recommend, setRecommend] = useState(Data)

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,

    };

    return (
        <>
            <h2 className="top-heading-rec" style={{ fontSize: "1.5rem", fontWeight: "600", marginLeft: "5rem" }}>Our Top Recommendations </h2>
            <Container style={{ height: "60vh", padding: "40px 40px", backgroundColor: "#E0E0E0" }}>
                <div>

                    <div className="recommend-head">
                        <Slider {...settings}>
                            {
                                recommend.map((test) => ((
                                    <div className="recommend-card">
                                       
                                        <div className="card-logo">
                                            <img style={{ height: "130px", position: "relative" }} src={test.bannners} />
                                            <div style={{ height: "45px",width:"170px",marginBottom:"140px",marginLeft:"170px", position:"absolute",backgroundColor:"white" }}>
                                            <img style={{width:"100%",height:"100%"}} src={test.img} alt="image"/>
                                            </div>
                                        </div>
                                        <div className="card-des"> 10% Off on Minimum Purchase of Rs. 399 (New User) </div>
                                        
                                        <div className="card-coupon">Get Coupon </div>
                                         <div className="card-share"><h1>Get Quotation</h1> <i style={{marginTop:"5px"}} class="fas fa-share-alt"></i></div>
                                        <div className="card-price">
                                            
                                          
                                        </div>

                                    </div>

                                )))
                            }

                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Recommend
