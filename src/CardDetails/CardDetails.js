import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom"
import DnsIcon from '@material-ui/icons/Dns';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MiddleContent from './MiddleContent'
import {useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ScrollIntoView from 'react-scroll-into-view';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EventIcon from '@material-ui/icons/Event';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from 'axios';
import './style.css'

const useStyles = makeStyles((theme) => ({

    btn: {
        borderRadius:"20px",
        fontWeight:"bold",
        background:"white",
        boxShadow:"none",
        color:"#4087c7bf",
        transition: "transform .2s",

        '&:hover': {
            backgroundColor: 'white',
            transform: "scale(1.1)",
            boxShadow:"none",
            
        },
        '&:focus': {
            // background:'#c96ac3',
            outline:'none',
            transform: "scale(1.1)",
            // color:"white"
        },

    },
    gridstyle:{
        marginLeft:"20px",
        position:"sticky",
        // position:"-webkit-sticky",
        top:"100px",
        height:"max-content",
        marginLeft:"20px",
        // border:"1px solid red"
    },
    
    demo:{
        height:'20px',width:"20px",background:"red"
    }
  }));



function CardDetails() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = useStyles();
    const {id} = useParams()
    const [dataState,setDataState] = React.useState('')
    const selector = useSelector((state) => (state));

    React.useEffect(() => {

        let cancel
        
          axios(`http://infilate.com/backend/public/api/app/webinars/webinar-detail/${id}`, {
            method: 'POST',
            cancelToken: new axios.CancelToken(c=>cancel=c)
          }).then((res) => {
            setDataState(res.data.Data)
          }).catch(e=>{
            if(axios.isCancel(e)) return
          })   
          //  setBlogData(result.data.Data) 
          return ()=> cancel()
        },[id]);
    

    const AddtoCart = (id) => {

    const formdata = new FormData()
    formdata.append('webinar_id',id)

      axios({
          method:'POST',
          url:'http://infilate.com/backend/public/api/app/cart/add-to-cart',
          headers:{
             "token":selector.userLoginLogout.token,
             "Content-Type":"multipart/form-data"
          },
          data:formdata
      }).then(res => console.log(res))
      .catch(err=> console.log(err))
    }

    return (
        <div className = "webinar-details">
            <div className = "webinar-details-upper">
            <div className = "webinar-profile">
                <div className = "img-wrapper">
                    <img src = {`http://infilate.com/backend/public/images/${dataState.image}`} onError = {(e) => e.target.src = "/Assets/Images/webinar.png"} />
                </div>
                <div className = "webinar-profile-content">
                    <div className = "content-header">
                        <h6>{dataState.webinar_name} <CheckCircleIcon style = {{color : "#3FAEFF"}} /></h6>
                        <div className = "content-header-icons">
                            <ShareIcon />
                        </div>
                    </div>
                    <ul className = "content-tags">
                        <li>#running</li>
                        <li>#virtual runs</li>
                    </ul>
                </div>
                <div className = "webinar-timings">
                    <p><EventIcon style = {{color : "#3FAEFF"}}/>  {dataState.webinar_date} | {dataState.webinar_start_time} - {dataState.webinar_end_time}</p>
                </div>
            </div>
            <div className = "webinar-details-lower">
                <div className = "webinar-details-lower-card">
                    <div className =  "webinar-details-lower-card1-content">
                        <p>Webinar Price: ₹{dataState.price ? dataState.price : "0"} /-</p>
                        <span>*Exclusive of Taxes</span>
                    </div>
                    <div className = "webinar-details-lower-card1-actions">
                        <button onClick={() => AddtoCart(dataState.id)}>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        <MiddleContent data={dataState} />      
        </div>
    )
}

export default CardDetails



















            {/* <Grid className={classes.gridstyle} container spacing={1} xs={2}>
                {[0,1,2,3].map((value) => 
                
                <Grid key={value} item xs={12}>
                    {matches == true ? <Button fullWidth size="medium" className={classes.btn} startIcon={<DnsIcon />} variant="outlined" 
                    color="secondary">
                    Event Information
                    </Button> : 
                    <Button fullWidth size="small" className={classes.btn} startIcon={<DnsIcon />} variant="outlined" 
                    color="secondary">
                    Event Information
                    </Button>
                    
                    }
                
                </Grid>

                )}
            </Grid> */}