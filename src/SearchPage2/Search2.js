import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CardItem2 from './CardItem2'
import Hero from '../pages/Hero'
import Container from '@material-ui/core/Container';



const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
            background: "white"
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
            background: "white"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: "none"

            },
            '&:hover fieldset': {
                border: "none"

            },
            '&.Mui-focused fieldset': {
                border: "none"

            },
        },
    },
})(TextField);



const useStyles = makeStyles((theme) => ({
    box: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        paddingTop: "140px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        // border: "1px solid black"
    },

    box2: {
        paddingTop: "40px",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        paddingLeft: "20px",
        background: "#f3f3f3",
    },

    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        height: 200,
        justifyContent: "space-around",
        align: "center",
        display: "flex",
    },
    padding: {
        padding: 5,
        justifyContent: 'space-around',
        fontWeight: 'bold',
        borderRadius: "8px",
        color: "#424b5a",
        background:"#fff",
        border:'1px solid #6495ed',
        
        '&:hover': {
            backgroundColor: '#6495ed',
            color: 'white',
            
        },
        '&:focus': {
            outline:'none'
        },
    },
    morefilters: {
        padding: 5,
        fontWeight: "bold",
        borderRadius: "15px",
        color: "#424b5a"
    },

    rating: {
        fontSize: "17px"
    },
    containerclass: {
        background: "#fce4ec",
        borderRadius: "25px",
        marginTop: "30px",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: 120,

    },

    textfieldColor: {
        color: 'black',
        ':focus': {
            color: "black"
        },
        focused: "black"
    }

}
))

function Search2() {

    const [tab, setTab] = React.useState(1);

    const toggleTab = (index) => {
        setTab(index)
    }


    const classes = useStyles();

    return (
        <div>
            <Box
                component="span"
                mx={0} //margin

                className={` ${classes.box} ${classes.insideBox}`}
            >
                {/* <Button variant="contained" color="primary" style={{ height: 35, width: 100, fontSize: "14px", background: "#424b5a" }}>
                    Institute
                </Button> */}
                <br />

                <Grid container spacing={3}>
                    <Grid style={{ padding: "0px" }} item xs={12}>
                        <Box maxWidth="inherit">

                            {/* <HeadingContainer style={{ marginBottom: '3%', paddingLeft: "10rem" }}>
                                <HeadingRow>
                                    <Heading style={{ fontSize: '2rem', fontWeight: '600' }}>{heading}</Heading>
                                </HeadingRow>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                            </HeadingContainer> */}
                            <div style={{ width: "100%", height: "220px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f6f6f6" }}>
                                <div style={{ backgroundColor: "#f5f5f6" }} className="form-hero">
                                    <div className="form-cont">

                                        <div className="category">
                                            <ul className="category-item">
                                                <li className="category-list">
                                                    {/* <a className={tab === 1 ? "tabs active" : "tabs"} onClick={() => { toggleTab(1) }} >Tools</a> */}
                                                    <a className={tab === 2 ? "tabs active" : "tabs"} onClick={() => { toggleTab(2) }}   >Search</a>
                                                    {/* <a className={tab === 3 ? "tabs active" : "tabs"} onClick={() => { toggleTab(3) }} >Agency</a> */}
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{ overflow: "hidden", display: "flex", marginLeft: "20px", marginRight: "20px", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", borderRadius: "0 15px 15px 15px", boxShadow: "2px 4px 16px #888888" }}>
                                            <div class="col-12">
                                                <label class="visually-hidden" for="inlineFormInputGroupUsername"></label>
                                                <div className="flex-item" style={{ width: "400px", height: "50px", borderRadius: "20px" }}>

                                                    <input style={{ width: "415px", height: "50px", borderRadius: "0 0 0 20px", outline: "none" }} type="text" id="inlineFormInputGroupUsername" placeholder="What you looking for" />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div >

                                                    <select className="select-style" id="inlineFormSelectPref">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div >

                                                    <select className="select-style" id="inlineFormSelectPref">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div >

                                                    <select className="select-style" id="inlineFormSelectPref">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>



                                                <div >
                                                    <button style={{ borderRadius: "10px", width: "160px", height: "50px" }} type="submit" className="search-btn"><a>Search</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
<br/>

                                <Grid container spacing={2} style={{justifyContent:"center"}} >

                                    <Grid item xs={2}>
                                        <Button variant="outlined" size="large" color="#6495ed" className={classes.padding} fullWidth="true"
                                            endIcon={<span style={{ fontSize: "inherit" }}>$ 1400+</span>}
                                        >Price
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Button variant="outlined" size="large" color="#424b5a" className={classes.padding} fullWidth="true"
                                        >Free Services
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Button variant="outlined" size="large" color="#424b5a" className={classes.padding} fullWidth="true"
                                        >More Filters
                                        </Button>
                                    </Grid>

                                </Grid>



                                {/* <div style={{ width: "100%", backgroundColor: "#f5f5f6" }}>
                                    <div  ><h1 style={{ fontSize: "1.2rem", fontWeight: "700", marginLeft: "180px", marginBottom: "10px" }}>We Compare multiple deals here</h1></div>

                                </div> */}
                                {/* <Grid style={{ backgroundColor: "#f5f5f6", paddingLeft: "11rem" }} container  >
                                    <Grid item xs={2}>
                                        <img style={{ width: "120px" }} src={logo1} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img style={{ width: "120px" }} src={logo2} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img style={{ width: "120px" }} src={logo3} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img style={{ width: "120px" }} src={logo2} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img style={{ width: "120px" }} src={logo5} />
                                    </Grid> */}
                                {/* <Grid item xs={2}>
  <img src={logo6}/>
  </Grid> */}
                                {/* </Grid> */}
                            </div>
                            {/* <div className="down-button" >
                                <button><a>I-metric</a></button>
                                <button><a>Server</a></button>
                            </div> */}


                            {/* <DecoratorBlob1 />
<DecoratorBlob2 /> */}
                        </Box >
                    </Grid>
                </Grid>







            </Box>
            {/* <br /> */}

            <Box component="div"
                ml={18} //margin
                // p={5}
                maxWidth="xs"
                className={` ${classes.box2} ${classes.insideBox}`}>
                {
                    [0, 1, 2, 3].map((value) =>
                        <CardItem2 key={value} />
                    )
                }
            </Box>
        </div>
    )
}

export default Search2
