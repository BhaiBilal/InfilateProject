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
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";
import styled from "styled-components";


const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
        padding: '20px',
       // backgroundColor: "#EAEAEA",
    },

    paper: {
        padding: theme.spacing(2),
        marginBottom: '2%', 
    },

    paper1: {
        padding: theme.spacing(2),
      //  margin: 'auto', 
        marginBottom: '20px',
        // backgroundColor: "#EAEAEA",
      },
      

    cards_container: {
       // backgroundColor: "#EAEAEA",
        marginTop: '50px',  
    },
    main: {
        justifyContent: "center",
      //  backgroundColor: "#EAEAEA",
        
    },

   

    video: {
        boxShadow: 'none',
        width: 290,
    },

    center: {
       // backgroundColor: "#EAEAEA",
        boxShadow: 'none',
    },
    heading:{
      color:'rgb(100, 21, 255)'  
    },
    form: {
        boxShadow: 'none',
    }
    
    
  }));

    function Purchase() {
    const classes = useStyles();


    return (
        <div>
        <Header/>
        <div className={classes.grid}> 
        
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={9}>
                      <Paper className={classes.center}>
                        <h3 className={classes.pic}></h3>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                <Grid item xs={12} sm={4}>
                                    <Paper className={classes.paper}>
                                        <Grid item xs={12}>
                                            <Paper className={classes.video}>
                                            <iframe width="290" height="200" src="https://www.youtube.com/embed/xOEWLeRHq6k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><br/>
                                            <span> &nbsp;&nbsp;&nbsp;&#8377; &nbsp;</span><b>1900</b><br/><br/><hr/>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} className={classes.form}>
                                            <Paper className={classes.paper} style={{boxShadow: 'none'}}>
                                            <Input placeholder="Yout Name" inputProps={{ 'aria-label': 'description' }} fullWidth /><br/><br/>
                                            <Input placeholder="Your Email" inputProps={{ 'aria-label': 'description' }} fullWidth/><br/><br/>
                                            <Input placeholder="Your mobile no" inputProps={{ 'aria-label': 'description' }} fullWidth/><br/><br/>
                                            <TextField id="standard-multiline-static" placeholder="Your Massage" multiline rows={4} fullWidth/><br/><br/>
                                            <SubmitButton type="submit">
                                           <span className="text">Purchase</span>
                                             </SubmitButton> </Paper>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Paper className={classes.paper}>
                                        <Grid item xs={12}>
                                        <h3>How do I decide what to put in a paragraph?</h3>
                                        <b className={classes.heading}>What this handout is about</b><br/><br/>
                                        <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p><br/><br/>
            
                                        <b className={classes.heading}>Explain the example</b><br/><br/>
                                        <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p><br/><br/>

                                        <b className={classes.heading}>Explain the example</b><br/><br/>
                                        <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
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
         
        </div>
         <Footer/>
         </div>
    )
}
export default Purchase
