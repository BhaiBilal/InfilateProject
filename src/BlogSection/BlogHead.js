import React,{useContext} from 'react';
import blog from "../images/blog.jpeg"
import { Card,CardMedia,CardContent,CardHeader,CardActions,Avatar,Typography,Divider,Chip,Box,Container } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles,useTheme, } from '@material-ui/core/styles';
import { useParams } from "react-router-dom"
import { DataContext } from './DataProvider'
import {useLocation} from 'react-router-dom'
import parse from 'html-react-parser';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import './Blog.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'inherit',

      '& .MuiCardMedia-root':{
        backgroundSize:'contain',
   
      },


    },

    root3: {
      width: 'inherit',
      '& .MuiCardMedia-root':{
        backgroundSize:'contain',
        },
        '& .MuiCardContent-root':{
          height:'132px',
          overflow:'hidden',
      },
    },

    media: {
      height: '15rem',
      paddingTop: '36.25%', // 16:9
    },


    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    content: {
      flex: '1 0 auto',
    },

    content2:{
      height:'132px',

    },

    cover: {
        height: '15rem',
        paddingTop: '36.25%',
        width: '50%'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },

    playIcon: {
      height: 38,
      width: 38,
    },

    gridStyles:{
      height:'max-content',
      position:'sticky',
      top:'100px'
    },

    forTypo3:{
      fontSize:"1.5rem",
      color:'#125d98',
      '&:hover': {
        textDecoration: 'underline',
        cursor:"pointer"
        
    }
  },

  avatar: {
    backgroundColor: red[500],
  },

  typo:{
      fontSize:'1.5rem',
      cursor:'text',
      fontWeight:'bold',
      '&:hover': {
        color:'red'
      },
    }

  }));


  



function BlogHead() {

     const {id} = useParams();
    const [blogdata,setBlogData] = React.useState([])
    const [blog,setBlog] = React.useState({})
    const [desc,setDesc] = React.useState('')
    const location= useLocation()
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery('(max-width:600px)');


    const history = useHistory();
    const handleClick = (post) => {
      history.push(`/BlogDetail/${post.id}`,{Post:post});
      // console.log(post.webinar_name)
    }







    React.useEffect(() => {

      let cancel
      
        axios('http://infilate.com/backend/public/api/app/blog/category/test/', {
          method: 'POST',
          cancelToken: new axios.CancelToken(c=>cancel=c)
        }).then((res) => {
          setBlogData(res.data.Data)
        }).catch(e=>{
          if(axios.isCancel(e)) return
        })   
        //  setBlogData(result.data.Data)
      
        return ()=> cancel()

      },[]);



    React.useEffect(() => {
      
           axios({
            method: 'POST',
            url:`http://infilate.com/backend/public/api/app/blog/blog-detail/${id}`
          }).then(res=> { 
            console.log(res.data.Data)
            setBlog(res.data.Data)
          }).catch(e=>
            console.log(e)
          )   
      },[id]);




    return (
        
        <div style={{paddingTop:'200px'}}>

          {/* <MetaTags>
            <meta name="title" property='og:title' content={`${blog && blog.title}`} />
            <meta property="og:type" content="blog" />
            <meta name="image" property='og:image' content={`http://infilate.com/backend/public/images/${blog && blog.media}`} />
            <meta name="description" property='og:description' content='Description that will show in the preview'/>
          </MetaTags> */}

      <div style={{display:'flex',justifyContent:'center'}}>    
      <Grid container lg={10} md={10} sm={11} >
      <Container maxWidth='lg'>
      
      <Card className={classes.root}>
      <Container maxWidth='sm' className={classes.details} style={{margin:"0px"}}>
      <CardContent>
          <br/>
          <br/>
        <Typography style={{fontSize:'2.5rem',color:"#125d98",fontWeight:"bold"}} variant="body2" color="textSecondary" component="p">
        {blog && blog.title}
        </Typography>
      </CardContent>

        <br/>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           <img src={`http://infilate.com/backend/public${blog?.user && blog.user[0]?.image}`} />
          </Avatar>
        }
        title={Object.getOwnPropertyNames(blog).length >= 1 ? blog.title1 : '...' }
        subheader={blog && blog?.created_at?.slice(0,10)}
      />
      </Container>
      <CardMedia
        className={classes.cover}
        image={`http://infilate.com/backend/public/images/${blog && blog.media}`} onError = {(e) => e.target.src = "/Assets/Images/blog.png"}
        title="Live from space album cover"
      />
    </Card>        

    </Container> 
    </Grid> 
    </div>
<br/>
<br/>
<br/>

<Box display='flex' justifyContent='center'>
<Grid container lg={9} xl={8} md={9} sm={12} xs={12} >
<Grid item lg={2} md={2} sm={2} xs={1} className={classes.gridStyles} style={{marginTop:`${matches == true ? '-25px' : '0px'}`}}>
    <div className="share1222">Share</div>
  <FacebookShareButton
        url={`${window.location.href}`}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        title={`${blog && blog.title}`}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
    <FacebookIcon style={{fontSize:'32px',color:'#3b5998',cursor:'pointer'}} />&nbsp;&nbsp;
    </FacebookShareButton>

    <TwitterShareButton
        title={`${blog && blog.title}`}
        url={`${window.location.href}`}
        hashtags={["hashtag1", "hashtag2"]}
      >
    <TwitterIcon style={{fontSize:'32px',color:'#1b9ff1',cursor:'pointer'}} />&nbsp;&nbsp;
    
    </TwitterShareButton>

{/* <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} > */}
     <LinkedinShareButton 
      title={`${blog && blog.title}`}
      url={`${window.location.href}`}
      hashtags={["hashtag1", "hashtag2"]}
    > 
     
    <LinkedInIcon 
    // onClick={handleLinkedIn} 
    style={{fontSize:'32px',color:'#2465b0',cursor:'pointer'}} />
    </LinkedinShareButton>
    {/* </a> */}
</Grid>

<Grid item lg={10} md={9} sm={10} xs={11}>
{/* <div dangerouslySetInnerHTML={{__html:desc}}>
{/* {location.state.Post.description} */}
{/* </div> */}

{/* {location.state.Post.description} */}
<div className='changeToDefault'>
<div dangerouslySetInnerHTML={ {__html: blog && blog.description}} />
</div>


{/* <Container maxWidth='lg' style={{display:'flex',padding:'0px'}}>
  <img style={{width: '10%', height: '10%',objectFit:'contain',borderRadius:'20%'}} 
  src={`http://infilate.com/backend/public/${blog && blog.user[0].image}`} alt='user-image'/>
  <div style={{display:'flex',flexDirection:'column',paddingLeft:'30px'}}>
  <p style={{fontSize: '20px',fontWeight:'bold'}}>
  {`${blog && blog.user[0].f_name} ${blog && blog.user[0].l_name}`}
</p>

<p>{blog && blog.user[0].about}</p>
</div>
</Container> */}

</Grid>

</Grid>

</Box>

{/*     
    <Box mx={22} pt={25} pb={15}>

     <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
     <Typography className={classes.typo}>Recommended Articles</Typography>
       </Grid>   
    
    <Grid style={{display:'flex',justifyContent:'space-evenly', paddingTop:'35px'}} container xs={12} spacing={5}>
    {blogdata && blogdata.slice(0,3).map((item,index)=>
     <Grid item xs={3} key={index} style={{}}>

     <Card className={classes.root3} elevation={0}>
         <h1 className="scanfcode">{item.category_name ? item.category_name : 'no data'}</h1>
       <CardMedia
         className={classes.media}
         image={`http://infilate.com/backend/public/images/${item.image}`}
       />
       <CardContent onClick={()=>handleClick(item)}>
         <Typography style={{display:'-webkit-box',webkitLineClamp:'3',webkitBoxOrient:'vertical',overflow:'hidden'}} className={classes.forTypo3} variant="body2" color="textSecondary" component="p">
             {item.title}
         </Typography>
       </CardContent>
       <CardHeader style={{paddingTop:"0px",paddingLeft:"16px",paddingRight:"16px",paddingBottom:"16px"}}
         avatar={
           <Avatar aria-label="recipe" className={classes.avatar}>
             R
           </Avatar>
         }
         title={item.title ? item.title1 : ""}
         subheader={`by ${item.user.name}`}
       />
     <Divider variant="middle"/>
     </Card>                     
     </Grid>       
    
    )}
    </Grid>
  </Box> */}

</div>
    )
}

export default BlogHead
