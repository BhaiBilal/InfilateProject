import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from "@material-ui/core/Grid"
import tw from "twin.macro";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { css } from "styled-components/macro";
import webinars from "../images/webinars.jpg"
import webinars1 from "../images/webinars1.jpg"
import webinars2 from "../images/webinars2.jpg"
import webinars3 from "../images/webinars3.jpg"
import webinars4 from "../images/webinars4.jpg"
import webinars5 from "../images/webinars5.jpg"
import webinars6 from "../images/webinars6.jpg"
import webinars7 from "../images/webinars7.jpg"
import webinars8 from "../images/webinars8.jpg"
import webinars9 from "../images/webinars9.jpg"
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { postData } from "components/FetchServices";
import ButtonBase from '@material-ui/core/ButtonBase'
import Axios from "axios"
import axios from "axios";



const useStyles = makeStyles({
  banner: {
    marginTop: "24px",
    marginBottom: "40px",
    width: "100%",
    height: "160px",
    position: "relative"
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  host: {
    position: "absolute",
    padding: "20px 20px",
    "& h2": {
      color: "white",
      fontSize: "30px"
    },
    "& Button": {
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white"

    }

  },
  cardHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    outline: "none",
  },
  root: {
    maxWidth: 329,
    width : "100%",
    marginBottom: "40px",
    transition: "all 0.5s ease",
    outline: "none",
    "&:hover": {
      boxShadow: "5px 5px 15px grey",
      transform: "translateY(-10px)"

    }
  },
  media: {
    height: 185,
    outline: "none"
  },
  priceButton: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#7C83FD",
    textTransform: "capitalize"
  },
  onlineButton: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#476072",
    textTransform: "capitalize"
  }
});


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const data = [
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars


  },
  {
    webinar_name: "Mai hoon ghatorkach",
    webinar_date: "june 13",
    price: 120,
    image: webinars1


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars2


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars3


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars4


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars5


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars6


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars7


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars8


  },
  {
    webinar_name: "Total defence Run-Ride-walk",
    webinar_date: "june 13",
    price: 120,
    image: webinars9


  }]

export default ({
  headingText = "All Webinars",
  posts = [

    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(6);

  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };


  const [webinarss, setWebinarss] = useState(data)
  const [webinar, setWebinar] = useState([])
  const classes = useStyles();

  React.useEffect(() => {

    let cancel
    
      axios('http://infilate.com/backend/public/api/app/webinars/webinar-list', {
        method: 'POST',
        cancelToken: new axios.CancelToken(c=>cancel=c)
      }).then((res) => {
        setWebinar(res.data.Data)
      }).catch(e=>{
        if(axios.isCancel(e)) return
      })   
      //  setBlogData(result.data.Data)
    
      return ()=> cancel()

    },[]);

  //   const handleScroll=()=>{



  //  }

  // window.removeEventListener('scroll', Chalu())

  const history = useHistory();
  const handleClick = (post) => {

    history.push({pathname:`/webinarDetails/${post.id}`});
    // console.log(post.webinar_name)
  }

  // var x = window.location.href;
  // console.log(x)

  // if(x==window.location.href){
  //   window.location.reload()
  //   window.stop()
  // }

  return (

    
    <div>

      <AnimationRevealPage>
        <Container>
          <ContentWithPaddingXl>
            <div className={classes.cardHead} >
              {webinar &&  webinar.slice(0,visible).map((item,index) => (
                
                    <Card className={classes.root} key={index} onClick={() => handleClick(item)}>

                    <CardActionArea >
                      <CardMedia
                        className={classes.media}
                        image={`http://infilate.com/backend/public/images/${item.image}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">
                          {item.webinar_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.webinar_date}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                      <Button className={classes.priceButton}>
                        &#8377;{item.price}<span style={{ fontSize: "14px", color: "grey", fontWeight: "400" }}> /Onwards </span>
                      </Button>
                      <Button className={classes.onlineButton}>
                        <span> <FiberManualRecordIcon style={{ color: "red", fontSize: "14px", marginBottom: "4px" }} /> </span> Online
                      </Button>
                    </CardActions>
  
                  </Card>

                  ))}
            </div>
            
              <ButtonContainer>
                <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
              </ButtonContainer>
             
            
          </ContentWithPaddingXl>
        </Container>

      </AnimationRevealPage>

    </div>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});
