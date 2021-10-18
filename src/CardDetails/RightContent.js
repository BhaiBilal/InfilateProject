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
    
        // window.onload = function () {
        //     document.getElementById('rzp-button1').onclick = function (e) {
                
        //         // rzp1.open();
        //         e.preventDefault();
               
        //     }
        // }



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
        <div className = "webinar-details-lower">
            <div className = "webinar-details-lower-card">
                <div className =  "webinar-details-lower-card1-content">
                    <p>Webinar Price: ₹{props.data.price ? props.data.price : "0"} /-</p>
                    <span>*Exclusive of Taxes</span>
                </div>
                <div className = "webinar-details-lower-card1-actions">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className = "webinar-details-lower-card">
                <ul className =  "webinar-details-lower-card2-content">
                    <li>
                        <span>Have a question?</span>
                        <p>Send your queries to the event organizer</p>
                    </li>
                </ul>
                <div className = "webinar-details-lower-card2-actions">
                    <button>Contact Organizer</button>
                </div>
            </div>
            <div className = "webinar-details-lower-card">
                <ul className =  "webinar-details-lower-card3-content">
                    <li>
                        <p>Host Online Events with Infilate</p>
                    </li>
                    <li>
                        <span>Learn More</span>
                        <img src="https://townscript-common-resources.s3.ap-south-1.amazonaws.com/ListingsStatic/tslive-learn-eventpage.png"  alt="" />  
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightContent
