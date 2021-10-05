import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import {Grid,Paper,Avatar,Button,Checkbox} from '@material-ui/core';

import zoom from '../images/zoom.jpg';
import apple from '../images/apple-icon.png';
import ggl from '../images/google-icon.png';
import play from '../images/google-play-icon.png';
import twitter from '../images/twitter-icon.png';
import { SectionHeading } from "components/misc/Headings";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Text = tw.h6`font-semibold text-lg`;

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
     },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto', 
    },

    paper1: {
        padding: theme.spacing(1),
        margin: 'auto', 
        marginBottom: '20px',
        border: '1px solid rgba(100,21,255)',
        borderRadius: '30px', display: 'flex',
        '&:hover': {
            backgroundColor:'rgba(237,242,247)',
            },
            cursor:'pointer',
      },
    cards_container: {
       marginTop: '50px',  
    },
     main: {
        justifyContent: "center", },
    video: {
        boxShadow: 'none',
        width: 290,
    },

    center: {   boxShadow: 'none',
    },

    form: {
        boxShadow: 'none',
    },
    checkbox: {
      
        boxShadow: 'none',
    },
    main1:{
        maxWidth: '100%',
    flexBasis: '100%',
}
    
    
    
  }));

    function CategoriesCheckBox() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

      const Subcategories = [
        {
            imgSrc:play,
            name: "you can not be sure how"
          },
          {imgSrc:ggl,
            name:'you can not be sure how'},
          {imgSrc:apple,
              name:'you can not be sure how '},
          {imgSrc:twitter,
            name:'you can not be sure how'},
          {imgSrc:zoom,
            name:'you can not be sure how'},
          {imgSrc:ggl,
              name:'you can not be sure how'},
          {
            imgSrc:play,
            name:'you can not be sure how '},
          {imgSrc:twitter,
            name:'you can not be sure how'},
      ]

    return (
        <div className={classes.grid}> 
        <Header/>
        <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Title>Let's find the products and services review. </Title>
          
          </HeadingRow>
          <Text style={{marginTop:'2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply lorem ipsum</Text>
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0} className={classes.space}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={10} className={classes.main1}>
                      <Paper className={classes.center}>
                       
                            <Grid className= {classes.main1} item xs={12}>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Paper className={classes.checkbox}>
                                        {/* <Title style={{color:'rgba(100,21,255)'}}>Marketing Automation </Title><br/> */}
                                        
                                        {/* check box  */}
                                        
                                    <Grid className= {classes.main1} item xs={12}>
                                        <Grid container spacing={1}>
                                        {Subcategories.map(item=>{
                                                return(
                                                    <Grid item xs={12} sm={4} >
                                                    <Paper className={classes.paper1} >
                                                       
                                                        <div style={{ flexGrow: '3'}}></div>
                                                        <div style={{color:'rgba(100,21,255)'}}><b>{item.name}</b></div>
                                                        <div style={{ flexGrow: '3'}}></div>
                                                       
                                                    </Paper>
                                                </Grid>
                                                )
                                            })}
                                      
                       
                                    </Grid>        
                                    </Grid>
                                    <br/><br/><hr/><br/>

                                    {/* section 2 */}
                                              
                                    </Paper>
                                </Grid>


                                {/* side section you use */}


                                 
                                </Grid>        
                            </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            </Grid>
          </div>
          
        </ContentWithPaddingXl>
        </Container>
        <Footer/>
        </div>
    )
}
export default CategoriesCheckBox

