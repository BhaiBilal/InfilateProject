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
import './cardDetails.css'
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

// console.log(dataState);

// React.useEffect(()=>{

//     location.Post && setDataState(location.Post);

// },[location])


// console.log(dataState);

//  window.addEventListener('load',Chalu())
//     function Chalu(){
//         if(window.innerWidth<=1713){
//             window.addEventListener('scroll',()=>{

//                 const Lr=document.getElementById("myDiv")
//                 // console.log(window.pageYOffset)
    
//                 //Event Information
//                 if(window.pageYOffset>=0 && window.pageYOffset<=860){
//                     if(Lr!=null){
//                         Lr.classList.remove("letsdothis3")
//                         Lr.classList.remove("letsdothis4")
//                         Lr.classList.remove("letsdothis5")
//                     }

                  
        
//                 }
//                 //Venue
//                 if(window.pageYOffset>=861 && window.pageYOffset<1364){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis4")
//                     Lr.classList.remove("letsdothis5")
//                     Lr.classList.add("letsdothis3")
//                     }
//                 }
        
//                 //Gallery
//                 if(window.pageYOffset>=1300 && window.pageYOffset<1470){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis3")
//                     Lr.classList.remove("letsdothis5")
//                     Lr.classList.add("letsdothis4")
//                     }
//                 }
        
//                 //Organizer
//                 if(window.pageYOffset>=1470){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis4")
//                     Lr.classList.remove("letsdothis3")
//                     Lr.classList.add("letsdothis5")
//                     }
//                 }
        
//             })
    
//         }
    
    
//         if(window.innerWidth>1713){
//             window.addEventListener('scroll',()=>{
//                 const Lr=document.getElementById("myDiv")
//                 // console.log(window.pageYOffset)
//                 //Event Information
//                 if(window.pageYOffset>=0 && window.pageYOffset<=860){
//                     if(Lr!=null){
//                         Lr.classList.remove("letsdothis3")
//                         Lr.classList.remove("letsdothis4")
//                         Lr.classList.remove("letsdothis5")
//                     }

//                 }
//                 //Venue
//                 if(window.pageYOffset>=861 && window.pageYOffset<1364){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis4")
//                     Lr.classList.remove("letsdothis5")
//                     Lr.classList.add("letsdothis3")
//                     }
//                 }
        
//                 //Gallery
//                 if(window.pageYOffset>=1364 && window.pageYOffset<1700){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis3")
//                     Lr.classList.remove("letsdothis5")
//                     Lr.classList.add("letsdothis4")

//                     }
//                 }
        
//                 //Organizer
//                 if(window.pageYOffset>=1700){
//                     if(Lr!=null){
//                     Lr.classList.remove("letsdothis4")
//                     Lr.classList.remove("letsdothis3")
//                     Lr.classList.add("letsdothis5")
//                     }
//                 }
        
//             })
    
//         }
//     }







    //for Resizing
    // window.addEventListener('resize', ()=>{
        
    //     if(window.innerWidth<=1713){
    //         window.addEventListener('scroll',()=>{
    //             const Lr=document.getElementById("myDiv")
    //             // console.log(window.pageYOffset)
    //             //Event Information
    //             if(window.pageYOffset>=0 && window.pageYOffset<=860){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis5")
    //                 }
        
    //             }
    //             //Venue
    //             if(window.pageYOffset>=861 && window.pageYOffset<1364){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis5")
    //                 Lr.classList.add("letsdothis3")
    //                 }
    //             }
        
    //             //Gallery
    //             if(window.pageYOffset>=1300 && window.pageYOffset<1470){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.remove("letsdothis5")
    //                 Lr.classList.add("letsdothis4")
    //                 }
    //             }
        
    //             //Organizer
    //             if(window.pageYOffset>=1470){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.add("letsdothis5")
    //                 }
    //             }
        
    //         })
    
    //     }




    //     else if(window.innerWidth>1713){
    //         window.addEventListener('scroll',()=>{
    //             const Lr=document.getElementById("myDiv")
    //             // console.log(window.pageYOffset)
    //             //Event Information
    //             if(window.pageYOffset>=0 && window.pageYOffset<=860){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis5")
    //                 }
        
    //             }
    //             //Venue
    //             if(window.pageYOffset>=861 && window.pageYOffset<1364){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis5")
    //                 Lr.classList.add("letsdothis3")
    //                 }
    //             }
        
    //             //Gallery
    //             if(window.pageYOffset>=1364 && window.pageYOffset<1700){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.remove("letsdothis5")
    //                 Lr.classList.add("letsdothis4")
    //                 }
    //             }
        
    //             //Organizer
    //             if(window.pageYOffset>=1700){
    //                 if(Lr!=null){
    //                 Lr.classList.remove("letsdothis4")
    //                 Lr.classList.remove("letsdothis3")
    //                 Lr.classList.add("letsdothis5")
    //                 }
    //             }
        
    //         })
    
    //     }


    // });
    

    // window.addEventListener('scroll', ()=>{
    //     // console.log(window.pageYOffset)
    //     if(window.pageYOffset==223){
                
    //     }
    // })

    return (
        <Box pt={25} pb={5} display="flex" alignContent="flex-start" >

         <Grid className={classes.gridstyle} container spacing={3} xs={2}>
             
          <Grid style={{height:"max-content"}} item xs={12}>
          <ScrollIntoView selector="#scrollIntoViewreference1" smooth="true">
          <Button className={classes.btn} variant="contained" color="primary">
          Event Information
         </Button>      
         </ScrollIntoView>
          </Grid> 

          <Grid style={{height:"max-content"}} item xs={12}>
          <ScrollIntoView selector="#seeMoreBtn" smooth="true">
          <Button className={classes.btn} variant="contained" color="primary">
          Venue
         </Button> 
         </ScrollIntoView>      
          </Grid>

          <Grid style={{height:"max-content"}} item xs={12}>
          <ScrollIntoView selector="#scrollIntoViewreference3" smooth="true">
          <Button className={classes.btn} variant="contained" color="primary">
          Gallery
         </Button>  
         </ScrollIntoView>    
          </Grid>

          <Grid
          style={{height:"max-content"}} item xs={12}>
          <ScrollIntoView selector="#myImg" smooth="true">
          <Button className={classes.btn} variant="contained" color="primary">
          Organizer
         </Button>  
         </ScrollIntoView>    
          </Grid>

          <Grid style={{height:"max-xontent",padding:"0px",position:"relative"}} item xs={1}>
 
                {/* <div id="myDiv" className="letsdothis2">  
                <div className="insideDesign">
                    
                    </div>         
                    </div> */}
                
          </Grid>



{/* 
          <div className="designtech" style={{height:"200px",border:"1px solid black"}}>
            <div className={classes.demo}>
                
                </div>  

          </div> */}
             
         </Grid>   
        <MiddleContent data={dataState} />               

        <RightContent data={dataState} />    
        </Box>
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