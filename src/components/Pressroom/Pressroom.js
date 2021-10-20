import React from 'react'
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Container,Grid} from '@mui/material';
import styled from 'styled-components';
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
                <InquiryContents>
                    <p>MEDIA INQUIRIES</p>
                    <p>Chanele Williams</p>
                    <p>+1-847-866-3466</p>
                    <p>chanele.williams@rotary.org</p>
                </InquiryContents>
                </Grid>

                <Grid item style={{display:'flex'}}>
                    <div className='card_view_2'>
                        <img src='https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH' />
                        <p>Rotary fact sheet</p>
                        <p>Basic information on who we are and what we do.sheet</p>
                        <button>Learn more </button>
                    </div>

                    </Grid>

                <div>


                </div>
        </Box>
    )
}

export default Pressroom


const InquiryContents = styled.div`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
