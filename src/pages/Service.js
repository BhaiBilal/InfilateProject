import React from 'react'
import "./Service.css"
import Container from 'react-bootstrap/Container'
import axios from 'axios'




function Service() {


    const [list,setList] = React.useState([])
    const [customizedList,setCustomizedList] = React.useState([{}])
    
    React.useEffect(() => {
        let cancel
        axios({
          method: 'POST',
          url: 'http://infilate.com/backend/public/api/app/services/service-list',
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setList(res.data.Data)
  
        }).catch(e => {
          if (axios.isCancel(e)) return
        })
        return () => cancel()
      }, [])


    //   console.log(list)
  
 
    return (
        <>
            <Container style={{ width: "100%", height: "80vh", marginTop: "20px" }} >
                <h1 className="service-head" style={{ fontSize: "1.625rem", fontweight: "bold" }} >Research popular software & services</h1>
                <div className="service-container">



                    <div className="service-block">
                         {
                            list && list.slice(0,4).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        } 

                       {/* <a className="service-link" href="#">CAD & PLM Software</a>
                        <div className="link">
                            <a href="#">Building design and Information</a>
                            <a href="#">General-Purpose CAD Software</a>
                            <a href="#">PLM Software</a>


                        </div>
                        <a className="service-link" href="#">Commerce Software</a>
                        <div className="link">
                            <a href="#">E-Commerce Plateforms Software</a>
                            <a href="#">Product Information Managment </a>



                        </div>
                        <a className="service-link" href="#">Content Managment Systems</a>
                        <div className="link">
                            <a href="#">Enterprise Content Managment</a>
                            <a href="#">Website Builder Software</a>



                        </div> */}


                    </div>

                    <div className="service-block">



                    {
                            list && list.slice(4,8).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        }  


                        {/* <a className="service-link" href="#">Marketing Software</a>
                        <div className="link">
                            <a href="#">Email Marketing Software</a>
                            <a href="#">Marketing Automation Software</a>
                            <a href="#">Social Media Managment Software</a>

                        </div>
                        <a className="service-link" href="#">Sales Software </a>
                        <div className="link">
                            <a href="#">CRM Software</a>
                            <a href="#">E-signature Software</a>


                        </div>
                        <a className="service-link" href="#">Security Software</a>
                        <div className="link">
                            <a href="#">Identity Managment Software</a>



                        </div>
                        <a className="service-link" href="#">Vertical Industry Software</a>
                        <div className="link">
                            <a href="#">Car Rental Software </a>
                            <a href="#">Non Profit Accounting Software </a>
                            <a href="#">Property Management Software </a>

                        </div> */}
                    </div>



                    <div className="service-block">

{/* 
                    {
                            list && list.slice(8,12).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        }  */}


                        {/* <a className="service-link" href="#">Customer Service Software</a>
                        <div className="link">
                            <a href="#">Live Chat Software</a>
                        </div>
                        <a className="service-link" href="#">Design Software</a>
                        <div className="link">
                            <a href="#">Video Editing Software </a>

                        </div>
                        <a className="service-link" href="#">Development Software</a>
                        <div className="link">
                            <a href="#">Application Development Software </a>
                            <a href="#">Cloud Platform As a Services </a>
                            <a href="#">Rapid Appliaction Development Software </a>
                            <a href="#">Version Control System </a>

                        </div>

                        <a className="service-link" href="#">Digital Advertising Platforms</a>
                        <div className="link">
                            <a href="#">Data Managment Platform software</a>

                        </div> */}


                    </div>



                    <div className="service-block">


{/* 
                    {
                            list && list.slice(12,16).map((v,i)=>
                            <div key={i}>
                            <a  className="service-link" href="#">{v.category.map((v,i)=> v.name )}</a>
                            <div className="link">
                                <a href="#">{v.name}</a>
                            </div>      
                             </div>   
                            )
                        }  */}


                        {/* <a className="service-link" href="#">ERP Software</a>
                        <div className="link">
                            <a href="#">Accounting Software</a>
                            <a href="#">ERP Software</a>
                            <a href="#">Project Management  Software</a>
                        </div>
                        <a className="service-link" href="#">Hosting Providers</a>
                        <div className="link">
                            <a href="#">Content Delivery Network(CDN)</a>

                        </div>
                        <a className="service-link" href="#">IT Infrastructure Software</a>
                        <div className="link">
                            <a href="#">Virtual Desktop Infrastructure</a>
                            <a href="#">Infrastructure as a Service</a>

                        </div>
                        <a className="service-link" href="#">IT Management Software</a>
                        <div className="link">
                            <a href="#">Backup Software</a>
                            <a href="#">Services Desk software</a>

                        </div> */}


                    </div>


                </div>


            </Container>
        </>
    )
}

export default Service
