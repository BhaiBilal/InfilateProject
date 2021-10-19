import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";
import Section1 from 'Template/Section1';
 

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      cursor:'pointer'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      marginBottom:'20px'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
    
function Static1() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const [data, setData] = useState([])
    
        const fetchData = async () => {
            const result = await Axios(
                'http://infilate.com/backend/public/api/apps/content', {
                method: "POST"
            }
            );
            let run = result.data.Data
            console.log(run)
            setData(run)
        }


    useEffect(()=>{
      fetchData()
    }, [])

    const history = useHistory();
    const handleClick = (post) => {
      history.push(`/static/${post.id}`,{Post:post});
      // console.log(post.webinar_name)
    }
    

    return (
      <>
      <Section1 />
        <Grid container xs={11} style={{ paddingTop: "200px", paddingLeft: "200px" , paddingBottom:'50px' }} spacing={5}>
           
     {
         data.map((item,index) => ((
        <Grid key={index} item xs={2}>      


     <Card className={classes.root} onClick={()=>handleClick(item)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.pages.substring(0,1).toUpperCase()}
          </Avatar>
        }
        title={item.pages}
        subheader="September 14, 2016"
      />
      {
           item.content.map((item2,index2)=>
         

            <CardMedia key={index2}        
            className={classes.media}
            image={`http://infilate.com/backend/public/images/${item2.media}`}
            title="Paella dish">
                {item2.heading}
            </CardMedia>
            
          
            ) 


      }

     

    </Card>     
                        {/* <Link to={`/Static/${item.id}`}>{item.pages}</Link>              */}
                </Grid>
                ))                   
                )
       }    
        </Grid>
        </>
    )
}

export default Static1
