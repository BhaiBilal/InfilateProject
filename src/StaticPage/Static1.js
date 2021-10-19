import React, { useState, useEffect } from 'react'
import TimeAgo from 'javascript-time-ago';
import { Link } from 'react-router-dom'
import en from 'javascript-time-ago/locale/en.json';
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
import "./Static.css";
 

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
    const handleClick = (id) => {
      history.push(`/static/${id}`);
      // console.log(post.webinar_name)
    }


    TimeAgo.addDefaultLocale(en);
    const timeAgo = new TimeAgo('en-US')
    

    return (
      
      <div className = "static-container">
        <ul className = "static-section">
          {data && data.length > 0 ? 
            data.map((page, index) => {
              return (
                <li key = {`static${index}`} onClick = {() => handleClick(page.id)}> 
                  <h6>{page.pages.substring(0,1).toUpperCase()}</h6>
                  <div className = "static-list-content">
                    <span>{page.pages}</span>
                    <p>Last updated: {timeAgo.format(new Date(page.updated_at))}</p>
                  </div>
                </li>
              )
            })
            :
            <></>
            }
          </ul>
        </div>
    )
}

export default Static1
