import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles, } from '@material-ui/core/styles';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fade from '@material-ui/core/Fade';
import Input from '@mui/material/Input';
import { Button, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    root: {
        //   display: 'flex',
        justifyContent: 'space-between',
        width: 'inherit',

        // '& .MuiCardMedia-root': {
        //     backgroundSize: 'contain',

        // },

        '& .MuiAvatar-root': {
            width: '47px',
            height: '45px'
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: '0',
        paddingTop: '30.25%',

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    avatar: {


        fontSize: '14px',
        backgroundColor: 'purple'
    },


    root2: {
        position: 'absolute',
        // border:'1px solid red',
        top: '91px',
        background: 'white'
    },



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
        //   border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width:'300px',
          height:'max-content'
        },
        paper2: {
            backgroundColor: theme.palette.background.paper,
            // border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            width:'500px',
            height:'300px',
            gridGap:'55px'
          },
}));

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

function Recommend({coupondata}) {
    console.log(coupondata)
    const classes = useStyles();
    const [recommend, setRecommend] = useState(Data)
    const matches = useMediaQuery('(max-width:600px)');
    const matches2 = useMediaQuery('(max-width:900px)');
    const matches3 = useMediaQuery('(max-width:1280px)');
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [data,setData] = React.useState('')

    const tum_tak_arzi_meri = () => {
        if(matches == true) {
            return 1
        }
        else if( matches2 == true ) {
            return 2
        }
        else if(matches3 == true) {
            return 3
        }
        else {
            return 4
        }
    }

    const settings = {

        infinite: true,
        speed: 200,
        slidesToShow: tum_tak_arzi_meri(),
        slidesToScroll: 3,

    };

    const handleCoupon = (post) => {
        handleOpen(post)
        // history.push({pathname:'/CardDetails', Post:post});
      
      }

      const handleOpen = (item) => {
        setOpen(true);
        setData(item)
      };
      const handleOpen2 = (item) => {
        setOpen2(true);
        setData(item)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleClose2 = () => {
        setOpen2(false);
      };

      function handleGet(item) {
        handleOpen2(item)
      }
    //   console.log(data)

    const notify = () => {
        navigator.clipboard.writeText(data.code)   
        toast("code copied");
    }

    return (
        <>

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
                                            <p id='transition-modal-desc'>{data.description}</p>
                                        </div>
                                            
                                        
                                        </Fade>
                                    </Modal>

                                    <Modal 
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open2}
                                        onClose={handleClose2}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                        timeout: 500,
                                        }}
                                    >
                                        <Fade in={open2}>

                                        <div className={classes.paper2}>
                                        <Typography style={{textAlign:'center'}}> { data?.code } </Typography>
                                        {/* <Input defaultValue={data} readOnly  /> */}
                                        <Button onClick={() => notify()} variant="contained">Copy</Button>
                                        <a style={{textAlign:'center'}} href={`${data?.url}`} > {data.url} </a>
                                        <ToastContainer autoClose={1000}  />
                                        </div>   
                                        
                                        </Fade>
                                    </Modal>

        <div className='top-heading-rec-container'>
        <h2 className="top-heading-rec" style={{ fontSize: "1.5rem", fontWeight: "600",color:'#34495e' 
        // marginLeft: "5rem"
         }}>Our Top Recommendations </h2>
        </div>
            
            <Container style={{ height: "60vh", 
            // backgroundColor: "#E0E0E0"
             }}>
                <div style={{display:'flex',justifyContent:'center'}}>

                    <div className="recommend-head">
                        <Slider {...settings}>
                            {
                                coupondata?.map((item) => ((
                                    <div className="recommend-card">
                                       
                                        <div className="card-logo">
                                            <img style={{ height: "130px", position: "relative" }} 
                                            src={`http://infilate.com/backend/public/images/${item.media}`} 
                                            />

                                        </div>
                                        <div className="card-des"> {item.description} </div>
                                        
                                        <div onClick={ () => handleGet(item)}  className="card-coupon">Get Coupon </div>
                                         <div onClick={ () => handleCoupon(item)} className="card-share"><h1>Get Quotation</h1> <i style={{marginTop:"5px"}} class="fas fa-share-alt"></i></div>
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
