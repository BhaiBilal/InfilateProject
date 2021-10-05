import React, { useState } from 'react'
import cashback from "../../images/cashback2.png"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Home from 'pages/Home'
import "./light.css"
import './dropdownstyle.scss';
import { useStore } from "../../mainReview/zustand"
import { userLoginRequest } from '../../redux/Userlogin&logout'
import { Grid, Card, CardMedia, CardContent, CardHeader, CardActions, Avatar, Typography, Divider, Chip, Box, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        //   display: 'flex',
        justifyContent: 'space-between',
        width: 'inherit',

        // '& .MuiCardMedia-root': {
        //     backgroundSize: 'contain',

        // },

        '& .MuiAvatar-root':{
            width:'47px',
            height:'45px'
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
        paddingTop: '62.25%',
        
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
    avatar:{


        fontSize: '14px',
        backgroundColor:'purple'
    }
}));



function Headerj(props) {
    const classes = useStyles();
    const theme = useTheme();
    const liStyle = {
    }

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

    const handleClick = (e) => {
        if (e == "Signup as user") {
            window.location.href = 'http://localhost:3000/RegisterUser'
        }

        else if (e == "Signup as corporate") {
            window.location.href = 'http://localhost:3000/RegisterCorporate'
        }

    }


    // const bears = useStore(state => state.name=="categoryPage" ? styles : null)


    return (
        <>
            <Router>
                <div >
                    <nav className="navbar" style={bears > 0 ? styles : styles2}>
                        <div className="nav-super">
                            <a href="/" className="navbar-brand">
                                <div className={logobar ? "nav-logo active" : "nav-logo"}>


                                </div>

                            </a>
                            <div className="menu-icon" onClick={changeIcon}>  <i class={icon ? " fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>

                            </div>

                            <a>

                                <div style={{ zIndex: "999" }} className="dropdown">
                                    <button className="dropbtn"><i class="fas fa-user fa-2"></i>Profile</button>
                                    <div className="dropdown-content">
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "#e1e5ea" }}>
                                            <div>
                                                <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                                            <div style={{ paddingLeft: "10px" }}>
                                                <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                                                <h6 style={{ fontSize: "13px" }}>
                                                    Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                                            </div>
                                        </div >
                                        <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                            <ul className="hList10">
                                                <li>
                                                    <div className="menu10">
                                                        <h2 className="menu-title10">Sign UP</h2>
                                                        <ul className="menu-dropdown10">
                                                            <li onClick={() => handleClick("Signup as user")}>Signup as user</li>
                                                            <li onClick={() => handleClick("Signup as corporate")}>Signup as corporate</li>
                                                        </ul>
                                                    </div>
                                                </li>

                                            </ul>



                                            {/* <div class="dropdown10">
                                <button class="dropbtn10">Signup</button>
                                <div class="dropdown-content10">
                                <a href="http://localhost:3000/RegisterUser" style={{backgroundColor:"#409fff",color:"white"}}>Sign p as User</a>
                                <a href="http://localhost:3000/RegisterCorporate" style={{backgroundColor:"#3e8e41",color:"white"}}>Sign up as Corporate</a>
                                </div>
                                </div> */}
                                            {/* <a href="#">SIGN UP</a> */}
                                            <a href="http://localhost:3000/Login">LOGIN</a>
                                        </div>

                                    </div>
                                </div>


                            </a>
                        </div>
                        <div className={logobar ? "nav-sub active " : "nav-sub"}>
                            <ul className={icon ? "nav-menu active" : "nav-menu "}>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons"> <a >WEBINAR</a></li>
                                    <div className="dropdown-contents">
                                        <div style={{ display: "flex", flexDirection: "row" }}>
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






                                        <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>

                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons"><a>COMPARE</a></li>
                                    <div className="dropdown-contents">
                                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>

                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons"><a>TOP STORIES</a></li>
                                    <div className="dropdown-contents">
                                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>

                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdowns">
                                    <li className="dropdown-buttons" ><a>COUPONS</a></li>
                                    <div className="dropdown-contents">
                                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>

                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                            <div className="dropdown-contents-head">
                                                <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                                <a href="#">lorem</a>
                                                <a href="#" >lorem</a>
                                                <a href="#">lorem</a>
                                                <a href="#">lorem</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>


                        </div>
                    </nav>
                </div>
            </Router>
        </>
    )
}

export default Headerj
