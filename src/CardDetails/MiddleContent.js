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

    console.log(props.data)


    return (
        <div className = "webinar-details-middle">
            <div className = "webinar-profile">
                <div data-aos="fade-up-right" data-aos-duration="500" className = "img-wrapper">
                    <img src = {`http://infilate.com/backend/public/images/${props.data.image}`} />
                </div>
                <div data-aos="fade-right" data-aos-duration="500" className = "webinar-profile-content">
                    <div className = "content-header">
                        <h6>{props.data.webinar_name} <CheckCircleIcon style = {{color : "#3FAEFF"}} /></h6>
                        <div className = "content-header-icons">
                            <FavoriteBorderIcon />
                            <ShareIcon />
                            <MoreVertIcon />
                        </div>
                    </div>
                    <ul className = "content-tags">
                        <li>#running</li>
                        <li>#virtual runs</li>
                    </ul>
                </div>
                <div className = "webinar-timings">
                    <p><EventIcon style = {{color : "#3FAEFF"}}/>  {props.data.webinar_date} | {props.data.webinar_start_time} - {props.data.webinar_end_time}</p>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="500" className = "event-information" id = "eventinformation">
                <div className = "event-card">
                    <div className = "event-card-header">
                        <span>{props.data.webinar_description}</span>
                    </div>
                    <div className = "event-card-content">
                        <p>{props.data.webinar_description}</p>
                    </div>
                    <div className = "event-card-expand">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>

            <div className = "webinar-venue" id = "venue">
                <div class = "venue-card">
                    <div className = "venue-card-header">
                        <h3>Venue</h3>
                    </div>
                    <div className= "venue-card-content">
                        <div className = "venue-card-desc">
                            <h6>This is a Virtual Fitness event</h6>
                            <p>Do the activity inside your home or outside as per your convenience and government guidelines.</p>
                        </div>
                        <div classNam= "venue-card-img">
                            <img src = "https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/ts_images/Virtual+Run.png" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-aos="zoom-out-down" data-aos-duration="800" className = 'webinar-gallery' id = "gallery">
                <div className = "gallery-card">
                    <div className = "gallery-card-header">
                        <h3>Gallery</h3>
                    </div>
                    <div className = "gallery-card-content">
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
                    </div>
                </div>
            </div>


            <div data-aos="zoom-in-up" data-aos-duration="800" className = "webinar-organizer" id = "organizer">
                <div className = "organizer-card">
                    <div className = "organizer-image">
                        <img src = "https://www.thetechtoys.com/wp-content/uploads/2017/06/50-cool-websites-for-killing-time-compressed.jpg" />
                    </div>
                    <div className = "organizer-middle">
                        <div className = "img">
                            <img src = "/Assets/Images/infi-logo.png" />
                        </div>
                        <ul className = "content">
                            <li><h6>Infilate Originals</h6></li>
                            <li><span>Joined on Mar 20, 2020</span></li>
                            <li>
                                <ul>
                                    <li>
                                        <span>100</span>
                                        <p>Events organized</p>
                                    </li>
                                    <li>
                                        <span>679</span>
                                        <p>Followers</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className = "actions">
                            <button>Follow <i class="far fa-heart"></i></button>
                            <QuestionAnswerIcon style={{color:'#3782c4',cursor:'pointer'}} />
                        </div>
                    </div>
                    <ul className = "organizer-footer">
                        <li>
                            <h6>About</h6>
                            <p>Celebrating One Year of Infilate Originals</p>
                        </li>
                        <li>
                            <h6>Find Us</h6>
                            <ul className = "social-links">
                                <FacebookIcon />
                                <TwitterIcon />
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default MiddleContent
