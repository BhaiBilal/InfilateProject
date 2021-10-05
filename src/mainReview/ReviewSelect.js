import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CategoryPage from './CategoryPage';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "200px",
    paddingRight: "300px",
    paddingLeft: "300px",
    paddingBottom: "100px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  btn:{
    width: "100%", 
    fontWeight: "bold", 
    fontSize: "12px" ,
    background:"#fefefe",
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      
  },
  }
}));




function ReviewSelect() {

  const classes = useStyles();
  const [data,setData] = React.useState([])


  React.useEffect(() => {

    let cancel
    
      axios('http://infilate.com/backend/public/api/offer-category/category-list', {
        method: 'GET',
        cancelToken: new axios.CancelToken(c=>cancel=c)
      }).then((res) => {
        setData(res.data.Data)
      }).catch(e=>{
        if(axios.isCancel(e)) return
      })   
      //  setBlogData(result.data.Data)
    
      return ()=> cancel()

    },[]);

    const history = useHistory();
    const handleClick = (id) => {
      history.push(`/review/${id}`);
      // console.log(post.webinar_name)
    }


    // console.log(data)

  function FormRow1() {

    return (
      <React.Fragment>

      {
          data && data.map((item,index)=>
          <Grid key={index} item md={4} xs={12}>
 
            <Button onClick={()=>handleClick(item.id)} size="large" variant="outlined" color="black" className={classes.btn}>{item.name}</Button>

          </Grid>          
          
          )


      }



        {/* <Grid item xs={4}>
          <Link style={{ textDecoration: "none" }} to="/review" >
            <Button size="large" variant="outlined" color="black" className={classes.btn}>Agencies</Button>
          </Link>
        </Grid>
        <Grid item xs={4}><Link style={{ textDecoration: "none" }} to="/review" >
          <Button size="large" variant="outlined"  color="black" className={classes.btn}>Brands</Button>
        </Link>
        </Grid> */}

      </React.Fragment>
    );
  }

  // function FormRow2() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined" className={classes.btn}>HR</Button>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Sales</Button>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black"className={classes.btn}>Information Technology</Button>
  //         </Link>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  // function FormRow3() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Marketing</Button>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Business Operations & Analytics</Button>
  //         </Link> 
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Media and Communications</Button>
  //         </Link>
  //       </Grid>
  //     </React.Fragment>
  //   );
  

  // function FormRow4() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Customer Support</Button>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Software Development</Button>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Link style={{ textDecoration: "none" }} to="/review" >
  //           <Button size="large" variant="outlined"  color="black" className={classes.btn}>Program and Project Management</Button>
  //         </Link>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }



  return (
    <Container style={{width: "100%",paddingTop:"200px",paddingLeft:"50px",paddingRight:"50px",background:"#f2f2f2",paddingBottom:"50px"}} maxWidth>
      <Grid style={{border:"1px solid 	#DCDCDC",paddingLeft:"20px",paddingTop:"40px",height:"max-content",background:"#fafafa"}} container xs={12} spacing={1}>

        <Grid item xs={9}>
          <p style={{fontSize:"2.3vw",fontWeight: "bold",opacity:"0.8"}}>Let's find the software and services you use at work.</p>
        </Grid>

        <Grid item xs={9}>
          <p style={{fontSize:"1vw",opacity:"0.8"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book</p>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid item xs={12}>
          <p  style={{fontSize:"1.7vw",fontWeight: "bold",opacity:"0.8"}}>Pick a role and we'll show you related products and services to review.</p>
          <br/>
        </Grid>

        <Grid item container md={12} spacing={2}>
        <FormRow1 />

        </Grid>

        {/* <Grid item container xs={12} spacing={2}>
        <FormRow2 />

        </Grid>

        <Grid item container xs={12} spacing={2}>
        <FormRow3 />

        </Grid>

        <Grid item container xs={12} spacing={2}>
        <FormRow4 />
        </Grid> */}
        <br/>
        <br/>
        <br/>
        <br/>

        <Grid item xs={12}>
        <Divider />
        </Grid>
        <br/>


        <Grid item md={12} container style={{justifyContent: 'center'}}>
          <Grid item md={2}>

          <button style={{fontSize:"15px",width:"100%",fontWeight:"bold",color:'#2678aa'}}>Privacy Policy</button>
          </Grid>
       
          <Grid item md={2}>

          <button style={{fontSize:"15px",width:"100%",fontWeight:"bold",color:'#2678aa'}}>www.my.infilate.com</button>
          </Grid>
        </Grid>
      </Grid>



    </Container>


  )
}

export default ReviewSelect
