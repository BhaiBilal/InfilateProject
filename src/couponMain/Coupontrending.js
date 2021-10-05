import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import axios from 'axios'
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



const useStyles = makeStyles((theme) => ({

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },


    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width:'300px',
        height:'300px'
      },
  }));

function Coupontrending() {

    const [recommend, setRecommend] = useState(Data)
    const [couponData,setCouponData] = useState('')
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState('')
    const classes = useStyles();

    const handleOpen = (item) => {
        setOpen(true);
        setData(item)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    React.useEffect(() => {

        let cancel
        
          Axios('http://infilate.com/backend/public/api/apps/coupon/coupon-list', {
            method: 'GET',
            cancelToken: new axios.CancelToken(c=>cancel=c)
          }).then((res) => {
            setCouponData(res.data.Data)
          }).catch(e=>{
            if(axios.isCancel(e)) return
          })   
          //  setBlogData(result.data.Data)
        
          return ()=> cancel()
  
        },[]);

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,

    };

    return (
        <>
            <h2 className="top-heading-rec" style={{ fontSize: "1.5rem", fontWeight: "600", marginLeft: "5rem" }}>Trending Stores</h2>
            <Container style={{ height: "60vh", padding: "40px 40px", backgroundColor: "#E0E0E0" ,marginBottom:"100px"}}>
                <div>

                    <div className="recommend-head">
                        <Slider {...settings}>
                            {
                                couponData && couponData.map((item,index) => ((
                                    <div key={index} className="recommend-card">
                                       
                                        <div className="card-logo">
                                        <CardMedia
                                        className={classes.media}
                                        image={`http://infilate.com/backend/public/images/${item.media}`}
                                        title="Paella dish"
                                    />
                                            <div style={{ height: "45px",width:"170px",marginBottom:"140px",marginLeft:"170px", position:"absolute",backgroundColor:"white" }}>
                                            <CardMedia
                                        className={classes.media}
                                        image={`http://infilate.com/backend/public/images/${item.media}`}
                                        title="Paella dish"
                                    />
                                            </div>
                                        </div>
                                        <div className="card-des"> 10% Off on Minimum Purchase of Rs. 399 (New User) </div>
                                        
                                        <div className="card-coupon">10 Offers </div>
                                      
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

export default Coupontrending
