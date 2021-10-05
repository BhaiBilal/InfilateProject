import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DnsIcon from '@material-ui/icons/Dns';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "react-router-dom";
import axios from 'axios'
import Razorpay from 'razorpay'
import IconButton from '@material-ui/core/IconButton';
import CompareIcon from '@material-ui/icons/Compare';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme) => ({

    btn: {
            background:'#3949ab',
            color:'white',
            '&:hover':{
                background:'white',
                color:'#3949ab'
            },
            '&:focus':{
                outline:'none'
            }

    },
    boxstyle: {
        border: "1px solid red",
        paddingLeft:"60px"
    },

    gridstyle: {
        height:"max-content",
        justifyContent:"center",
        top:"100px",
        position:"sticky"

    },

    containerClass: {
        padding: "0px"
    },
    containerClass2: {
        padding: "0px",
        display: "flex",
        justifyContent: "space-between"
    },
    iconSize: {
        fontSize: "20px"
    },
    parabox: {
        height: "100px"
    },


    btn2:{
        marginLeft:'5px',
        height:'100px',
        position:'sticky',
        top:'100px',
    
    
      },

}));

function RightContent(props) {

    const [arr1,setArr1]= React.useState([])
    const [open,setOpen] = React.useState(false)

    const options = {
        "key": "rzp_test_CedHCtKjGq02On", // Enter the Key ID generated from the Dashboard
        "amount": "165600", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Infilate",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_I2tYvYrxiOZn67", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            console.log(response)
            // alert(response.razorpay_payment_id);
            // alert( response.razorpay_order_id);
            // alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
        
       
        
        var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
        console.log(response)
            // alert("hhhhhhhh",response.error.code);
            // alert("hhhhhhhh",response.error.description);
            // alert("hhhhhhhh",response.error.source);
            // alert("hhhhhhhh",response.error.step);
            // alert("hhhhhhhh",response.error.reason);
            // alert("hhhhhhhh", response.error.metadata.order_id);
            // alert("hhhhhhhh", response.error.metadata.payment_id);
    });
    
        window.onload = function () {
            document.getElementById('rzp-button1').onclick = function (e) {
                
                // rzp1.open();
                e.preventDefault();
               
            }
        }



    const classes = useStyles()

    const handleCompare = (item,index) => {

        if(arr1.length==0){
          setArr1(arrold => [...arrold,item])
        }
        else if(arr1.length>0 && arr1.includes(item)){
          
          // arr1.splice(arr1.indexOf(item),1)
          setArr1(arr1.filter(i=>i.id!==item.id))
            // console.log(arr1)      
          }
          else if(arr1.length<4) {
            setArr1(arrold=>[...arrold,item])
          }
        }

    // console.log(props.data)

    const RazorpayPostman= async () => {

    var instance = new Razorpay({ key_id: 'rzp_test_CedHCtKjGq02On', key_secret: 'fokqL4Grp6UA06OxsCe77wz9' })

        var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "receipt_0011"
        };

        try{
            const res = await instance.orders.create(options) 
            console.log(res);
        }
        catch(err){
            console.log(err)
        }
    }

        // axios({
        //     method:"POST",
        //     url:"https://api.razorpay.com/v1/orders",
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },

        //     auth:{
        //         username:"rzp_test_CedHCtKjGq02On",
        //         password:"fokqL4Grp6UA06OxsCe77wz9"
        //     },
        //     data:{
        //         amount:165600,
        //         currency:"INR",
        //         receipt:"receipt_0011"
        //     },
            
        // }).then((res) => console.log(res))
        // .catch((err) => console.log(err) )
    

    return (
        <>
       
        <Grid className={classes.gridstyle} container spacing={0} xs={3}>


            <Grid style={{ border: "0.5px solid #C0C0C0",height:"max-content",justifyContent:"center",paddingTop:"10px",paddingBottom:"10px" }} container xs={9}>


               {/* cart */}
                <div className={classes.btn2}>
                <Button onClick={()=>setOpen(v=>!v)} color="secondary" startIcon={<CompareIcon />}>{arr1.length}</Button>
                {

               open === true ? <Paper elevation={3} style={{}}>

                 {arr1 && arr1.map((v,i)=>
               <Grid key={i} style={{display:'flex',alignItems:'center'}} item>
               <img style={{width:'55px',height:'43px',padding:'5px'}} 
               src={`http://infilate.com/backend/public/images/${v.image}`}
               alt='' />
               <p style={{padding:'5px'}}>{v.webinar_name}</p>
               <IconButton aria-label="delete" className={classes.closeicon}>
                <CloseIcon onClick={() => handleCompare(v)} style={{fontSize:'17px'}}/>
                </IconButton>
               </Grid> 
                 
                 
                 )}
                <Button 
                // onClick={()=>passDatatoPage(arr1)} 
                color="secondary" >Checkout</Button>  
             </Paper> 
             
             :

             null

            }

            </div>   

            <Grid container style={{justifyContent:"center"}} item xs={12}>
            <Grid item >
                <p style={{fontFamily:"'Segoe UI',Arial,sans-serif", fontSize: "1.8vw", fontWeight: "600", opacity: "0.8" }}>₹{props.data.price}/-</p>
            </Grid>
            <Grid style={{paddingTop:"0.7vw",justifyContent:"center",display:'flex'}} item xs={3}>
                <p style={{fontFamily:"'Segoe UI',Arial,sans-serif", fontSize: "1vw", fontWeight: "600", opacity: "0.6" }}>onwards</p>
            </Grid>
            </Grid>

            <Grid style={{justifyContent:"center" }} item container xs={12}>
                <Grid item xs={6}>
                <p style={{fontFamily:"'Segoe UI',Arial,sans-serif", fontSize: "1vw", fontWeight: "600", opacity: "0.6" }}>*Exclusive of Taxes</p>

                </Grid>
                
            </Grid>

            </Grid>


            <Grid style={{marginTop:"10px",height:"max-content"}} container spacing={0} xs={9}>

            <Grid item xs={12}>
            <Button id="rzp-button1" onClick={()=>handleCompare(props.data)} fullWidth variant="outlined" color="primary" className={classes.btn}>
             Add to Cart
             </Button>
                        
         
            
            </Grid> 

            </Grid>

            
            <Grid style={{height:"max-content",border: "0.5px solid #C0C0C0",marginTop:"40px",paddingTop:"1.5vw",paddingLeft:"1.5vw",paddingBottom:"1.5vw"}} container spacing={0} xs={9}>

            <Grid item xs={8}>
            <p style={{fontSize:"1.2vw",opacity:"0.6",fontFamily:"'Segoe UI',Arial,sans-serif",fontWeight:"bold"}}>Have a question?</p>
            <p style={{fontSize:"0.9vw",opacity:"0.8",fontFamily:"'Segoe UI',Arial,sans-serif"}}>Send your queries to the event organizer</p>
            </Grid>

            <Grid item xs={4}>
           <img style={{height:"60px",width:"60px"}} src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/dbf30228-8f17-4a3e-84cf-2e2962ca8460.jpg"  alt="" />    
                
            </Grid> 

            <br/>
            <br/>
            <br/>
            <br/>
            <Grid item xs={11}>
            <Button fullWidth style={{fontSize:"0.9vw"}} variant="outlined" color="primary">
            CONTACT ORGANIZER
            </Button>   
            </Grid>

            </Grid>



            {/* hostonlineEvent */}
            <Grid style={{height:"max-content",border: "0.5px solid #C0C0C0",marginTop:"40px",paddingTop:"1.5vw",paddingLeft:"1.5vw",paddingBottom:"1.5vw"}} container spacing={0} xs={9}>
            <Grid item xs={12}>
            <p style={{fontSize:"1.1vw",opacity:"0.6",fontFamily:"'Segoe UI',Arial,sans-serif",fontWeight:"bold"}}>Host Online Events with </p>
            <p style={{fontSize:"1.1vw",opacity:"0.6",fontFamily:"'Segoe UI',Arial,sans-serif",fontWeight:"bold"}}>Infilate</p>
            </Grid>

            <Grid item container spacing={1} xs={12}>
            <Grid style={{paddingTop:"2.5vw"}} item xs={6}>
             <p style={{fontSize:"1.1vw",opacity:"0.6",fontFamily:"'Segoe UI',Arial,sans-serif",fontWeight:"bold"}}>Learn More</p>   
            </Grid>

            <Grid item xs={6}>
             <img src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/ListingsStatic/tslive-learn-eventpage.png" />   
            </Grid>
            </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default RightContent
