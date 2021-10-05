import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import RoomIcon from '@material-ui/icons/Room';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    box: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        paddingTop: "100px"
    },

    box2: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        width: "60%",
    },

    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        height: 240,
        justifyContent: "space-around",
        align: "center",
        display: "flex",
    },
    padding: {
        padding: 5,
        justifyContent: 'space-around',
        fontWeight: 'bold',
    },
    morefilters: {
        padding: 5,
        fontWeight: "bold",
    },

    rating: {
        fontSize: "17px"
    },
    containerclass:{
        background: "#f3f3f3",
        borderRadius: "10px",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: 130,
        display: "flex",
        flexDirection: "column",
        paddingTop:"11px"
    },

    btn:{
        
        '&:focus': {
            outline:'none'
        },
    },

    icon:{
        '&:hover': {
            cursor:"pointer"
            
        },
    }

}
))

function CardItem(props) {
    const classes = useStyles();

    const handleClick = (para) => {
        console.log(para)
      };

    return (
            <>
           <Grid container spacing={6} xs={7} >

           {
                    [0, 1, 2, 3].map((value) =>
                    <Grid key={value} item xs={12}>
                    <Paper className={classes.paper}>

                        <Grid item xs={4}>
                            <Container fixed style={{height:"200px",paddingLeft:"0px",paddingRight:"5px"}}>
                            <img style={{ height: 'inherit', width: "inherit", objectFit: "cover" }}
                                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="" />
                            </Container>
                        </Grid>

                        <Grid item xs={6}>
                            <p style={{ fontWeight: "bold" }}>Lorem Ipsum is simply</p>
                            <Rating className={classes.rating} />
                            <Divider />

                            <Grid item xs={12} container style={{ paddingTop: "5px", paddingBottom: "5px",justifyContent:"space-around" }}>
                            <RoomIcon fontSize="small" />
                            <span style={{fontSize:"15px"}}>Lorem Ipsum is simply</span>
                            <ExpandMoreIcon fontSize="medium" />

                            </Grid>

                            <Divider />
                            <Grid item xs={12} container style={{ paddingTop: "5px", paddingBottom: "5px",justifyContent:"space-around" }}>
                            <RoomIcon fontSize="small" />
                            <span style={{fontSize:"15px"}}>Lorem Ipsum is simply</span>
                            <ExpandMoreIcon className={classes.icon}  fontSize="medium" onClick={()=>{handleClick(value)}} />

                            </Grid>
                            <Divider />
                        </Grid>



                        <Grid item xs={5} container>
                            <Container fixed className={classes.containerclass}>
                              
                            <p>Lorem</p>
                            <Grid item xs={12} container alignItems="center" style={{justifyContent:"space-between"}}>
                            <h3>₹1,135</h3>
                            <Button style={{borderRadius:"25px",backgroundColor:"#6495ed",fontSize:"12px"}} className={classes.btn} variant="contained" color="primary" size="small" endIcon={<ChevronRightIcon />}
                            
                            >
                            View
                            </Button>
                            </Grid>
                            
                            
                            </Container>

                            <Grid style={{justifyContent:"space-between"}} container item xs={12}>
                            <Grid style={{border:"1px solid #F0F0F0",borderRadius:"10px"}} item xs={5}>
                                Booking.com
                            </Grid>
                            
                            <Grid style={{border:"1px solid #F0F0F0",borderRadius:"10px"}} item xs={6}>
                                Our lowest price
                            </Grid>      
                            </Grid>

                        </Grid>

                    </Paper>
                <br/>
                </Grid> 
                )
                    }

                   
                </Grid>
                </>
    )
}

export default CardItem
