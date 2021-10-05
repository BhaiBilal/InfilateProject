import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DnsIcon from '@material-ui/icons/Dns';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EventIcon from '@material-ui/icons/Event';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ReactReadMoreReadLess from "react-read-more-read-less";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';
import Switch from '@material-ui/core/Switch';
import { PeopleSharp } from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import infilate from './inflate1.png'







const useStyles = makeStyles((theme) => ({

    root: {
        height: 250,
        marginTop: "100px"
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: "60vw",
        height: "40vw",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],

    },

    btn: {
        borderRadius: "20px",
        fontWeight: "bold",
        fontSize: "12px"
    },
    boxstyle: {
        // border: "1px solid red",
        paddingLeft: "60px"
    },

    gridstyle: {
        paddingTop: "12px"
    },

    containerClass: {
        padding: "0px"
    },
    containerClass2: {
        padding: "0px",
        display: "flex",
        justifyContent: "space-between"
    },
    iconSize: {

        fontSize: "1.5vw",
        color: "#00adee",
        transition: "transform .2s ease",
        '&:hover': {

            cursor: "pointer",
            transform: "scale(1.4,1.4)",
            webkitTransform: "scale(1.1)",

        },
    },
    parabox: {
        height: "100px"
    },
    anchor: {
        color: "gray",
        fontSize: "12px",
        '&:hover': {
            textDecoration: "underline"
        },
        cursor: "pointer",
        zIndex: "1000"
    },

    animateContainer: {
        height: "max-content",
        width: "inherit"
    },

    button: {
        borderRadius: "25px",
        fontSize: "0.8vw",
        fontWeight: "bold",
        height: "inherit",
        background: "white",
        color: "purple",
        boxShadow: "none",
        border: "1px solid purple",
        transition: "transform .2s",
        '&:hover': {
            background: "purple",
            color: "white",
            webkitTransform: "scale(1.1)", /* Safari 3-8 */
            transform: "scale(1.1)"

        },
        '&:focus': {
            outline:'none'
        }
    },

    insidediv: {
        margin: theme.spacing(1),
        border: "1px solid red"
    },

    contents: {
        width: "inherit",
        height: "120px"
    },
    container: {
        display: "flex"
    },


}));


const useStyles2 = makeStyles((theme) => ({
    root: {
      Width: 'inherit',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),

      '&:focus':{
        outline:'none'
      },
      outline:'none'
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      '&:focus':{
        outline:'none'
      },
      outline:'none'
    },
    avatar: {
      
    },

    content:{
        maxHeight:'300px',
        overflow:'hidden'
    },

    cardActions:{
        flexDirection: "row-reverse",
        // '& .MuiCardActions-root':{
        //     flexDirection: "row-reverse",
        // }
    }
  }));



//   const btn=document.querySelector('.read-more-btn')

//   const text=document.querySelector('.card__read-more')


//   const cardHolder=document.querySelector('.card-hoder')

//   cardHolder.addEventListener('click', e=>{
//       const current = e.target

//       const isReadMorebtn=current.className.includes('read-more-btn')

//       if(!isReadMorebtn)
//       return;

//       const currentText=e.target.parentNode.querySelector('.card__read-more')

//       currentText.classList.toggle('card__read-more--open')

//       current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...'
//   })




function MiddleContent(props) {

    const [checked, setChecked] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles()
    const classes2 = useStyles2()
    const [desc,setDesc] = React.useState('')
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    React.useEffect(()=>{
        setDesc(props.data.webinar_description)
    },[props.data.webinar_description])
    
    const handleClick = () => {
        // const text = document.querySelector('.text')

        // text.classList.toggle('show-more')

        // setChecked((prev)=>!prev)

        // const seeMore = document.getElementById("seeMoreBtn")
        // const article = document.getElementById("article")
        // article.classList.toggle("expanded")

        // const blurrEffect = document.getElementById("blurrEffect")
        // blurrEffect.classList.toggle("hide")

        // const expanded = article.classList.contains("expanded")
        // if (expanded) seeMore.innerHTML = "See Less"

        // else { seeMore.innerHTML = "See more" }
    }

        console.log(props.data.webinar_description)



    return (
        <Grid container className={classes.boxstyle} xs={7} lg={7}>
            {/* <Container className={classes.containerClass} maxWidth="lg">
                <img src="https://ts-production.imgix.net/images/a8f4e4a6-edd8-472e-800b-438979e9abac.jpg?auto=compress,format&w=800&h=450"
                    alt="" />

            </Container> */}

            <Grid data-aos="fade-up-right" data-aos-duration="500" container xs={12}>



                <img style={{ width: "100%", maxHeight: '572px' }} 
                src={`http://infilate.com/backend/public/images/${props.data.image}`}
                    alt="" />
                
                

            </Grid>

            <br />

            <Grid data-aos="fade-right" data-aos-duration="500" style={{ paddingTop: "16px" }} container className={classes.containerClass2} xs={12}>

                <Grid item xs={6}>
                    <p style={{ fontFamily: "'Segoe UI',Arial,sans-serif", fontSize: "1.8vw", fontWeight: "600", opacity: "0.8" }}>{props.data.webinar_name}
                     <CheckCircleIcon style={{ marginTop: "-5px", fontSize: "20px", color: "#cf75be" }} /></p>
                </Grid>

                <Grid container item spacing={2} xs={6} style={{ justifyContent: "flex-end" }} >
                    <Grid item>
                        <FavoriteBorderIcon className={classes.iconSize} />

                    </Grid>
                    <Grid item>
                        <ShareIcon className={classes.iconSize} />

                    </Grid>
                    <Grid item>
                        <MoreVertIcon className={classes.iconSize} />

                    </Grid>

                </Grid>
            </Grid>

            <Grid data-aos="fade-right" data-aos-duration="500" container spacing={3} xs={12}>
                <Grid item>
                    <a className={classes.anchor} href="#" > #running </a>

                </Grid>

                <Grid item>
                    &nbsp; <a id="scrollIntoViewreference1" className={classes.anchor} href="https://www.example.com/" > #virtual runs </a>

                </Grid>

            </Grid>



            <br />
            <Grid data-aos="fade-right" data-aos-duration="500" className={classes.gridstyle} container spacing={5} xs={12}>

                <Grid item>
    <EventIcon className={classes.iconSize} /> <span style={{ fontSize: "1vw", opacity: "0.7" }}> {props.data.webinar_date} | {props.data.webinar_start_time} </span>
                </Grid>

                <Grid item >
                    <LabelImportantIcon className={classes.iconSize} /> <span id="scrollIntoViewreference2" style={{ fontSize: "1vw", opacity: "0.7" }}> Webinar Ends:- {props.data.webinar_end_time} </span>
                </Grid>
                <Grid style={{ paddingTop: "0px" }} item xs={12}>
                    <Divider style={{ width: "105%" }} />
                </Grid>
            </Grid>



            <Grid data-aos="fade-right" data-aos-duration="500" container style={{ border: "0.5px solid #D3D3D3", marginTop: "20px" }} xs={12}>






            <Card className={classes2.root} style={{width: "100%"}}>

<CardContent className={classes2.content}>
  <Typography variant="body2" color="textSecondary" component="p">

  <div className="changeToDefault">
  <div dangerouslySetInnerHTML={ {__html: desc}} />
  </div>
  </Typography>
</CardContent>

<CardActions disableSpacing className={classes2.cardActions}>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>

<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
  <Typography variant="body2" color="textSecondary" component="p">
  <div className="changeToDefault">
  <div dangerouslySetInnerHTML={ {__html: desc}} />
  </div>

  </Typography>

  </CardContent>
</Collapse>
</Card>









                {/* <div id="article" >
                    <h1 style={{ fontSize: "1.5vw", fontFamily: "'Segoe UI',Arial,sans-serif", opacity: "0.8" }}>Event Information </h1>

                    <p className="text">

                         <p style={{ fontFamily: "'Segoe UI',Arial,sans-serif", fontSize: "1vw", opacity: "0.8" }}>
                            <br />
                            Beyond Limits 2K21 is an initiative by Townscript Originals to keep India fit and healthy.
                            Beyond Limits 2K21-Virtual Run is focused on building a strong, fit and healthy nation together.

                            All you need to do is sign up for the race, run the chosen distance solo and submit your proof of the run.
                        </p>

                        <br />
                        <p style={{ fontFamily: "'Segoe UI',Arial,sans-serif", fontSize: "1vw", opacity: "0.8" }}>
                            All the proofs submitted will be verified and official results will be published and the finishers will
                            receive medal & t-shirts* (as per the registration made).
                            *If you have opted for deliverables the same will be sent to you within 30 days post-event.
                        </p>

                        <br />
                        <p id="rules&regulations" style={{ fontSize: "1.4vw", fontWeight: "bold", opacity: "0.6", fontFamily: "'Segoe UI',Arial,sans-serif" }}>
                            Rules & Regulations:-
                        </p>
                        <p style={{ fontSize: "1vw", opacity: "0.8" }}>
                            1.It will be a one-day event starting on Sunday 12th September at 05:00 hrs and ending on the same day at 21:00 hrs.
                            You need to run on the date mentioned and need to submit your data just once.
                        </p> 

                         <p style={{ fontSize: "1vw", opacity: "0.8" }}>
                            2.Runners can run solo, Indoor or Outdoor as per the local lockdown norms.
                        </p>

                        <p style={{ fontSize: "1vw", opacity: "0.8" }}>
                            3.If your pace is irregular in between KM's or overall pace beyond normal records then the same cannot be considered for the race.
                        </p>

                        <p style={{ fontSize: "1vw", opacity: "0.8" }}>
                            4.Runners can run a distance of 2KM, 5KM, 10KM, 21KM.
                        </p>

                        <p style={{ fontSize: "1vw", opacity: "0.8" }}>
                            5.Runners can record their run using a mobile phone with apps like Strava, Nike Run Club.
                            Run data to be submitted through a dedicated form link which you will receive in your ticket confirmation mail once you will register.
                            Run data can be submitted from 12th September 2021 at 05:00 hrs to 13th September at 10:00 hrs post that no more run data will be accepted.
                            Please ensure that you are running the distance chosen by you.
                            If you are running a lesser distance, than the chosen distance, your name will not appear on the leaderboard (A buffer of 0.2 Km will be considered)

                        </p>
                    </p>

                </div> 

                 <div id="blurrEffect">
                </div>
                <Grid style={{justifyContent:"center"}} item container xs={12}>
                    <Grid item xs={2}>
                    <button style={{fontSize:"15px",width:"100%"}} onClick={handleClick} id="seeMoreBtn">See More</button>
                    </Grid>
               
                </Grid>  */}
               

            </Grid>

            <Grid
                // data-aos="zoom-in" data-aos-duration="800"
                style={{ marginTop: "60px", border: "0.5px solid 	#D3D3D3" }} container space={1} xs={12}>
                <Grid style={{ paddingLeft: "10px", paddingTop: "10px", paddingBottom: "30px" }} item xs={7}>
                    <p style={{ fontSize: "1.4vw", fontWeight: "bold", fontFamily: "sans-serif", opacity: "0.6", color: "indigo" }}>Venue</p>
                    <br />
                    <p style={{ fontSize: "1.1vw", fontWeight: "bold", opacity: "0.8" }}>This is a Virtual Fitness event</p>
                    <p id="scrollIntoViewreference3" style={{ paddingTop: "10px", fontSize: "1vw", opacity: "0.6" }}>Do the activity inside your home or outside as per your convenience and government guidelines.</p>

                </Grid>

                <Grid style={{ display: "flex", justifyContent: "flex-end" }} item xs={5}>
                    <img style={{ height: "150px" }} src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/ts_images/Virtual+Run.png" alt="" />
                </Grid>


            </Grid>


            {/* Gallery */}
            <Grid
                // data-aos="zoom-out-down" 
                // data-aos-duration="800" 
                style={{ marginTop: "60px", border: "0.5px solid #D3D3D3" }} container spacing={0} xs={12}>


                <Grid style={{ paddingLeft: "16px", paddingTop: "26px" }} item xs={12}>
                    <p style={{ fontSize: "1vw", fontWeight: "bold", opacity: "0.8" }}>GALLERY</p>
                </Grid>


                <br />
                <br />
                <br />
                <Grid style={{ paddingLeft: "20px", paddingBottom: "20px", paddingTop: "10px" }} item xs={12}>
                    <img id="myImg" onClick={handleOpen} src="https://s3.ap-south-1.amazonaws.com/townscript-production/gallery-images/1988875/3420b22e-f70d-4b25-a162-8a916eb99fef.jpg" alt="" />
                    {/* <button type="button" onClick={handleOpen}>
                 react-transition-group
                 </button> */}

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
                        <Zoom in={open}>
                            <div className={classes.paper}>
                                <img src="https://s3.ap-south-1.amazonaws.com/townscript-production/gallery-images/1988875/3420b22e-f70d-4b25-a162-8a916eb99fef.jpg" alt="" />
                            </div>
                        </Zoom>
                    </Modal>




                </Grid>



            </Grid>





            {/* Organizer */}
            <Grid data-aos="zoom-in-up" data-aos-duration="800" style={{ marginTop: "60px", border: "0.5px solid #C0C0C0" }} container spacing={0} xs={12}>


                <Grid item xs={12}>
                    <img style={{width:'100%'}} src="https://www.thetechtoys.com/wp-content/uploads/2017/06/50-cool-websites-for-killing-time-compressed.jpg" alt="" />
                    <img style={{paddingLeft: "20px",paddingTop:'10px' }} src={infilate} alt="" />
                </Grid>


                <br />
                <br />
                <br />
                <Grid container style={{ justifyContent: "flex-end" }} item xs={12}>

                    <Grid style={{ marginTop: "-35px", marginRight: "20px", paddingBottom: "30px" }} item xs={3}>
                        <p style={{ fontSize: "2rem" }}>Infilate Originals</p>
                        <p style={{ fontSize: "0.9vw", opacity: "0.7" }}>Joined on Mar 20, 2020</p>
                    </Grid>

                    <Grid style={{ justifyContent: "flex-end", marginTop: "-35px", alignItems: "baseline", paddingRight: "40px" }} item container xs={5} spacing={1} >

                        <Grid style={{ height: "40px" }} item xs={5}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                endIcon={<FavoriteBorderIcon />}>
                                Follow
                            </Button>
                        </Grid>

                        <Grid item container style={{ justifyContent: "flex-end" }} xs={1}>
                            <Grid item xs={3}>
                                <QuestionAnswerIcon style={{color:'#3782c4',cursor:'pointer'}} />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>


                <Grid style={{ justifyContent: "center" }} container xs={12} spacing={1}>
                    <Grid container item xs={3}>
                        <Grid style={{ paddingLeft: "40px" }} item xs={12}>
                            <p style={{ fontSize: "1.5vw", fontWeight: "bold", opacity: "0.8", fontFamily: "'Segoe UI',Arial,sans-serif" }}>100</p>
                        </Grid>
                        <Grid style={{ paddingLeft: "20px" }} item xs={12}>
                            <p style={{ fontSize: "0.9vw", opacity: "0.8", fontFamily: "'Segoe UI',Arial,sans-serif" }}>Event Organised</p>
                        </Grid>

                    </Grid>

                    <Grid container item xs={2}>
                        <Grid style={{ paddingLeft: "40px" }} item xs={12}>
                            <p style={{ fontSize: "1.5vw", fontWeight: "bold", opacity: "0.8", fontFamily: "'Segoe UI',Arial,sans-serif" }}>679</p>
                        </Grid>
                        <Grid style={{ paddingLeft: "35px" }} item xs={12}>
                            <p style={{ fontSize: "0.9vw", opacity: "0.8", fontFamily: "'Segoe UI',Arial,sans-serif" }}>Followers</p>
                        </Grid>
                    </Grid>


                </Grid>



                <Grid container spacing={1} xs={12}>
                    <Grid style={{ paddingLeft: "30px", paddingTop: "30px" }} item xs={12}>
                        <p style={{ fontSize: "1.3vw", opacity: "0.6", fontFamily: "'Segoe UI',Arial,sans-serif", fontWeight: "bold" }}>About</p>
                    </Grid>

                    <Grid style={{ paddingLeft: "30px" }} item xs={12}>
                        <p style={{ fontSize: "1vw", opacity: "0.9", fontFamily: "'Segoe UI',Arial,sans-serif" }}>Celebrating One Year of Infilate Originals</p>
                    </Grid>

                    <Grid style={{ paddingLeft: "30px" }} item xs={12}>
                        <p style={{ fontSize: "1.3vw", opacity: "0.6", fontFamily: "'Segoe UI',Arial,sans-serif", fontWeight: "bold" }}>Find Us</p>
                    </Grid>

                    <Grid style={{justifyContent: "space-between",display:'flex',marginLeft: "30px",paddingBottom:'30px'}} item xs={1}>
                        <FacebookIcon style={{color:'#1775f1',cursor:'pointer'}}/>
                        <TwitterIcon style={{color:'#1b9ff1',cursor:'pointer'}} />
                    </Grid>

                </Grid>

            </Grid>



        </Grid>
    )
}

export default MiddleContent
