import React from 'react'
import { makeStyles, createTheme, ThemeProvider, useTheme } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Container,Grid} from '@mui/material';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pressroom.css'
import Defaultbackground from '../../video-img.jpg'

const useStyles = makeStyles({
    root:{
        '&.MuiContainer-maxWidthXl':{
            maxWidth:'1350px'
        },
        '&.MuiContainer-maxWidthLg':{
            maxWidth:'1350px'
        },
    },
  })


function Pressroom() {
      const classes = useStyles()
      const theme = useTheme();
      const matches = useMediaQuery('(max-width:1438px)');
      const threeSlides = useMediaQuery('(max-width:1280px)');
    //   const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
      const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: threeSlides == true ? 3 : 4 ,
        slidesToScroll: 2,
      };


    const changeWidth = () => {
        if(matches) { return 'md' }
        // else if(mediumScreen) { return 'md'} 
        else { return 'xl'}
    }

    return (
        <Box pt={11}>
            <Container maxWidth className="page-title-area" 
                style={{display:'flex',justifyContent:'center',backgroundImage:`url(${Defaultbackground})`}}>
                    <div classname="_container">
                        <p style={{color:'white',fontSize:'55px'}}>Pressroom</p>
                        <Grid item style={{display:'flex',justifyContent:'center'}}>
                        <p style={{color:'white',fontSize:'18px'}}>Home / </p>
                        <p style={{color:'white',fontSize:'18px',color:'#f68820'}}>&nbsp;Pressroom</p>
                            </Grid>
                    </div>
                </Container>

                <Grid item style={{display:'flex',justifyContent:'center'}}>
                <div className='inquiry_Contents'>
                    <p target='inquiry_heading'>MEDIA INQUIRIES</p>
                    <p>Chanele Williams</p>
                    <p>+1-847-866-3466</p>
                    <p target='inquiry_email'>collaboration.support@infilate.com</p>
                </div>
                </Grid>

                <div style={{paddingTop:'50px', backgroundImage:`url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg)` }}>
                <Container maxWidth={changeWidth()} className={classes.root} >
                <Slider {...setting} style={{}}>
                   {[1,1,1,1,1,1,1,1,,1,1].map(v => 
                   
                    <div key={v} className='card_view_2'>
                    <img src='https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH' />
                    <p id='ist_line_1214'>Rotary fact sheet</p>
                    <div className='text-ellipsis--2'>
                    <p target='give_padding'>Basic information on who we are and what we do.sheet</p>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <button>Learn more </button>
                    </div>
                    </div>                    
                    )} 
                    </Slider>
                    </Container>

                    <Box display='flex' justifyContent='center' pt={20} pb={10}>

                    <Grid container spacing={{ xs: 4, md: 2,lg:1 }} xl={8} lg={10} md={10} sm={10} xs={12}>
                     {[1,1,1,1,1,1,1].map((v,i) => 
                    <Grid key={i} item md={6} xs={12} lg={4} sm={12} >
                    <div className='card_view_3'>
                    <img src='https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH' />
                    <div style={{display:'flex', flexDirection:'column'}}>
                    
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <p target='press_release'>Press release</p>
                        <p target='date_style'>28-Sept-2021</p>
                        </div>
                        <div className="text-ellipsis--2">
                        <p target='big_heading'>Basic information on who we are and what we do.sheet</p>
                        </div>
                        </div>
                    </div>
                    </Grid>
                     )}   

                    </Grid>

                    </Box>
                </div>
                <div>
         </div>
        </Box>
    )
}

export default Pressroom


const InquiryContents = styled.div`
  background-color: white;
  color: ${({ color }) => color || "black"};
  padding: 10px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
`;
