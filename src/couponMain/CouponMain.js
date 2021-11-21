import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import Axios from 'axios'
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
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material'
import './viewallcoupon.css'    
import CustomPagination from './CustomPagination';

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









function Domain() {

    const [state, setState] = useState(Data)
    const [posts,setPosts] = useState('')
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState('')
    const classes = useStyles();

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(8);




    const handleOpen = (item) => {
        setOpen(true);
        setData(item)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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


    React.useEffect(() => {

        let cancel
        
          Axios('http://infilate.com/backend/public/api/apps/coupon/coupon-list', {
            method: 'GET',
            cancelToken: new axios.CancelToken(c=>cancel=c)
          }).then((res) => {
            setPosts(res.data.Data)
          }).catch(e=>{
              console.log(e)
          })   
          //  setBlogData(result.data.Data)
  
        },[]);


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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    return (
        <>

            <div style={{paddingTop:"160px",marginBottom:"120px"}} className="domain-page2" >
                <div className="domain-button">
                    <Link to='/searchAllCoupon'>
                    <button style={{ paddingRight: "30px" }}>ALL ({posts.length})</button>
                    </Link>
                    <button value="All" onClick={handleBtn}>Coupon</button>
                  
                </div>
                <div className="card-head2-parent">
                <div className="card-head2" >
                        {
                            currentPosts && currentPosts.map((item,index) => ((
                                <Grid key={index} item md={3}>
                                <div style={{marginBottom:'20px'}} className="recommend-card" onClick={()=>handleOpen(item)}> 
                                    <div className="card-offer">{item.discount_amount}% off</div>
                                    <CardMedia
                                        className={classes.media}
                                        image={`http://infilate.com/backend/public/images/${item.media}`}
                                        title="Paella dish"
                                    />
                                    <div className="card-des">{item.name}</div>
                                    
                                    <div className="card-coupon">Get Coupon </div>
                                    {/* <div className="card-share"><h1>Get Quotation</h1> <i style={{marginTop:"5px"}} class="fas fa-share-alt"></i></div> */}
                                    {/* <div className="card-price">
                                        <div className="right">Final Price</div>
                                        <div className="left">Rs. 12000</div>
                                    </div> */}
                                    
                                </div>
                                </Grid>
                            )))
                        }
                </div>
                </div>


                <Modal 
                         aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        >
                            <Fade in={open}>
                                           
                                <div className={classes.paper}>
                                <h2 id="transition-modal-title">{data.name}</h2>
                                <img src={`http://infilate.com/backend/public/images/${data.media}`} alt='' />
                                </div>
                            
                                </Fade>
                                </Modal>
            </div>
            <CustomPagination style={{marginTop:'10px'}} postPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
        </>
    )
}

export default Domain
