import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
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

function Review() {

    const [recommend, setRecommend] = useState(Data)

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <>
            <h2 id='reviewID' className="top-heading-rev" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px", marginLeft: "5rem" }}>Reviews </h2>
            <Grid item style={{display: "flex",flexDirection: "row-reverse",marginTop: "-30px",paddingRight:'20px'}}>
            <p>Write a Review</p>
            </Grid>
            
            <Container style={{ width: "100%", backgroundColor: "#e1e5ea", padding: "50px" }}>

                <div>

                    <div className="review-head1">
                        <Slider {...settings}>
                            {
                                recommend.map((test) => ((
                                    <div className="card-review">
                                        <div className="review-main">
                                            <div className="review-image">
                                                <img src="https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                                            </div>
                                            <div className="review-name">
                                                <h1> Racheal Dsouza</h1>
                                                <h2>Founder & CEO</h2>
                                                <p>Center Homes</p>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", marginTop: "15px", marginBottom: "10px" }}>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <div className="card-des1">
                                            <h1 >Best Software Out There</h1>

                                            <p>Infilate always has the best offers. I always make it a point to check the site before making any purchase
                                            This is one of the easiest software to learn in the field of design and engineering. There is many shortcut available to the commands which you can use like MA of Match All command which is used to copy property of the text. You can also have different background according to your use. There is a lot of customization in annotation part also. You can aslo create file in step format and use it in another design software.
                                            </p>
                                             <h1 >What do you dislike?</h1>

                                            <p>my fellow friends to participate and to do everything simultaneously. I also enjoy keeping count of the duties I've allocated, and they'll be reminded to accomplish the duties. I may utilize the working calendars to work out and reorganize the scheduled start times, durations
                                            </p>

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

export default Review
