import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CardItem from './CardItem'
import List from './List/List'
import Map from './map/Map'
import Hero from '../pages/Hero'
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';  
import PropTypes from 'prop-types';  
import { getPlacesData } from '../api/api'
import { Autocomplete } from '@react-google-maps/api';
import useStyles2 from './styles'


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

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);



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

function Search() {
    const [tab, setTab] = React.useState(1);
    const [places,setPlaces] = React.useState([])
    const [coordinates,setCoordinates] = React.useState({})
    const [bounds,setBounds] = React.useState({})
    const [childClicked,setChildClicked] = React.useState(null)
    const [isLoading,setIsLoading] = React.useState(false)
    const [type, setType] = React.useState('restaurants')
    const [rating, setRating] = React.useState('')
    const [autocomplete,setAutoComplete] = React.useState(null)

    const onLoad = (autoC) => {setAutoComplete(autoC)}
    const onPlaceChanged =()=> {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()
        setCoordinates({lat,lng})
    }

    const toggleTab = (index) => {
        setTab(index)
    }
    const classes = useStyles();
    const classes2 = useStyles2();
    React.useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } })=>{
        setCoordinates({lat:latitude, lng: longitude })
        })
    },[])


    React.useEffect(()=> {
        setIsLoading(true)
        // console.log(coordinates.lat)
        getPlacesData(bounds.sw, bounds.ne).then((data)=> {
            
            setPlaces(data)
            setIsLoading(false)
        })
    },[bounds])


    // let url='https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAb080HceD21mYcPce8sUyS0guj5bYxSGU'

    // React.useEffect(()=> {
    //     setIsLoading(true)
    //     // console.log(coordinates,bounds)
    //     getPlacesData(bounds.sw,bounds.ne).then((data)=>{
            
    //         setPlaces(data)
    //         setIsLoading(false)
    //     })
    // },[coordinates,bounds])

    console.log(places)



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
                                                    <a className={tab === 2 ? "tabs active" : "tabs"} onClick={() => { toggleTab(2) }}   >Institute</a>
                                                    {/* <a className={tab === 3 ? "tabs active" : "tabs"} onClick={() => { toggleTab(3) }} >Agency</a> */}
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{ overflow: "hidden", display: "flex", marginLeft: "20px", marginRight: "20px", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", borderRadius: "0 15px 15px 15px", boxShadow: "2px 4px 16px #888888" }}>
                                            <div class="col-12">
                                                <label class="visually-hidden" for="inlineFormInputGroupUsername"></label>
                                                <div className="flex-item" style={{ width: "400px", height: "50px", borderRadius: "20px" }}>


                                                {/* <Autocomplete onload={onLoad} onPlaceChanged={onPlaceChanged}> */}
                                              
                                                <input style={{ width: "415px", height: "50px", borderRadius: "0 0 0 20px", outline: "none" }} type="text" id="inlineFormInputGroupUsername" placeholder="What you looking for" />
                                              
                                                {/* </Autocomplete> */}
                                                    
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

                                    <Grid style={{justifyContent:"space-between"}} container item xs={2}>
                                     <Grid item xs={2}>
                                     <p>price</p> 
                                     </Grid>   
                                    
                                     <Grid item xs={4}>
                                     <p>₹44,000+</p> 
                                     </Grid>
                                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                                        {/* <Button variant="outlined" size="large" color="#6495ed" className={classes.padding} fullWidth="true"
                                            endIcon={<span style={{ fontSize: "inherit" }}>$ 1400+</span>}
                                        >Price
                                        </Button> */}
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
            
    <Grid container spacing={3} style={{width: '100%',}}>
        <Grid item xs={12} md={4}>
            <List 
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            />
            </Grid>

        <Grid item xs={12} md={8}>
            <Map 
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                setChildClicked={setChildClicked}
            />
            </Grid>
    </Grid>
</div>
    )
}

export default Search
