import React from 'react'
import Button from '@mui/material/Button';
import {BlurOffOutlined, FavoriteBorderOutlined} from '@material-ui/icons';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import useStyles from './Styles.js';
import useMediaQuery from '@mui/material/useMediaQuery';
  import {Typography,Grid} from '@mui/material';

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



  const useStyles = makeStyles({

    loading: {
      height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
      padding: '25px',
    },
    marginBottom: {
      marginBottom: '30px',
    },
    list: {
      height: '75vh', overflow: 'auto',
    },
    button1: {
      marginTop:'15px',
      marginRight:'5px', 
      width:'50%',
      backgroundColor:'transparent',
      color:'#009cb6',
      boxShadow:'none',
      border:'1px solid rgba(0, 156, 156, 0.5)',
  
      '&:hover':{
        background:'rgb(0 156 156 / 4%)',
        boxShadow:'none'
  
      }
    },
  
    button2: {
      marginTop:'15px',
      marginRight:'5px', 
      width:'50%',
      backgroundColor:'transparent',
      color:'#009cb6',
      boxShadow:'none',
      border:'none',
  
      '&:hover':{
        background:'rgb(0 156 156 / 4%)',
        boxShadow:'none'
  
      }
    },
  
    btn:{
      marginLeft:'5px',
      height:'35px',
      position:'sticky',
      top:'100px',
  
  
    },
  
    closeicon:{
      padding:'5px',
      '& .MuiIconButton-root':{
        padding:'0px',
      },
  
    },
  
    paraStyle:{
      fontWeight:'bold',
      '&:hover':{
        cursor:'pointer',
        textDecoration:'underline'
      }
    },
  
    formControl:{
      width:"70px"
    }
  });





function ProductCard({list,handleCompare}) {

    const classes = useStyles()
    const [expanded, setExpanded]= React.useState([])
    const matches = useMediaQuery('(max-width:432px)');
    
    
    const handleExpandClick = (index) => {

        if(expanded.length == 0) {
          setExpanded(p => [...p,index])
        }
        else if(expanded.length > 0 && expanded.includes(index)) {
            setExpanded(p => p.filter(i=> i !== index))
        }
        
        else {
          setExpanded(p => [...p,index])
        }
      };

    

    return (
        <div>
     
     {
      list && list.map((item,index) => 

     <Card key={index} sx={{ width:'inherit',marginBottom:'15px' }}>

     <Grid item style={{display: 'flex',paddingLeft:'10px', flexDirection:`${matches == true ? 'column' : 'row'}`}}>
     <img style={{width:'100px',height:'100px'}} src={`http://infilate.com/backend/public/images/${item.media}`} alt='' />
     <Grid style={{paddingLeft:'10px'}} item md={8} sm={8} xs={12}>

     <p className={classes.paraStyle}
   //   className={classes.headingpara}
     >{item.name}</p>

     <Rating name="read-only" value={`${item.review?.average_review}`} readOnly style={{fontSize:'22px'}} />
     <p>({ item.review?.review_data?.length })</p>
     <p> {item.type} </p>
     </Grid>

     <Grid item md={3} style={{display:'flex',flexDirection:'column', paddingTop:"10px", paddingRight:"10px" }}>
     <Button variant="contained" color="primary" size='small'>
     <Typography variant="button" display="block">
     Visit website
     </Typography>
     </Button>
     <Grid item style={{display:'flex',justifyContent:'center'}}>
     <Button
             variant="text"
             color="primary"
             onClick={()=>handleCompare(item,index)}
             className={classes.button2}
             startIcon={<FavoriteBorderOutlined />}
           >
                   <Typography style={{fontSize:'14px',textTransform:'lowercase'}} variant="button" display="block">
                     Compare
                   </Typography>
           </Button>

           {/* <Button
             variant="contained"
             color="primary"
          
             className={classes.button2}
             startIcon={<FavoriteBorderOutlined />}
           > 
                <Typography style={{fontSize:'14px',textTransform:'lowercase'}} variant="button" display="block">
                     Save
                   </Typography>
           </Button> */}      
     </Grid>      
     </Grid>
     </Grid>

   <CardActions  disableSpacing>
   <ExpandMore 
       expand={expanded.includes(index) ? true : false }
       onClick={() => handleExpandClick(index) }
      //  aria-expanded={expanded}
       aria-label="show more"
   >
       <ExpandMoreIcon />
   </ExpandMore>
   </CardActions>
   <Collapse in={expanded.includes(index) ? true : false } timeout="auto" unmountOnExit>
   <CardContent>
       <Typography paragraph style={{fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif'}} >Description:-</Typography>
       <Typography paragraph style={{fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif'}} >
       { item.content_description }
       </Typography>
   </CardContent>
   </Collapse>
   </Card>)
     }       

        </div>
    )
}

export default ProductCard
