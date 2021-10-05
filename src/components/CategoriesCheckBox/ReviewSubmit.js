import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";


const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
      //  padding: '20px',
        backgroundColor: "rgba(237,242,247)",
        height: '350px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto', 
        textAlign: 'center',
        boxShadow: 'none',
    },
    paper1: {
        padding: theme.spacing(2),
        margin: 'auto', 
        marginBottom: '20px',
        border: '1px solid', 
       
      },
    cards_container: {
        marginTop: '50px',  
    },
    main: {
        justifyContent: "center",
        marginTop: '100px'   
    },
    main2: {
        justifyContent: "center",
        boxShadow: 'none',       
    },
    review: {
        marginTop: '50px',
        marginBottom: '100px',
    },
    Grid: {
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
        width: '120px',
    },
    Button: {
      borderRadius: '30px',
      backgroundColor: 'black',
      color: 'white',
      height: '50px',
      width: '120px',
  },


    
  }));

  const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const Text = tw.h6`font-semibold text-lg`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;

    function ReviewSubmit() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
      const buttonRounded = true;
      const buttonRoundedCss = buttonRounded && tw`rounded-full`;


    return (
        <div className={classes.grid}> 
         <Header/>
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0} className={classes.space}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={10} className={classes.main1}  style={{boxShadow: 'none'}}>
                    <Grid item xs={12}>
                        <Paper className={classes} style={{display: 'flex', backgroundColor: 'rgba(237,242,247)', boxShadow: 'none'}}>
                            <div style={{ flexGrow: '3'}}></div>
                            <div style={{ flexGrow: '8'}}> <HeadingRow>  <Heading>Create Review</Heading>
                                                    </HeadingRow>
                                                    </div>
                            <div> <PrimaryButton as="a" style={{borderRadius:'60px'}}>
                Review
              </PrimaryButton></div>
                        </Paper>
                    </Grid><br/><br/>
                      <Paper className={classes.center} style={{boxShadow: 'none', backgroundColor: '#EAEAEA'}}>
                        <Grid item xs={12} style={{boxShadow: 'none', backgroundColor: '#EAEAEA'}}>
                            <Paper className={classes} style={{boxShadow: 'none'}}>
                                <Grid container spacing={0} className={classes.main2}>
                                <Grid item xs={12} sm={12} className={classes.main1}>
                                <Grid item xs={12} sm={12} style={{marginBottom: '100px', boxShadow: 'none'}}>
                                    <Paper className={classes.p1} style={{display: 'flex'}}>
                                      <Grid item xs={2}>
                                        <Paper className={classes} style={{height: '150px', width: '182px'}}><img style={{height: '150px'}} src="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" /></Paper>
                                      </Grid>
                                      <Grid item xs={6}>
                                        <Paper style={{marginTop: '40px', marginLeft: '20px', boxShadow: 'none'}}>
                                        <Text style={{marginBottom:'2%',color:'rgba(100,21,255)'}}>Some columns have multiple widths defined.</Text>
                                          <FeatureText>Fluid grids use columns that scale and resize content.
                                             A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.</FeatureText>
                                        </Paper>
                                      </Grid>
                                      <Grid item xs={4}>
                                        <Paper className={classes} style={{boxShadow: 'none'}}></Paper>
                                      </Grid>
                                    </Paper>
                                    <Grid item xs={12} >
                                      <Paper className={classes} style={{marginTop: '20px' , lineHeight: '25px', boxShadow:'none'}}>
                                      <Text style={{marginBottom: '10px'}}>Lorem ipsum is dummy</Text>
                                      <FeatureList>
                
                  <Feature>
                    <FeatureIcon />
                    <FeatureText>Some columns have multiple widths defined.</FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIcon />
                    <FeatureText>Some columns have multiple widths defined.</FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIcon />
                    <FeatureText>Some columns have multiple widths defined.</FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIcon />
                    <FeatureText>Some columns have multiple widths defined.</FeatureText>
                  </Feature>
              
              </FeatureList>
                                       </Paper>
                                </Grid>
                                </Grid>  
                                </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            </Grid>
          </div>
          <Footer />
        </div>
        
        
    )
}
export default ReviewSubmit
