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
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Overview from "./Overview";
import UserReview from "./UserReview";
import Login1 from "./Login1";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Screenshots from "./Screenshots.js"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {useLocation} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list:{
    borderRadius:'64px',
    background: 'rgba(237,242,247)',
    marginBottom: '8px',
  }
}));

const Text = tw.h6`font-semibold text-lg`;
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

 
  headingText = "Domain Name",
  
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [tab1,setTab1] = React.useState(true)
  const [tab2,setTab2] = React.useState(false)
  const [tab3,setTab3] = React.useState(false)
  const [tab4,setTab4] = React.useState(false)
  const [dataState,setDataState] = React.useState([])
  const location= useLocation()

  React.useEffect(()=>{

    location.Post && setDataState(location.Post);

},[location])

console.log(dataState)

  const handleTab1 =()=>{
    setTab1(true)
    setTab2(false)
    setTab3(false)
    setTab4(false)
  }
  const handleTab2 =()=>{
    setTab1(false)
    setTab2(true)
    setTab3(false)
    setTab4(false)
  }
  const handleTab3 =()=>{
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
  }
  const handleTab4 =()=>{
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(true)
  }

  return (
    <div style={{paddingTop:"200px"}}>
    {/* <Header/> */}
    <AnimationRevealPage>
    
      <Container>
        <ContentWithPaddingXl>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item md={2}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem 
        className={classes.list}
          button
         // selected={selectedIndex === 0}
          onClick={handleTab1}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem className={classes.list}
          button
         // selected={selectedIndex === 1}
         onClick={handleTab2}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Screenshots" />
        </ListItem>
        <ListItem 
        className={classes.list}
          button
         // selected={selectedIndex === 0}
         onClick={handleTab3}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>

        <ListItem 
        className={classes.list}
          button
         // selected={selectedIndex === 0}
         onClick={handleTab4}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="UserReview" />
        </ListItem>
        
        
      </List>
     
      </Grid>
      <Grid item md={10} style={{marginTop:"-100px"}}>
       {tab1 &&   <Pricing data={dataState} />}
       {tab2 &&   <Screenshots data={dataState} />}
       {tab3 && <Overview data={dataState} />}
       {tab4 && <UserReview data={dataState} />}
        </Grid>
      </Grid>
      
    </div>
        </ContentWithPaddingXl>
      </Container>
     
    </AnimationRevealPage>
     </div>
  );
};


