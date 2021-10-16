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
import RightContent from './RightContent'
import {useLocation} from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
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
    

    return (
        <div className = "webinar-details">
            <div className = "webinar-details-links">
                <a href = "#eventinformation">Event Information</a>
                <a href = "#venue">Venue</a>
                <a href = "#gallery">Gallery</a>
                <a href = "#organizer">Organizer</a>
            </div>   
        <MiddleContent data={dataState} />               

        <RightContent data={dataState} />    
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