import React from 'react'
import Button from '@mui/material/Button';
import {BlurOffOutlined, FavoriteBorderOutlined} from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import useStyles from './Styles.js';
import {Typography,Grid} from '@material-ui/core';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));








function ServicesCard({list,handleCompare}) {

    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const [arr1,setArr1]= React.useState([])
    
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    return (
        <div>
     
     {
      list && list.map((item,index) => 

     <Card key={index} sx={{ width:'inherit',marginBottom:'15px' }}>

     <Grid item style={{display: 'flex',paddingLeft:'10px'}}>
     <img style={{width:'100px',height:'100px'}} src={`http://infilate.com/backend/public/images/${item.media}`} alt='' />
     <Grid style={{paddingLeft:'10px'}} item xs={8}>

     <p 
   //   className={classes.headingpara}
     >{item.name}</p>

     <Rating name="read-only" 
    //  value={`${item.review.user_rating}`} 
     readOnly style={{fontSize:'22px'}} />
     <p>(477)</p>
     <p> {item.type} </p>
     </Grid>
     <Grid item xs={4} style={{display:'flex',flexDirection:'column',padding:"10px"}}>
     <Button variant="contained" color="primary" >
     <Typography variant="button" display="block">
     Visit website
     </Typography>
     </Button>
     <Grid item style={{display:'flex',justifyContent:'center'}}>
     <Button
             variant="outlined"
             color="primary"
             onClick={()=>handleCompare(item,index)}
             className={classes.button1}
             startIcon={<BlurOffOutlined />}
           >
                   <Typography style={{fontSize:'14px',textTransform:'lowercase'}} variant="button" display="block">
                     Compare
                   </Typography>
           </Button>

           <Button
            variant="text"
             color="primary"
          
             className={classes.button2}
             startIcon={<FavoriteBorderOutlined />}
           >
                <Typography style={{fontSize:'14px',textTransform:'lowercase'}} variant="button" display="block">
                     Save
                   </Typography>
           </Button>      
     </Grid>      
     </Grid>
     </Grid>

   <CardActions disableSpacing>
   <ExpandMore
       expand={expanded}
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
   >
       <ExpandMoreIcon />
   </ExpandMore>
   </CardActions>
   <Collapse in={expanded} timeout="auto" unmountOnExit>
   <CardContent>
       <Typography paragraph>Method:</Typography>
       <Typography paragraph>
       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
       aside for 10 minutes.
       </Typography>
   </CardContent>
   </Collapse>
   </Card> 
     
     
     )
     }       

        </div>
    )
}

export default ServicesCard
