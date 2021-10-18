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
    }
  }));




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


    return (
        <div className = "webinar-details-middle">
            

            <div className = "event-information" id = "eventinformation">
                <div className = "event-card">
                    <div className = "event-card-header">
                        <span>Event Information</span>
                    </div>
                    <div className = "event-card-content" id = "event-div">
                        <p>{props.data.webinar_description}</p>
                    </div>
                </div>
            </div>

            <div className = "webinar-venue">
                <div class = "venue-card">
                    <div className = "venue-card-header">
                        <h3>Venue</h3>
                    </div>
                    <div className= "venue-card-content">
                        <div className = "venue-card-desc">
                            <h6>This is a Virtual Fitness event</h6>
                            <p>Do the activity inside your home or outside as per your convenience and government guidelines.</p>
                        </div>
                        <div className= "venue-card-img">
                            <img src = "https://townscript-common-resources.s3.ap-south-1.amazonaws.com/assets/ts_images/Virtual+Run.png" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className = 'webinar-gallery'>
                <div className = "gallery-card">
                    <div className = "gallery-card-header">
                        <h3>Gallery</h3>
                    </div>
                    <div className = "gallery-card-content">
                    <img id="myImg" onClick={handleOpen} src="https://s3.ap-south-1.amazonaws.com/townscript-production/gallery-images/1988875/3420b22e-f70d-4b25-a162-8a916eb99fef.jpg" alt="" />
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
        </div>
        
    )
}

export default MiddleContent
