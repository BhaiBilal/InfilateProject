import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import zoom from '../../images/zoom.jpg';
import apple from '../../images/apple-icon.png';
import { PlayCircleFilledOutlined } from '@material-ui/icons';

const Heading = tw(SectionHeading)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
        padding: '20px',
        height: '650px'
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto', 
        textAlign: 'center',
        boxShadow: 'none',
        background:'rgba(237,242,247)',
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
        marginTop: '100px',
        marginBottom: '100px',
    },

    Button: {
        borderRadius: '30px',
        backgroundColor: 'rgba(60,13,153)',
        color: 'white',
        height: '50px',
        width: '120px',
        
    },

    p1: {
        borderRadius: '30px',
        display: 'flex',
        border: '1px solid rgba(100,21,255)',
    }
   

    
    
  }));

    function ReviewBox() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
      const heading = <> <span tw="text-primary-500">Write A Review</span><wbr/></>

    return (
        <div className={classes.grid}> 
          <div className={classes.cards_container}>
          
            <Grid container> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={10} className={classes.main1}>
                      <Paper className={classes.center}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            <Heading style={{color:'rgb(60, 13, 153)',marginBottom:'4%'}}>{heading}</Heading><br/>
                                <Grid container spacing={0} className={classes.main2}>
                                <Grid item xs={12} sm={10} className={classes.main1}>
                                <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.p1} style={{}}>
                                        <div><Avatar src={zoom} style={{marginLeft: '10px', marginTop: '5px'}}></Avatar></div>
                                        <div style={{ flexGrow: '5', alignSelf: 'center',color:'1px solid rgba(100,21,255)'}}><b>You cannot be sure how.</b></div>
                                        <div><Button variant="contained" className={classes.Button} color="primary">Review</Button></div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={6} style={{marginBottom: '100px'}}>
                                    <Paper className={classes.p1} style={{borderRadius: '30px', display: 'flex'}}>
                                        <div><Avatar src={apple} style={{marginLeft: '10px', marginTop: '5px'}}></Avatar></div>
                                        <div style={{ flexGrow: '5', alignSelf: 'center',color:'1px solid rgba(100,21,255)'}}><b>You cannot be sure how.</b></div>
                                        <div><Button variant="contained" className={classes.Button}  color="primary">Review</Button></div>
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
           
          </div>
        </div>
    )
}
export default ReviewBox
