import React, { useState,useEffect } from 'react'
import cashback from "../../images/cashback2.png"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Home from 'pages/Home'
import "./light.css"
import './dropdownstyle.scss';
import { useStore } from "../../mainReview/zustand"
import { userLoginRequest } from '../../redux/UserloginlogoutSlice'
import { Grid, Card, CardMedia, CardContent, CardHeader, CardActions, Avatar, Typography, Divider, Chip, Box, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Profile from './Profile'
import { useHistory , withRouter } from "react-router-dom";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
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
}));





function Headerj() {
    const [isShown, setIsShown] = useState(false);
    const [webinar, setWebinar] = useState('')
    const [couponData,setCouponData] = useState('')
    const [compareData,setCompareData] = useState('')
    const [organisationData,setOrganisationData] = useState('')
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState('')
    const selector = useSelector((state) => state);
    const dispatch = useDispatch()
    // console.log(selector)
    const classes = useStyles();
    const liStyle = {
    }


    const handleOpen = (item) => {
        setOpen(true);
        setData(item)
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    useEffect(() => {
        let cancel
        axios('http://infilate.com/backend/public/api/app/webinars/webinar-list', {
          method: 'POST',
          cancelToken: new axios.CancelToken(c=>cancel=c)
        }).then((res) => {
            // console.log(res.data.Data.data)
          setWebinar(res.data.Data.data)
        }).catch(e=>{
          if(axios.isCancel(e)) return
        })
        // console.log("webssss", result.data.Data)
        return ()=> cancel() 
      }, []);


      React.useEffect(() => {

        let cancel
        
          axios('http://infilate.com/backend/public/api/apps/coupon/coupon-list', {
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

        React.useEffect(() => {
            let cancel
              axios('http://infilate.com/backend/public/api/app/products/product-list', {
                method: 'POST',
                cancelToken: new axios.CancelToken(c=>cancel=c)
              }).then((res) => {
                //   console.log(res)
                setCompareData(res.data.Data)
              }).catch(e=>{
                if(axios.isCancel(e)) return
              })      
              return ()=> cancel()
            },[]);
       

        React.useEffect(() => {
                let cancel
                  axios('http://infilate.com/backend/public/api/app/organisation/list', {
                    method: 'POST',
                    cancelToken: new axios.CancelToken(c=>cancel=c)
                  }).then((res) => {
                    //   console.log(res)
                    setOrganisationData(res.data.Data)
                  }).catch(e=>{
                    if(axios.isCancel(e)) return
                  })      
                  return ()=> cancel()
             },[]);


    const [logobar, setLogobar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setLogobar(true)
        }
        else {
            setLogobar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    const [icon, seticon] = useState(false)

    const changeIcon = () => {
        seticon(!icon)
    }

    const styles = {
        position: "absolute"
    }


    const styles2 = {
        position: "fixed"
    }

    const bears = useStore(state => state.bears)

    const history=useHistory()
    const handleClick2 = (post) => {
  
      history.push({pathname:`/webinarDetails/${post.id}`});
     
    
    }

    const handleCoupon = (post) => {
        handleOpen(post)
        // history.push({pathname:'/CardDetails', Post:post});
      
      }

      const handleClickCompare = (post) => {
        history.push({pathname:`/AllCorporates`});
      }

      const handleClickOrg = (post) => {
        history.push({pathname:`/Brand/${post.id}`});
      }

      const handleProfile = () => {
          history.push({pathname:'/Dashboard'})
      }
      const handleLoginbtn = () => {
        history.push({pathname:'/Login'})
    }

    const handleSignupbtn = () => {
        history.push({pathname:'/RegisterUser'})
    }

    const handleCorporateSignupbtn = () => {
        history.push({pathname:'/RegisterCorporate'})
    }

    const handleCart = () => {
        history.push({pathname:'/addToCart'})

    }


    return (
        <>
            <Router>
                <div > 
                    <nav className="navbar" style={bears > 0 ? styles : styles2}>
                        <div style={{background:'#a7bbc7',height:'50px'}}>
                        <div className="nav-super" style = {{margin : "0rem auto", maxWidth : "1440px"}}>
                            <a href="/" className="navbar-brand">
                                <div className={logobar ? "nav-logo active" : "nav-logo"}>


                                </div>

                            </a>
                            <div className="menu-icon" onClick={changeIcon}>  <i class={icon ? " fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>

                            </div>

                            <a>

                            <Profile handleProfile={handleProfile} handlelogin={handleLoginbtn} handlesignup={handleSignupbtn}
                            handlecorporatesignup={handleCorporateSignupbtn} handleCart={handleCart}
                            />

                            


                            </a>
                        </div>
                        </div>
                        <div className={logobar ? "nav-sub active " : "nav-sub"} style = {{margin : "0rem auto", maxWidth : "1440px"}}>
                            <ul className={icon ? "nav-menu active" : "nav-menu "}>

                                <div style={{display:'flex',paddingLeft:'50px'}}> 





                                <div className="dropdowns">
                                    <li className="dropdown-buttons"> <a >WEBINAR</a></li>
                                    <div className="dropdown-contents">

                                        
                                        <div className="dropdown-contents-head">
                                        {/* <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#"></a> */}
                                        {webinar && webinar.slice(0,4).map((item,index)=>
                                        <li key={index} onClick={()=>handleClick2(item)} >
                                            <a href="#">{item.webinar_name}</a>
                                            </li>
                                         
                                        )}
                                        {/* <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a> */}
                                    </div>
                                    
                                    <div className="dropdown-contents-head">
                                    {webinar && webinar.slice(4,8).map((item,index)=>
                                        // <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#"></a>
                                        <li key={index} onClick={()=>handleClick2(item)}>
                                        <a href="#">{item.webinar_name}</a>
                                        </li>
                                        // <a href="#">lorem</a>
                                        // <a href="#" >lorem</a>
                                        // <a href="#">lorem</a>
                                        // <a href="#">lorem</a>
                                        )}
                                    </div>
                                    <div className="dropdown-contents-head">

                                    {webinar && webinar.slice(8,12).map((item,index)=>
                                        /* <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a> */
                                        <li key={index} onClick={()=>handleClick2(item)}>
                                        <a href="#">{item.webinar_name}</a>
                                        </li>
                                        // <a href="#">lorem</a>
                                        // <a href="#" >lorem</a>
                                        // <a href="#">lorem</a>
                                        // <a href="#">lorem</a>
                                        )}
                                    </div>
                                    </div>
                                </div>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons"><a>COMPARE</a></li>
                                    <div className="dropdown-contents">
                                            <div className="dropdown-contents-head">
                                            {compareData && compareData.slice(0,4).map((item,index)=>
                                        <li key={index} onClick={()=>handleClickCompare(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>
                                         
                                        )}

                                            </div>
                                            <div className="dropdown-contents-head">
                                            {compareData && compareData.slice(4,8).map((item,index)=>
                                            <li key={index} onClick={()=>handleClickCompare(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>)}
                                            </div>
                                            <div className="dropdown-contents-head">
                                            {compareData && compareData.slice(8,12).map((item,index)=>
                                            <li key={index} onClick={()=>handleClickCompare(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>)}
                                            </div>
                                    </div>
                                </div>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons"><a>TOP STORES</a></li>
                                    <div className="dropdown-contents">
                                            <div className="dropdown-contents-head">
                                            {organisationData && organisationData.slice(0,4).map((item,index)=>
                                            <li key={index} onClick={()=>handleClickOrg(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>)}

                                            </div>
                                            <div className="dropdown-contents-head">
                                            {organisationData && organisationData.slice(0,4).map((item,index)=>
                                            <li key={index} onClick={()=>handleClickOrg(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>)}
                                            </div>
                                            <div className="dropdown-contents-head">
                                            {organisationData && organisationData.slice(0,4).map((item,index)=>
                                            <li key={index} onClick={()=>handleClickOrg(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>)}
                                            </div>
                                    </div>
                                </div>






                                <div className="dropdowns">
                                    <li className="dropdown-buttons" ><a>COUPONS</a></li>
                                    <div className="dropdown-contents">
                                            <div className="dropdown-contents-head">

                                            {couponData && couponData.slice(0,4).map((item,index)=>
                                        <li key={index} onClick={()=>handleCoupon(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>
                                         
                                        )}

                                            </div>
                                            <div className="dropdown-contents-head">
                                            {couponData && couponData.slice(4,8).map((item,index)=>
                                        <li key={index} onClick={()=>handleCoupon(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>
                                         
                                        )}
                                            </div>
                                            <div className="dropdown-contents-head">
                                            {couponData && couponData.slice(8,12).map((item,index)=>
                                        <li key={index} onClick={()=>handleCoupon(item)} >
                                            <a href="#">{item.name}</a>
                                            </li>
                                         
                                        )}
                                        </div>
                                    </div>
                                </div>
                                {/* <Grid container spacing={1}>
                                    
                                                            
                                <Grid item  style={{ position: 'relative' }} className="box-333"
                                    onMouseEnter={() => setIsShown(true)}>
                                    <div class="btn333 btn333-three">
                                        <span>WEBINAR</span>
                                    </div>
                                </Grid>

                                <Grid item  style={{ position: 'relative' }} className="box-333"
                                    onMouseEnter={() => setIsShown(true)}>
                                    <div class="btn333 btn333-three">
                                        <span>COMPARE</span>
                                    </div>
                                </Grid>

                                <Grid item  style={{ position: 'relative' }} className="box-333"
                                    onMouseEnter={() => setIsShown(true)}>
                                    <div class="btn333 btn333-three">
                                        <span>TOPSTORES</span>
                                    </div>
                                </Grid>

                                <Grid item  style={{ position: 'relative' }} className="box-333"
                                    onMouseEnter={() => setIsShown(true)}>
                                    <div class="btn333 btn333-three">
                                        <span>COUPONS</span>
                                    </div>
                                </Grid>

                                <Grid item  style={{ position: 'relative' }} className="box-333">
                                    <div onClick={()=>handleClick('contents')} class="btn333 btn333-three">
                                        <span>CONTENTS</span>
                                    </div>
                                </Grid>

                                </Grid>     */}
                        
                                {/* {
                                    isShown && (
                                        <Grid container className={classes.root2} xs={5} spacing={1} onMouseLeave={() => setIsShown(false)}>
                                            {webinar &&  webinar.slice(0,9).map((item, index) =>
                                            


                                            
                                                <Grid key={index} item xs={3}>
                                                    <Card className={classes.root} onClick={()=>handleClick2(item)}> 
                                                        <CardMedia
                                                            className={classes.cover}
                                                            image={`http://infilate.com/backend/public/images/${item.image}`}
                                                            title="Live from space album cover"
                                                        />

                                                        <CardHeader style={{ padding: '0px' }}
                                                            title={item.webinar_date}
                                                            subheader={item.webinar_name}
                                                        />

                                                    </Card>

                                                </Grid>


                                            )}
                                            <button type="submit" className="">view all</button>
                                            
                                        </Grid>

                                    )

                                } */}


                                {/* 
                                        {
                                        [0,1,2,3,4].map((item,index)=>
                                        <Grid key={index} container xs={4} spacing={5}>
                                        <Card className={classes.root}>
                                            <CardMedia
                                                className={classes.cover}
                                                image='https://images.designtrends.com/wp-content/uploads/2016/01/04085621/A-Cold-Sunset-Background.jpg'
                                                title="Live from space album cover"
                                            />

                                            <CardHeader
                                                avatar={
                                                    <Avatar  aria-label="recipe" className={classes.avatar}>
                                                        ₹249/-
                                                    </Avatar>
                                                }
                                                title={'date'}
                                                subheader="Beyond Limits 2K21-Virtual Run"
                                            />

                                        </Card>

                                    </Grid>
                                        )
                                        } */}

</div>
                            </ul>


                        </div>
                    </nav>

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
            </Router>
        </>
    )
}

export default withRouter(Headerj)
