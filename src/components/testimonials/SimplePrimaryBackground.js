import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "twin.macro";
import "./SimplePrimary.css"
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg"
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Axios from "axios"
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from "axios";
import useMediaQuery from '@material-ui/core/useMediaQuery';






const useStyles = makeStyles((theme) => ({
  root: {
    
     
        flexBasis:'unset',
        maxWidth: '13.66667%',
        marginLeft:'10px'
 
  },


  root2: {
    
    maxWidth: '85%',
    marginLeft:'30px'

},

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop:'18px'
  },

  style2:{
    '& .eWkQlm ':{
      maxWidth:'1336px'
    },
  },

  button: {
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "bold",
    height: "inherit",
    background: "white",
    color: "#243e63",
    boxShadow: "none",
    border: "none",
    transition: "transform .2s",
    '&:hover': {
        background: "white",
        color:"#243e63",
        webkitTransform: "scale(1.1)", /* Safari 3-8 */
        transform: "scale(1.1)",
        boxShadow: "none",

    },
    '&:focus': {
        outline:'none'
    }
},

  
}));



const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;



export default ({
  subheading = "",
  heading = "Latest  Blogs",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  testimonials = [
    {
      customerName: "Education",
      customerProfile: "CTO, Coronax",
      imageSrc:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "It has been 8 months since we have switched to servana "
    },
    {
      customerName: "The Change",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1610928712141-a292b96f43e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Let's Unite",
      customerProfile: "Founder, Travana",
      imageSrc:
        " https://images.unsplash.com/photo-1556484687-30636164638b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGh1bWFuaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Medical & Healthcare",
      customerProfile: "CTO, Coronax",
      imageSrc:
        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "It has been 8 months since we have switched to servana "
    },
    {
      customerName: "Technology",
      customerProfile: "Founder, Travana",
      imageSrc:
        " https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Health & Wellness",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1608138404239-d2f557515ecb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfF9oYi1kbDRRLTRVfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null)
  const history = useHistory();
  const [blogData,setBlogData]=useState([])
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:950px)');
  const setting = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow:`${matches == true ? '3' : '4'}`,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }


  async function fetchData() {


  }

React.useEffect(() => {

  let cancel
  Axios('http://infilate.com/backend/public/api/app/blog/category/test/', {
      method: 'POST',
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res=>setBlogData(res.data.Data))
    .catch(e=>{
      if(axios.isCancel(e)) return
    })  
     
    return ()=> cancel() 
    
},[]);
 
const handleCardClick=(item)=>{
  history.push(`/BlogDetail/${item.id}`,{Post:item});
}
  return (
    <Grid container>


      <Grid item container style={{display:'flex',alignItems:'baseline'}}>
        <Grid item xs={2} className={classes.root}>
        <Heading style={{ fontSize: '2rem', fontWeight: '700', marginBottom: "20px", marginLeft: "",paddingTop:'50px'}}>
        <h1 className="service-head12" style={{ fontSize: "1.625rem", fontweight: "bold" }} >
              Latest Blogs</h1>
              </Heading>
        </Grid>

        <Grid className={classes.root2}  item xs={10}>
          <hr style={{paddingTop:'6px',borderTopWidth: '2.5px',borderColor:'#b4adad',opacity:'73%'}}/>
        </Grid>
        </Grid>
        
   

        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}


        </HeadingContainer>
      





        <div className="card-head">
          <Slider {...setting} style={{ width: "100%"}}  >
            {
              blogData.map((item,index) => ((
                <div class="card" key={index} onClick={() => handleCardClick(item)}>
                  <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "33px", marginLeft: "5px" }} class="title">{item.title}</p>

                  <CardMedia
                   className={classes.media}
                   image={`http://infilate.com/backend/public/images/${item.image}`}
                   title="Paella dish"
              />
          {/* <img style={{ width: "100%", borderRadius: "10px" }} src={`http://infilate.com/backend/public/images/${item.image}`} alt="John" /> */}

                  <p style={{ fontSize: "18px", fontWeight: "600", paddingTop: "10px" }}>{item.title1}</p>

                </div>
              )))
            }
          </Slider>
        </div>

        <Grid style={{display: "flex", justifyContent:'center'}} item xs={12}>
        <Button  variant="contained" color="primary" size="small" className={classes.button}>
        <Link to='/Mainblog'> View all blogs</Link>
        </Button>            
          </Grid>    
        
    </Grid>
  );
};
