import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
const Description = tw.h6`font-semibold text-lg`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const Heading = tw(SectionHeading)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
        padding: '20px',
      //  backgroundColor: "#EAEAEA",
        height: '650px'
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto', 
        textAlign: 'center',
      //  backgroundColor: "#EAEAEA",
        boxShadow: 'none',
    },

    paper1: {
        padding: theme.spacing(2),
        margin: 'auto', 
        marginBottom: '20px',
       // backgroundColor: 'black',  
       // backgroundColor: "#EAEAEA",
      },
      

    cards_container: {
       // backgroundColor: "#EAEAEA",
        marginTop: '50px',  
    },


    main: {
        justifyContent: "center",
       // backgroundColor: "#EAEAEA",
        marginTop: '100px'
        
    },

    main2: {
        justifyContent: "center",
      //  backgroundColor: "#EAEAEA", 
        boxShadow: 'none',       
    },

    Button: {
        width: '180px',
        borderRadius: '20px',
        backgroundColor: 'black',
        color: 'white',
    },

    center: {
        boxShadow: 'none',
    }

    
    
  }));

    function ThankYou() {
    const classes = useStyles();
    const heading = <> <span tw="text-primary-500">Thank</span><wbr/>You</>

    return (
        <div className={classes.grid}> 
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={10}>
                      <Paper className={classes.center}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Heading style={{color:'rgb(60, 13, 153)'}}>{heading}</Heading><br/>
                                <Description>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.</Description>
                                <Grid container spacing={0} className={classes.main2}>
                                <Grid item xs={12} sm={4} >
                                <Grid container spacing={4}>
                                <Grid item xs={6}>
                                <SubmitButton type="submit">
                                <span className="text">Get A Brochure</span>
                                </SubmitButton> 
                                </Grid>
                                <Grid item xs={6}>
                                <SubmitButton type="submit"><span className="text">Go To Home Page</span>
                                </SubmitButton> 
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
        </div>
    )
}
export default ThankYou
