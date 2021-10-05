import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Card, Divider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Map from './map/Map';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgba(100,21,255)',
    padding: '5%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper1: {
    marginTop:'4%'
  },
  select:{
      width:'50%',
     
  },
}));

const Text = tw.h6`font-semibold text-lg`;
const Select = tw.select`bg-white px-8 py-4 rounded-lg font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Option = tw.option`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

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
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;


export default ({

  classes = useStyles(),
  headingText = "Domain Name",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Variation of passages of Lorem Ipsum",
       date: "April 21, 2020",
    //   title: "Safely Travel in Foreign Countries",
      description: "Contrary to popular belief",
      descriptio1: "Contrary to popular belief",
      description2: "Contrary to popular belief",
      url: "https://timerse.com",
      featured: true
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Variation of passages of Lorem Ipsum",
         date: "April 21, 2020",
    //   title: "Safely Travel in Foreign Countries",
    description: "Contrary to popular belief",
    descriptio1: "Contrary to popular belief",
    description2: "Contrary to popular belief",
     url: "https://timerse.com",
      featured: true
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Variation of passages of Lorem Ipsum",
         date: "April 21, 2020",
    //   title: "Safely Travel in Foreign Countries",
    description: "Contrary to popular belief",
    descriptio1: "Contrary to popular belief",
    description2: "Contrary to popular belief",
      url: "https://timerse.com",
      featured: true
    },
    
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <div>
    <Header/>
    <AnimationRevealPage>
    
      <Container>
        <ContentWithPaddingXl>
        <div className={classes.root}>
        <Grid container spacing={4}>
      <Grid item xs={2}>
      <Paper className={classes.paper}>Institute</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Input type="name" placeholder="Price" />
        </Grid>
        <Grid item xs={3}>
        <Input type="name" placeholder="Free Services" />
        </Grid>
        <Grid item xs={3}>
        <Input type="name" placeholder="Filters" />
        </Grid>
        <Grid item xs={2}>
        <SubmitButton type="submit" value="Submit" style={{marginTop:'0rem'}}><SearchIcon/>Search</SubmitButton>
        </Grid>
      </Grid>
    </div>
          <HeadingRow>
            {/* <Heading>{headingText}</Heading> */}
            
          </HeadingRow>
          {/* <Text>The Auto-layout makes the items equitably share the available space. That also means you can
                 set the width of one item and the others will automatically resize around it.</Text> */}
                 <Grid container spacing={2}>
                 <Grid item md={8}>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a">
                  <Image imageSrc={post.imageSrc} style={{width:'24.666667%',height:'14rem'}}/>
                  <Info>
                    <Category>{post.category}</Category>
                    {/* <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title> */}
                    {post.featured && post.description && <Description>{post.description}</Description>}
                    <StarIcon/>  <StarIcon/>  <StarIcon/>  <StarIcon/>  <StarBorderIcon/>
                    <Description>
                  
                    <Select className={classes.select}>
                    <LocationOnIcon/>
                <Option>Pin Code</Option>
                <Option>delhi</Option>
                <Option>mumbai</Option>
                <Option>indore</Option>
                </Select>
                </Description>
              
                    {post.featured && post.description && <Description>{post.description1}</Description>}
                    <Description style={{float:'right'}}>Rs 3849</Description>
                    {post.featured && post.description && <Description>{post.description2}</Description>}
                    <CreationDate>{post.date}</CreationDate>
                    <LoadMoreButton style={{float:'right',margin:'0'}}>View</LoadMoreButton>
                  </Info>
                
                </Post>
              </PostContainer>
            ))}
          </Posts>
          <Paper className={classes.paper1}>
            <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card><img style={{height:'196px'}} src="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" /></Card>

            </Grid>
            <Grid  item xs={5}>
              <h4>Lorem Ipsum is simply</h4>
             
              <Description> <StarIcon/>  <StarIcon/>  <StarIcon/>  <StarIcon/>  <StarBorderIcon/></Description>
              <Divider/>
              <div style={{padding:'8px'}}>
                  <Description style={{display:'flex'}}>  <LocationOnIcon/> 
                  <h4>Lorem Ipsum is simply</h4><ExpandMoreIcon/></Description>
               </div>
                <Divider/>
                <Description>Students</Description>
                <Description>Subjects</Description>

            </Grid><Grid  item xs={4}>
              <div style={{background:'rgba(237,242,247)', display:'flex',marginTop:'18%',borderRadius:'10px'}}>
              <Description style={{padding:'16px'}}>Rs 1234
            <LoadMoreButton style={{float:'right',marginLeft:'64px',marginRight:'0px',marginTop:'0px',marginBottom:'0px'}}>View</LoadMoreButton>
            </Description>
            </div>
            </Grid></Grid>
          </Paper>
          </Grid>

          <Grid item md={4}>
          <Posts>
            {/* <Map/> */}
            </Posts>
          </Grid>
          </Grid>

          {/* {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )} */}
            
        </ContentWithPaddingXl>
      </Container>
     
    </AnimationRevealPage>
     <Footer />
     
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
