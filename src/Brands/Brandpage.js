import { Container } from 'components/misc/Layouts'
import React from 'react'
import globe from "../images/globe.png"
import review from "../images/review.png"
import compare from "../images/compare.png"
import blogging from "../images/blogging.png"
import ScrollIntoView from 'react-scroll-into-view'

function Brandpage({data}) {
    return (
        <>
            <Container style={{  backgroundColor: "#E1E5EA" }}>

                <div>
                    <a href="#" className="brand-logo">
                        <div style={{ backgroundImage: `url(http://infilate.com/backend/public/images/${data.image})`}}className="brand-sublogo"></div>
                    </a>
                    <div className="visit-button">
                        <div style={{}}>
                            <h1 style={{ fontSize: "2rem", fontWeight: "500", color: "#34495e" }}>{data.name}</h1>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span style={{ marginLeft: "10px", color: "#34495e" }}>4/5</span>
                            </div>
                           
                           
                        </div>


                        <div className="website-button"><button>
                            <div className="image-box">
                                <img style={{ width: "30px", height: "30px", color: "white" }} src={globe} alt="image" />
                            </div>
                            <a >Website</a>
                        </button>
                        </div>
                        <div className="website-button1"><button>
                            <div className="image-box">
                                <img style={{ width: "30px", height: "30px", color: "white" }} src={globe} alt="image" />
                            </div>
                            <a >Compare</a>
                        </button>
                        </div>

                    </div>
                    <div>
                        <div className="review-buttons">
                                   <div className="review-buttonline">
                                <a className="rev1" href="#">Product Detail</a>
                                <ScrollIntoView selector="#reviewID">
                                <a className="rev2">Review</a>
                                </ScrollIntoView>
                                
                                     </div>
                        </div>
                        <div style={{ padding: "0px 10rem" }}>
                     
                            <h1 style={{fontSize:"1.2rem",fontWeight:"bold",color:"#34495e",margin:"5px 0px"}}>{data.title} </h1>
                            <p style={{fontSize:"1rem",fontWeight:"500",color:"#34495e"}} >{data.description}</p>
                       
                        </div>

                            </div>


                </div>
            </Container>
        </>
    )
}

export default Brandpage
