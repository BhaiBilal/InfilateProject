import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import logo1 from "../images/logo10.png"
import logo2 from "../images/logo7.png"
import logo3 from "../images/logo8.png"
import logo4 from "../images/logo7.png"
import logo5 from "../images/logo10.png"
import logo6 from "../images/logo7.png"
import logo7 from "../images/logo8.png"
import logo8 from "../images/logo10.png"
import logo9 from "../images/logo7.png"
import logo10 from "../images/logo8.png"



const Data = [
    {

        name: "Hosting",
        type: "helllo hosting",
        img: logo1,
        price: 245,
        bestprice: 200
    },
    {
        name: "Domain",
        type: "helllo Domain",
        img: logo2,
        price: 245,
        bestprice: 200
    },
    {
        name: "SSL",
        type: "helllo ssl",
        img: logo3,
        price: 245,
        bestprice: 200
    },
    {
        name: "Hosting",
        type: "helllo hosting",
        img: logo4,
        price: 245,
        bestprice: 200
    },
    {
        name: "Domain",
        type: "helllo Domain",
        img: logo5,
        price: 245,
        bestprice: 200
    },
    {
        name: "SSL",
        type: "helllo ssl",
        img: logo6,
        price: 245,
        bestprice: 200
    },
    {
        name: "Hosting",
        type: "helllo hosting",
        img: logo7,
        price: 245,
        bestprice: 200
    },
    {
        name: "Domain",
        type: "helllo Domain",
        img: logo8,
        price: 245,
        bestprice: 200
    },
    {
        name: "SSL",
        type: "helllo ssl",
        img: logo9,
        price: 245,
        bestprice: 200
    },
    {
        name: "Hosting",
        type: "helllo hosting",
        img: logo10,
        price: 245,
        bestprice: 200
    },
    {
        name: "Domain",
        type: "helllo Domain",
        img: logo1,
        price: 245,
        bestprice: 200
    },
    {
        name: "SSL",
        type: "helllo ssl",
        img: logo1,
        price: 245,
        bestprice: 200
    }
]

function Domain() {

    const [state, setState] = useState(Data)
    const handleBtn = (e) => {
        let word = e.target.value;
        if (word === "All") {
            setState(Data)

        }
        else if (word === "Domain") {
            const filtered = Data.filter(data => data.name === "Domain");
            setState(filtered)
        }
        else if (word === "SSL") {
            const filtered = Data.filter(data => data.name === "SSL");
            setState(filtered)
        }
    }
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    }
    return (
        <>
            <div className="domain-page" >


                <div className="domain-button">
                    <button style={{ paddingRight: "30px" }}>ALL (80)</button>
                    <button value="All" onClick={handleBtn}>Hosting (40)</button>
                    <button value="Domain" onClick={handleBtn}>Domain (30)</button>

                    <button value="SSL" onClick={handleBtn}>SSL (10)</button>
                </div>
                <div className="card-head">
                    <Slider {...setting} style={{ width: "100%" }}>
                        {
                            state.map((test) => ((
                                <div className="recommend-card">
                                    <div className="card-offer">50% off</div>
                                    <div className="card-logo">
                                        <img src={test.img} />
                                    </div>
                                    <div className="card-des"> 10% Off on Minimum Purchase of Rs. 399 (New User) </div>
                                    
                                    <div className="card-coupon">Get Coupon </div>
                                    <div className="card-share"><h1>Get Quotation</h1> <i style={{marginTop:"5px"}} class="fas fa-share-alt"></i></div>
                                    <div className="card-price">
                                        <div className="right">Final Price</div>
                                        <div className="left">Rs. 12000</div>
                                    </div>
                                </div>

                            )))



                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Domain
