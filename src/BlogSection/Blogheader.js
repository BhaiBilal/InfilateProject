import React,{useContext,useEffect} from 'react'
import blog from "../images/blog.jpeg"
import {BrowserRouter as Router,Link} from "react-router-dom"
import { DataContext } from './DataProvider'
import { useState } from 'react'
import Container from '@material-ui/core/Container';
import Axios from "axios"
import tw from "twin.macro";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@mui/material/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {

      '& .MuiCardMedia-root':{
        backgroundSize:'contain',
   
      },

      '& .MuiCardContent-root':{
        maxHeight:'155px'
    },

      width: 'inherit',   

    },
    root2: {
      width: 'inherit',
      '& .MuiCardMedia-root':{
        backgroundSize:'contain',
   
      },

      '& .MuiCardContent-root':{
        maxHeight:'140px'
    },

    },


    root3: {
      width: 'inherit',
      '& .MuiCardMedia-root':{
        backgroundSize:'cover',
        },
        '& .MuiCardContent-root':{
          maxHeight:'132px',
          overflow:'hidden',
      },
    },

    media: {
      height: '15rem',
      paddingTop: '36.25%', // 16:9
    },

    
    media2: {
      height: 0,
      paddingTop: '36.25%', // 16:9
    },

    avatar: {
      backgroundColor: red[500],
    },

    avatar2: {
      backgroundColor: red[500],
    },
    forTypo:{
      fontSize:"2.5rem",
      color:'#125d98',
      '&:hover': {
        textDecoration: 'underline',
        cursor:"pointer"
        
    },
  },
    forTypo2:{
      fontSize:"2.875rem",
      color:'#125d98',
      '&:hover': {
        textDecoration: 'underline',
        cursor:"pointer"
        
    }
  },

  forTypo3:{
    fontSize:"1.5rem",
    color:'#125d98',
    '&:hover': {
      textDecoration: 'underline',
      cursor:"pointer"
      
  }
},


  chip: {
    margin: theme.spacing(0.5),
    '&:hover': {
      background: '#3f51b5',
      cursor:"pointer",
      color:"white"
  },
  },

  section2: {
    margin: theme.spacing(2),
  },

  }));


 function MainBlog() {
    const [query,setQuery]=useState('')
    const [blogData,setBlogData]=useState([])
    const classes = useStyles();

    const history = useHistory();
    const handleClick = (post) => {
      history.push(`/BlogDetail/${post.id}`);
      // console.log(post.webinar_name)
    }
  

    function renderFiltered(){
      return(
        <Box py={8} px={4} display='flex' justifyContent='center'>
         <Grid container lg={8} md={10} sm={10} spacing={{xs:4}} >
          {a.map((item,index)=>
           <Grid item lg={4} md={4} sm={5} xs={12} key={index} style={{}}>

           <Card className={classes.root3} elevation={0}>
               <h1 className="scanfcode">{item.category_name ? item.category_name : 'no data'}</h1>
             <CardMedia
               className={classes.media}
               image={`http://infilate.com/backend/public/images/${item.media}`}
             />
             <CardContent onClick={()=>handleClick(item)}>
               <Typography style={{display:'-webkit-box',webkitLineClamp:'3',webkitBoxOrient:'vertical',overflow:'hidden'}} className={classes.forTypo3} variant="body2" color="textSecondary" component="p">
                   {item.title}
               </Typography>
             </CardContent>
             <CardHeader style={{paddingTop:"0px",paddingLeft:"16px",paddingRight:"16px",paddingBottom:"16px"}}
               avatar={
                 <Avatar aria-label="recipe" className={classes.avatar}>
                  <img src={`http://infilate.com/backend/public${item?.user[0]?.image}`} />
                 </Avatar>
               }
               title={item.title ? item.title1 : ""}
               subheader={`by ${item?.user[0]?.f_name + item?.user[0]?.l_name}`}
             />
           <Divider variant="middle"/>
           </Card>                          
           </Grid>              
          )}
          </Grid>
   </Box>
      ) 
    }

    
    
    const defaultRenderFiltered=()=>{
      return(
        <Box py={8} px={4} display='flex' justifyContent='center'>
          <Grid container lg={8} md={10} sm={10} spacing={{xs:4}} >
          {blogData && blogData.slice(4).map((item,index)=>
           <Grid item lg={4} md={4} sm={5} xs={12} key={index} style={{marginRight:'15px'}} >

           <Card className={classes.root3} elevation={0} style={{}}>
               <h1 className="scanfcode">{item.category_name ? item.category_name : 'no data'}</h1>
             <CardMedia
               className={classes.media}
               image={`http://infilate.com/backend/public/images/${item.media}`} />
             <CardContent onClick={()=>handleClick(item)}>
               <Typography style={{display:'-webkit-box',webkitLineClamp:'3',webkitBoxOrient:'vertical',overflow:'hidden'}} className={classes.forTypo3} variant="body2" color="textSecondary" component="p">
                   {item.title}
               </Typography>
             </CardContent>
             <CardHeader style={{paddingTop:"0px",paddingLeft:"16px",paddingRight:"16px",paddingBottom:"16px"}}
               avatar={
                 <Avatar aria-label="recipe" className={classes.avatar}>
                   <img src={`http://infilate.com/backend/public${item?.user[0]?.image}`} />
                 </Avatar>
               }
               title={item.title ? item.title1 : ""}
               subheader={`by ${item?.user[0]?.f_name + item?.user[0]?.l_name}`}
             />
           <Divider variant="middle"/>
           </Card>                     
           </Grid>       
          
          )}
          </Grid>
        </Box>

      ) 
    }

    useEffect(() => {

      let cancel
      
        Axios('http://infilate.com/backend/public/api/app/blog/blog-list', {
          method: 'POST',
          cancelToken: new axios.CancelToken(c=>cancel=c)
        }).then((res) => {
          setBlogData(res.data.Data)
          console.log(res.data.Data)
        }).catch(e=>{
          if(axios.isCancel(e)) return
        })   
        //  setBlogData(result.data.Data)
      
        return ()=> cancel()

      },[]);

        let a=[]
        a=blogData && blogData.filter(item=>item.category_name==query)
        console.log(a)



        
    const filterRender=()=>{

      if(query=='Productivity'){
        return(renderFiltered())
      }

      else if(query=='Sales'){
        return(renderFiltered()) 
      }

      else if(query=='Technology'){       
        return(renderFiltered())
      }

      else if(query=='Marketing'){
        return(renderFiltered())
      }

      else if(query=='Design'){    
        return(renderFiltered())
      }

      else{
        return(defaultRenderFiltered())
      }
    }
    


    return (
        <>
            
    {/* first row                */}
    <Container maxWidth="md" key={1} style={{paddingTop:"160px"}}>

    <Card className={classes.root} elevation={0}>
        <h1 className="scanfcode">{blogData && blogData[0] ? blogData[0].category_name : "no data"}</h1>
      <CardMedia
        className={classes.media}
        image={`http://infilate.com/backend/public/images/${blogData[0]?.media ? blogData[0]?.media   : ' "/Assets/Images/webinar.png"'}`}
      />
      <CardContent  onClick={()=>handleClick(blogData[0] && blogData[0])}>
        <Typography style={{display:'-webkit-box',webkitLineClamp:'2',webkitBoxOrient:'vertical',overflow:'hidden'}} className={classes.forTypo} variant="body2" color="textSecondary" component="p">
            {blogData && blogData[0] && blogData[0].title}
        </Typography>
      </CardContent>
      <CardHeader style={{paddingTop:"0px",paddingLeft:"16px",paddingRight:"16px",paddingBottom:"16px"}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={`http://infilate.com/backend/public${blogData[0]?.user[0]?.image}`} />
          </Avatar>
        }
        title={blogData && blogData[0] ? blogData[0].title1 : ""}
        subheader={`by ${blogData[0]?.user[0]?.f_name + blogData[0]?.user[0]?.l_name} `}
      />

    </Card>
                        
   </Container>




 {/* 2nd row   */}
        <div style={{display:'flex',justifyContent:'center'}}>
        <Grid container lg={8} md={10} sm={12} style={{marginTop:"30px"}} justifyContent='space-between' spacing={{xs:3}}>

          { blogData && blogData.slice(1,3).map((item,index)=>
          <Grid item lg={5} md={5} sm={5} xs={12}  key={index}>
            <Card className={classes.root2} elevation={0} >
            <h1 className="scanfcode">{item.category_name}</h1>
          <CardMedia
               className={classes.media2}
               image={`http://infilate.com/backend/public/images/${item.media}`}
             />
             <CardContent onClick={()=>handleClick(item)}>
               <Typography style={{fontSize:'2rem',display:'-webkit-box',webkitLineClamp:'3',webkitBoxOrient:'vertical',overflow:'hidden'}} className={classes.forTypo2} variant="body2" color="textSecondary" component="p">
                   {item.title}
               </Typography>
             </CardContent>
             <CardHeader
               avatar={
                 <Avatar aria-label="recipe" className={classes.avatar2}>
                   <img src={`http://infilate.com/backend/public${item?.user[0]?.image}`} />
                 </Avatar>
               }
               title={item.title1 ? item.title1 : ""}
               subheader={`by ${item?.user[0]?.f_name + item?.user[0]?.l_name}`}
             />
       
           </Card>
            </Grid>

          )     
          }
        </Grid>
        </div>

 {/* 3rd row  */}
        <Box mx={20}>
        <Divider variant="middle"/>
        </Box>

        <Box mx={2} pt={5}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Grid container lg={8} md={9} sm={10} style={{marginTop:"30px"}} > 
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        </Grid>
        </div>

        <div style={{display:'flex',justifyContent:'center'}}>  
        <Grid container lg={8} md={9} sm={10} >
          <Chip onClick={()=>setQuery('Most Recent')} className={classes.chip} label="Most Recent" />
          <Chip onClick={()=>setQuery('Design')} className={classes.chip} label="Design" />
          <Chip onClick={()=>setQuery('Marketing')} className={classes.chip} label="Marketing" />
          <Chip onClick={()=>setQuery('Productivity')} className={classes.chip} label="Productivity" />
          <Chip onClick={()=>setQuery('Sales')} className={classes.chip} label="Sales" />
          <Chip onClick={()=>setQuery('Technology')} className={classes.chip} label="Tech" />
        </Grid>
        </div>

        </Box>

          {filterRender()}
        </>

    )
}

export default MainBlog
