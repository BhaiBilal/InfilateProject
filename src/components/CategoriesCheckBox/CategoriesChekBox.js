import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import {Grid,Paper,Avatar,Button,Checkbox} from '@material-ui/core';

import zoom from '../../images/zoom.jpg';
import apple from '../../images/apple-icon.png';
import ggl from '../../images/google-icon.png';
import play from '../../images/google-play-icon.png';
import twitter from '../../images/twitter-icon.png';
import { SectionHeading } from "components/misc/Headings";
import tw from "twin.macro";
import Header from "components/headers/light.js";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
        padding: '20px', },

    paper: {
        padding: theme.spacing(1),
        margin: 'auto', 
    },

    paper1: {
        padding: theme.spacing(1),
        margin: 'auto', 
        marginBottom: '20px',
        border: '1px solid rgba(100,21,255)',
        borderRadius: '30px', display: 'flex'
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

    center: {
     
        boxShadow: 'none',
    },

    form: {
        boxShadow: 'none',
    },

    pic: {
        marginBottom: '50px'
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
            <Heading>Categories</Heading>
          </HeadingRow>
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0} className={classes.space}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={10} className={classes.main1}>
                      <Paper className={classes.center}>
                       
                            <Grid className= {classes.main1} item xs={12}>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={7}>
                                    <Paper className={classes.checkbox}>
                                        <Title style={{color:'rgba(100,21,255)'}}>Marketing Automation </Title><br/>
                                        
                                        {/* check box  */}
                                        
                                    <Grid className= {classes.main1} item xs={12}>
                                        <Grid container spacing={1}>
                                        {Subcategories.map(item=>{
                                                return(
                                                    <Grid item xs={12} sm={6} >
                                                    <Paper className={classes.paper1} >
                                                        <div style={{ flexGrow: '3'}}><Avatar src={item.imgSrc}></Avatar></div>
                                                        <div style={{ flexGrow: '5', alignSelf: 'center',color:'rgba(100,21,255)'}}><b>{item.name}</b></div>
                                                        <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
                                                    </Paper>
                                                </Grid>
                                                )
                                            })}
                                      
                       
                                    </Grid>        
                                    </Grid>
                                    <br/><br/><hr/><br/>

                                    {/* section 2 */}
                                    
                                    <Title style={{color:'rgba(100,21,255)'}}>Digital Analytics</Title><br/>
                                    <Grid className= {classes.main1} item xs={12}>
                                        <Grid container spacing={1}>
                                            {Subcategories.map(item=>{
                                                return(
                                                    <Grid item xs={12} sm={6} >
                                                    <Paper className={classes.paper1}>
                                                        <div style={{ flexGrow: '3'}}><Avatar src={item.imgSrc}></Avatar></div>
                                                        <div style={{ flexGrow: '5', alignSelf: 'center',color:'rgba(100,21,255)'}}><b>{item.name}</b></div>
                                                        <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
                                                    </Paper>
                                                </Grid>
                                                )
                                            })}
                                       
                                       
                                    </Grid>        
                                    </Grid>

                                        {/* section 3 */}
                                        
                                    <br/><br/><hr/><br/>
                                    <Title style={{color:'rgba(100,21,255)'}}>Video Conferencing</Title><br/>
                                    <Grid className= {classes.main1} item xs={12}>
                                        <Grid container spacing={1}>
                                        {Subcategories.map(item=>{
                                                return(
                                                    <Grid item xs={12} sm={6} >
                                                    <Paper className={classes.paper1}>
                                                        <div style={{ flexGrow: '3'}}><Avatar src={item.imgSrc}></Avatar></div>
                                                        <div style={{ flexGrow: '5', alignSelf: 'center',color:'rgba(100,21,255)'}}><b>{item.name}</b></div>
                                                        <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
                                                    </Paper>
                                                </Grid>
                                                )
                                            })}
                                       
                                    </Grid>        
                                    </Grid>
                                    </Paper>
                                </Grid>


                                {/* side section you use */}


                                <Grid item xs={12} sm={5}>
                                    <Paper className={classes.paper} style={{}}>
                                        <Grid item xs={12} style={{marginTop: '15px'}}>
                                            <Grid container spacing={2} className={classes.main} style={{backgroundColor: 'white', marginBottom: '200px'}}>
                                                <Grid item xs={12} sm={10} className={classes.main2}>
                                                <Paper className={classes.use} style={{boxShadow: 'none'}}>
                                                <h4 className={classes.paper} style={{marginBottom: '25px'}}>You Use:</h4>
                                                <Grid item xs={12} sm={12}>
                                                    <Paper className={classes.paper1} style={{borderRadius: '30px', display: 'flex'}}>
                                                        <div style={{ flexGrow: '3'}}><Avatar src="./components/images/1.jpg"></Avatar></div>
                                                        <div style={{ flexGrow: '5', alignSelf: 'center'}}><b>You cannot be sure how.</b></div>
                                                        <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
                                                    </Paper>
                                                </Grid>
                                                <Grid item xs={12} sm={12} >
                                                    <Paper className={classes.paper1} style={{borderRadius: '30px', display: 'flex'}}>
                                                        <div style={{ flexGrow: '3'}}><Avatar src="./components/images/1.jpg"></Avatar></div>
                                                        <div style={{ flexGrow: '5', alignSelf: 'center'}}><b>You cannot be sure how.</b></div>
                                                        <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
                                                    </Paper>
                                                </Grid> 
                                                <br/>
                                                <Grid container spacing={2}>
                                                <Grid item xs={8} >
                                                    <Paper className={classes.paper} style={{boxShadow: 'none'}}>You have selected 2 products.</Paper>
                                                </Grid>
                                                <Grid item  xs={4}>
                                                    <Paper className={classes} style={{boxShadow: 'none'}}><Button variant="contained" style={{borderRadius: '20px', backgroundColor: 'black', color: 'white'}}><h5>Continue</h5></Button></Paper>
                                                </Grid>
                                                </Grid>
                                                </Paper>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>     
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
        </div>
    )
}
export default CategoriesCheckBox

