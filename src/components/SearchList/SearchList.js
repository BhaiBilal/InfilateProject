import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import Grid from '@mui/material/Grid';
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




const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;







function SearchList() {

    const [visible, setVisible] = useState(6);

    const onLoadMoreClick = () => {
      setVisible(v => v + 6);
    };
  
  
    // const [webinarss, setWebinarss] = useState(data)
    const [searchData, setSearchData] = useState([])
    const classes = useStyles();


    React.useEffect(() => {

        let cancel
        
          axios('http://infilate.com/backend/public/api/search/all-search', {
            method: 'POST',
            data:{
                name:'digital'
            },
            cancelToken: new axios.CancelToken(c=>cancel=c)
          }).then((res) => {
            //   console.log(res)
            setSearchData(res.data.data)
          }).catch(e=>{
            if(axios.isCancel(e)) return
          })   
          //  setBlogData(result.data.Data)
        
          return ()=> cancel()
    
        },[]);

    const history = useHistory();
    const handleClick = (post) => {
  
      history.push({pathname:`/webinarDetails/${post.id}`});
      // console.log(post.webinar_name)
    }

    return (
        <Container style={{paddingTop:'160px'}}>
          <ContentWithPaddingXl>
            <div className={classes.cardHead} >
              {searchData &&  searchData.slice(0,visible).map((item,index) => (
                
                    <Card className={classes.root} key={index} onClick={() => handleClick(item)}>

                    <CardActionArea style={{height:'229px'}} >
                      <CardMedia
                        className={classes.media}
                        image={`http://infilate.com/backend/public/images/${item.image}`}
                        title="Contemplative Reptile"
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">
                          {item.webinar_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.webinar_date}
                        </Typography>
                      </CardContent> */}
                    </CardActionArea>
                    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>

                       <Grid style={{display:'flex',justifyContent:'space-between'}} item xs={12}>
                        <p style={{fontSize:'20px',fontWeight:'bold'}}>{item.name}</p>
                        <p className='uniform_color_coding'>{item.type}</p>
                    </Grid> 
                      {/* <Button className={classes.priceButton}>
                        &#8377;{item.price}<span style={{ fontSize: "14px", color: "grey", fontWeight: "400" }}> /Onwards </span>
                      </Button>
                      <Button className={classes.onlineButton}>
                        <span> <FiberManualRecordIcon style={{ color: "red", fontSize: "14px", marginBottom: "4px" }} /> </span> Online
                      </Button> */}
                    </CardActions>
  
                  </Card>

                  ))}
            </div>
            
              <ButtonContainer>
                <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
              </ButtonContainer>
          </ContentWithPaddingXl>
        </Container>
    )
}

export default SearchList
