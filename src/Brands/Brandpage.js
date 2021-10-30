import { Container } from 'components/misc/Layouts'
import React from 'react'
import globe from "../images/globe.png"
import review from "../images/review.png"
import compare from "../images/compare.png"
import blogging from "../images/blogging.png"


function Brandpage({data}) {
    const [state, setState] = React.useState('Description')



    return (
        <>
            <Container style={{  backgroundColor: "#E1E5EA" }}>

                <div>
                    <a href="#" className="brand-logo">
                        <div className="brand-sublogo">
                            <img src={`http://infilate.com/backend/public/images/${data?.organisation && data.organisation[0].banner_media}` } />
                        </div>
                    </a>
                    <div className="visit-button">
                        <div style={{}}>
                            <h1 style={{ fontSize: "2rem", fontWeight: "500", color: "#34495e" }}>{ data?.organisation && data.organisation[0].name }</h1>
                            {/* <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span style={{ marginLeft: "10px", color: "#34495e" }}>4/5</span>
                            </div> */}
                           
                           
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
                                <a onClick={() => setState('Description')} className="rev1" > Description </a>
                                <a onClick={() => setState('About')} className="rev2" > About us </a>
                                     </div>
                        </div>

                        {
                            state == 'Description' ? <div style={{ padding: "0px 10rem" }}>
                     
                            <h1 style={{fontSize:"1.2rem",fontWeight:"bold",color:"#34495e",margin:"5px 0px"}}>What is { data?.organisation && data.organisation[0].name } </h1>
                            <p style={{fontSize:"1rem",fontWeight:"500",color:"#34495e"}} > {  data?.organisation && data.organisation[0].description } </p>

                        </div>
                        : 
                        <div style={{ padding: "0px 10rem" }}>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> city: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].city } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> email: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].email } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> gstno: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].gst_no } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> holdertype: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].holder_type } </p>
                        </div>
                        <div className='org_details_img'> 
                        <p style={{fontWeight:'bold'}}> image: </p>
                        <img style={{}} src={`http://infilate.com/backend/public/images/${data?.organisation && data?.organisation[0].image}` } />
                        
                        </div>
                        <div className='org_details_img'> 
                        <p style={{fontWeight:'bold'}}> aadhar: </p>
                        <img style={{}} src={`http://infilate.com/backend/public/images/${data?.organisation && data?.organisation[0].aadhar}` } />
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> addressline1: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].address_line_1 } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> addressline2: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].address_line_2 } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> pincode: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].pincode } </p>
                        </div>
                        <div className='org_details'> 
                        <p style={{fontWeight:'bold'}}> state: </p>
                        <p style={{paddingLeft:'5px'}} >{ data?.organisation && data?.organisation[0].state } </p>
                        </div>

                   
                         </div>
                        }


                            </div>


                </div>
            </Container>
        </>
    )
}

export default Brandpage
