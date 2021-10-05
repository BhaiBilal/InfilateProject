import React,{useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import static4 from "../images/static4.jpg"
import video from "../images/static.mp4"
import logo from "../images/247.png"
import logo1 from "../images/abelohost.png"
import logo2 from "../images/adroit.png"
import logo3 from "../images/agm.png"
import logo4 from "../images/BigRock.png"
import Headerj from 'components/headers/Headerj';
import Axios from "axios"
import { useParams} from 'react-router-dom';
import {Link } from "react-router-dom"
import {useLocation} from 'react-router-dom'
import parse from 'html-react-parser';





const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height:"auto",
      paddingTop:"90px",

      // maxWidth: 360,
     
    },
    card:{
        padding:" 40px",
        maxWidth:"400px",
        height:"200px",
        backgroundColor:"white",
        marginBottom:"40px",
        transition:"all .5s ease",
        '&:hover':{
            backgroundColor:"grey",
            '&a':{
color:"white"
            },
        },
       
        
    },
    title:{
        textAlign:"center",
        fontsize:"14px",
        fontWeight:"bold",
        color:"#03256C"
    },
    post:{
       
    },
    bullet:{
        color:"orange"
    },
    mainDiv:{
        width:"100%",
        height:"auto",
        backgroundImage:`url(${static4})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        marginBottom:"20px"
       

      
    },
    rightDiv:{
      
        padding:"5rem 5rem 5rem 6rem"
    },
    leftDiv:{
       
        paddingTop:"5rem",
        paddingLeft:"2rem",
        color:"#FFFFFF",

        '& h1':{
            fontSize:"3rem",
            fontWeight:"bold"

        },
        '& h2':{
            fontSize:"1.8rem",
            fontWeight:"500"

        },
        '& h3':{
            fontSize:"1rem",
            fontWeight:"400",
            margin:"5px 0px"

        },
        '& p':{
            fontSize:"1.2rem",
            fontWeight:"bold",
            marginBottom:"20px"

        },
        '& Button':{
           width:"200px",
           height:"60px",
           padding:"2px 4px",
           backgroundColor:"#99154E",
           borderRadius:"25px",
           color:"white",
           fontsize:"1rem",
           fontWeight:"bold",
           '&:hover':{
               backgroundColor:"#BA135D"
           }
        }
        
 

    }

    
  
  }));

function Static2() {
    const param = useParams()
    const location= useLocation()
    const [data, setData] = useState('')
    const [query, setQuery] = useState(param.id)
    const [section1, setSection1] = useState({})
    const [section2, setSection2] = useState({})
    const [section3, setSection3] = useState({})
    const [section4, setSection4] = useState({})
    const [section5, setSection5] = useState({})
    const [section7, setSection7] = useState([])
    
    
     const  fetchData = async () => {
        const result = await Axios(
            'http://infilate.com/backend/public/api/apps/content', {
            method: "POST"
        }
        );
        // console.log(result.data.Data);

    
       
        // for (var i = 0; i < run.length; i++) {
        //     console.log(run[i].id);

        //     let id = run
            
        
        //     for (var k = 0; k < id.length; k++)
        //         if (run[i].id == `${query}`) {
        //             var items = run[i];
                
        //         }
        //     setData(items)
           
        }
       

        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section1") {
        //         var section1 = items.content[j];
                
        //     }
            
           
        // }
        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section2") {
        //         var section2 = items.content[j];
        //     }
        // }
        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section3") {
        //         var section3 = items.content[j];
        //     }
        // }
        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section4") {
        //         var section4 = items.content[j];
        //     }
        // }
        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section5") {
        //         var section5 = items.content[j];
        //     }
        // }
        // for (var j = 0; j < items.content.length; j++) {
        //     console.log(items.content[j].section);
        //     if (items.content[j].section == "Section7") {
        //         var section7 = items.content[j].content;
             
        //         console.log(section7)
        //     }
        // };
        // setSection1(section1);
        // setSection2(section2)
        // setSection3(section3)
        // setSection4(section4)
        // setSection5(section5)
        // setSection7(section7)
    

   
        useEffect(() => {
            fetchData()
        
    }   
    , []);
   
        console.log(location.state.Post.content.map(item=>item.media && item.media))

    const classes = useStyles();
    return (
       <>
     
       <Container className={classes.root} >
       
<Grid className={classes.mainDiv} container>
<Grid className={classes.leftDiv} md={6} item >
            <Link to={`/Static/1234`}><h1>{location.state.Post.content.map(item=>item.heading)}</h1></Link>
    <h2> {location.state.Post.content.map(item=>item.section)}</h2>
    
    
    <Button>

    <a>Request a demo </a>
    </Button>

</Grid>
<Grid className={classes.rightDiv} md={6} item >
    <video width="500" height="400"  controls autoPlay src="" type="video/mp4" / >




</Grid>

</Grid>

<Grid style={{backgroundColor:"white",paddingBottom:"70px"}} container>
<Grid className={classes.leftDiv} md={12} item >
    <h1 style={{color:"#26313D",textAlign:"center",padding:"0rem 10rem"}}>Thousands of companies use Infilate Track to
optimize SaaS spend and contracts</h1>
    <Grid style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px",height:"120px"}} item>
<img src={logo} alt="image"/>
<img src={logo1} alt="image"/>
<img src={logo2} alt="image"/>
<img src={logo3} alt="image"/>
<img src={logo4} alt="image"/>


        </Grid>


</Grid>

</Grid>

<Grid  style={{backgroundColor:"#185ADB"}}  container>
<Grid className={classes.leftDiv} md={6} item >
    <h1>Get your SaaS in Gear</h1>
   <h3><i style={{fontSize:"5px",verticalAlign:"middle",marginRight:"10px"}} class="fas fa-circle"></i>Track employees, products, and spend by department</h3> 
    <h3><i style={{fontSize:"5px",verticalAlign:"middle",marginRight:"10px"}} class="fas fa-circle"></i>Track employees, products, and spend by department</h3>
    <h3><i style={{fontSize:"5px",verticalAlign:"middle",marginRight:"10px"}} class="fas fa-circle"></i>Track employees, products, and spend by department</h3>
    <h3><i style={{fontSize:"5px",verticalAlign:"middle",marginRight:"10px"}} class="fas fa-circle"></i>Track employees, products, and spend by department</h3>
    

</Grid>
<Grid className={classes.rightDiv} md={6} item >
    <div style={{width:"500px",height:"300px",backgroundColor:"white",padding:"40px"}}>
        <h1 style={{fontSize:"1.5rem",fontWeight:"bold",color:"#26313D",marginBottom:"5px"}}> Sign up for free</h1>
        <p style={{color:"#26313D",marginBottom:"3px"}}>Email*</p>
        <div>
        <input style={{border:".6px solid black",outline:"none",width:"400px",height:"40px"}} type="text" />
        </div>


    <Button style={{width:"150px",height:"50px",backgroundColor:"purple",marginLeft:"100px",marginTop:"35px",borderRadius:"25px",outline:"none"}}>

<a style={{fontSize:"16px",color:"white",fontWeight:"bold"}}>Continue </a>
</Button>
    </div>


</Grid>

</Grid>
<Grid backgroundColor="white" container>
<Grid style={{paddingRight:"10rem"}} className={classes.leftDiv} md={6} item >
                        <h1 style={{ color: "#26313D" }}>{location.state.Post.content.map(item=>item.heading)}</h1>
    
                        <h3  style={{ color: "#26313D", fontSize: "1.5rem", marginBottom: "20px" }}>
                            {parse(`${location.state.Post.content.map(item=>item.content)}`)}</h3>
   <Button>

    <a>Request a demo </a>
   </Button>

</Grid>
<Grid className={classes.rightDiv} md={6} item >
{location.state.Post.content.map((item,index)=>
<img style={{ boxShadow: "10px 10px 20px grey ",backgroundRepeat:'no-repeat'}} src={`http://infilate.com/backend/public/images/${item.media}`} 
alt="image"/>
 )}
</Grid>

</Grid>
<Grid backgroundColor="white" container>


    <Grid className={classes.rightDiv} md={6} item >
    {location.state.Post.content.map((item,index)=>
    <img key={index} style={{boxShadow:"10px 10px 20px grey ",backgroundRepeat:'no-repeat'}} 
    src={`http://infilate.com/backend/public/images/${item.media}`} alt="image"/>
    )}
</Grid>


<Grid className={classes.leftDiv} md={6} item >
    <h1 style={{color:"#26313D"}}>{}
</h1>
                        <h3 style={{ color: "#26313D", fontSize: "1.5rem", marginBottom: "20px" }}>{}</h3>
    
  <Button>

    <a>Request a demo </a>
   </Button>

</Grid>


</Grid>
<Grid style={{backgroundColor:"#907FA4"}} container>
    <Grid md={12} item>
    <h2 style={{fontSize:"2.5rem",fontWeight:"bold",color:"white",textAlign:"center"}}>Empower all stakeholder: </h2>
    <h3 style={{fontSize:"1.3rem",fontWeight:"bold",color:"white",textAlign:"center"}}>Software and contract management is hard. Eliminate bottlenecks by giving everyone access to the information and tools they need.</h3>
    </Grid>
<Grid style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:"#907FA4"}} className={classes.leftDiv} md={12} spacing={2} item >
{
[0,1,2].map((items) =>(
    (
        <card className={classes.card}>
     
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {}
        </Typography>
       
       
        
        <h4 className={classes.title}> {'items.post'}</h4>
         
      
     
     
       <a className={classes.bullet}> {'items.button'}</a>
      
    </card>
    )
))
}
</Grid>


</Grid>
<Grid backgroundColor="white" container>
<Grid className={classes.leftDiv} style={{paddingRight:"10rem"}} md={6} item >
                        <h1 style={{ color: "#26313D" }}>{}</h1>
                        <h3 style={{ color: "#26313D", fontSize: "1.3rem", marginBottom: "20px" }}>{}</h3>
  <Button>

    <a>Request a demo </a>
   </Button> 

</Grid>
<Grid className={classes.rightDiv} md={6} item >
  {/* <img style={{boxShadow:"10px 10px 20px grey "}} src='{`http://infilate.com/backend/public/images/${section4.media } `}' alt="image"/> */}

</Grid>

</Grid>
<Grid  backgroundColor="white" container>
<Grid className={classes.rightDiv}  md={6} item >
   {/* <img style={{boxShadow:"10px 10px 20px grey "}} src='{`http://infilate.com/backend/public/images/${section5.media } `}' alt="image" /> */}

</Grid>
<Grid className={classes.leftDiv} style={{paddingLeft:"10rem"}} md={6} item >
<h1 style={{color:"#26313D"}}>{}</h1>
                        <h3 style={{ color: "#26313D", fontSize: "1.3rem", marginBottom: "20px" }}>{}</h3>
    
   <Button>

    <a>Request a demo </a>
   </Button> 

</Grid>


</Grid>
<Grid  backgroundColor="white"  container>

<Grid className={classes.leftDiv} style={{paddingLeft:"10rem"}} md={12} item >
<h1 style={{color:"#26313D",textAlign:"center"}}>Integration heaven:</h1>
   <h3 style={{color:"#26313D",fontSize:"1.3rem",marginBottom:"20px",textAlign:"center"}}>Integrate Infilate Track with all the tool you trust</h3>
    
    
   

</Grid>

<Grid  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px",height:"120px"}}  item >
   <img  src={logo} alt="image" />
   <img  src={logo1} alt="image" />
   <img  src={logo2} alt="image" />
   <img  src={logo3} alt="image" />
   <img  src={logo4} alt="image" />

</Grid>
<Grid  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px",height:"120px"}}  item >
   <img  src={logo} alt="image" />
   <img  src={logo1} alt="image" />
   <img  src={logo2} alt="image" />
   <img  src={logo3} alt="image" />
   <img  src={logo4} alt="image" />

                    </Grid>
                    {/*---
<Button style={{width:"220px",height:"50px",backgroundColor:"#99154E",marginLeft:"650px",marginTop:"35px",marginBottom:"35px",borderRadius:"25px"}}>

<a style={{fontSize:"14px",color:"white",fontWeight:"bold"}}>View All Integrations </a>
</Button>
                    --*/}

</Grid>

</Container>
       </>
    )
}

export default Static2
