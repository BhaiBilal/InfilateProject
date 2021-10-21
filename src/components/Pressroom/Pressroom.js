import React from 'react'
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Container,Grid} from '@mui/material';
import styled from 'styled-components';
import Slider from "react-slick";
import './pressroom.css'

// const useStyles = makeStyles((theme) => ({
//     containerclass: {
//         backgroundImage:`url(${BackgroundAsImage})`,
//         backgroundSize:'cover',
//         paddingTop:'100px',
//         paddingBottom:'140px',
//         backgroundPosition:'center'
//     }
//   }));


function Pressroom() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        className:`inner_div_styles {
            margin:10px;
        }`
      };
  

    // const classes = useStyles()

    return (
        <Box pt={11}>
            <Container maxWidth className="page-title-area" 
                style={{display:'flex',justifyContent:'center',backgroundImage:`url(https://wallpapersdsc.net/wp-content/uploads/2016/09/Charleston-Images.jpg)`}}>
                    <div classname="_container">
                        <p style={{color:'#30296c',fontSize:'55px'}}>About</p>
                        <Grid item style={{display:'flex',justifyContent:'center'}}>
                        <p style={{color:'#30296c',fontSize:'18px'}}>Home / </p>
                        <p style={{color:'white',fontSize:'18px',color:'#f68820'}}>&nbsp;About</p>
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

                
                <Slider {...settings} style={{maxWidth:'80%',marginLeft:'177px'}}>

                   {[1,1,1,1,1,1,1,1,,1,1].map(v => 
                    <div key={v} className='card_view_2'>
                    <img src='https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH' />
                    <p id='ist_line'>Rotary fact sheet</p>
                    <p target='give_padding'>Basic information on who we are and what we do.sheet</p>
                    <button>Learn more </button>
                    </div>
                    )} 
                    </Slider>
                 
                    <Box px={20} pt={20} pb={20}>
                    <Grid container spacing={{ xs: 4, md: 3 }}>
                     {[1,1,1,1,1,1,1].map((v,i) => 
                    <Grid key={i} item md={4} xs={12}>
                    <div className='card_view_3'>
                    <img src='https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH' />
                    <div style={{display:'flex', flexDirection:'column'}}>
                    
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <p target='press_release'>Press release</p>
                        <p style={{fontSize:'14px'}}>28-Sept-2021</p>
                        </div>
                        <p target='big_heading'>Basic information on who we are and what we do.sheet</p>
                        </div>
                    </div>
                    </Grid>
                     )}   

                    </Grid>
                    </Box>
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
