import React, { useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



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
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width:'300px',
          height:'300px'
        },
        paper2: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width:'500px',
            height:'300px'
          },
}));

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

function Domain({coupondata}) {

    // console.log(coupondata)
    const classes = useStyles();
    
    const [state, setState] = useState(Data)
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [data,setData] = React.useState('')



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

    const handleCoupon = (post) => {
        handleOpen(post)
        // history.push({pathname:'/CardDetails', Post:post});
      
      }

      function handleGet(item) {
        handleOpen2(item)
        setData(item.code)
      }
      console.log(data)

      function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };

    return (
        <>
        {/* <div style={{display:'flex',justifyContent:'center'}}>
        <Slider {...setting} 
        style={{ width: "80%" }}
        
        >

            {coupondata && coupondata.map((v) => 
      <div key={v} className='brand-coupon-card'>
      <div className='brand-coupon-sect-1'>
      <p id='discount_para'> 50 % off </p>
     <img src='http://infilate.com/backend/public/uploads/images/1634707727280.png' />
     <p id='discount_para-desc'> 10% Off on Minimum Purchase of Rs. 399 (New User) </p>     
      </div>   
     
     <div className='coupon_card_btns'>
      
    <button id='coupon_card_btns1'>Get coupon</button>
     <button id='coupon_card_btns2' onClick={ () => handleCoupon(v)}> Get quotation </button>
     </div>
 
     <p style={{textAlign:'center'}}> Final Price</p>
     <p style={{textAlign:'center'}}> 1200 </p>
     
     </div>

            )}            
            </Slider>
            </div> */}
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
                                            <p>{data.description}</p>
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
                                           
                                        {
                                            document.queryCommandSupported('copy') &&
                                                <div>
                                                <button onClick={copyToClipboard}>Copy</button> 
                                                {copySuccess}
                                                </div>
                                            }
                                        <form>
                                            <textarea
                                            ref={textAreaRef}
                                            value='Some text to copy'
                                            />
                                        </form>
                                            
                                        
                                        </Fade>
                                    </Modal>






            <div className="domain-page" >
                <div className="domain-button">
                    <button style={{ paddingRight: "30px" }}>ALL (80)</button>
                    <button value="All" onClick={handleBtn}>Hosting (40)</button>
                    <button value="Domain" onClick={handleBtn}>Domain (30)</button>

                    <button value="SSL" onClick={handleBtn}>SSL (10)</button>
                </div>
                <div className="couponcard-head">
                    <Slider {...setting} style={{ width: "80%" }}>
                        {
                            coupondata && coupondata.map((item,idx) => ((
                                <div className="recommend-card" key={idx}>
                                    <div className="card-offer">{item.discount_amount}% off</div>
                                    <div className="card-logo">
                                        <img src={`http://infilate.com/backend/public/uploads/images/${item.media}`} />
                                    </div>
                                    <div className="card-des"> 10% Off on Minimum Purchase of Rs. 399 (New User) </div>
                                    
                                    <div onClick={ () => handleGet(item)} className="card-coupon">Get Coupon </div>
                                    <div className="card-share" onClick={ () => handleCoupon(item)}><h1>Get Quotation</h1> <i style={{marginTop:"5px"}} class="fas fa-share-alt"></i></div>
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
