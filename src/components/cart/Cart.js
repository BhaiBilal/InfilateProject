import React from 'react'
import {Box,Container,Grid,Paper,Divider,Stack,Chip} from '@mui/material';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';
import { cartDispatch } from 'redux/CartItemsSlice';
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import './cart.css'
import infilatelogo from '../../infi-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryIcon from '@mui/icons-material/History';


const useStyles = makeStyles({
    btn:{
        height:'fit-content'
    }
  });

function Cart({cartItems}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();
    const selector = useSelector((state) => (state)); 
    const notify = (message) => {   
        toast(message);
    }

      const handleDelete = (id) => {
        axios({
            method:'POST',
            url:`http://infilate.com/backend/public/api/app/cart/item-delete/${id}`,
            headers:{
                'token':selector.userLoginLogout.token
            },
        }).then(res => {
            // console.log(res)
            notify(res.data.Message)
        }).catch(err => console.log(err))
      };

      const handleClick = () => {
            axios({
                method:'POST',
                url:'http://infilate.com/backend/public/api/order/createOrder',
                headers: {
                    "token": selector.userLoginLogout.token,
                }
            }).then(res => {
                if(res){
                    // console.log(res)
                    var options = {
                        "key": "rzp_test_CedHCtKjGq02On", // Enter the Key ID generated from the Dashboard
                        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "Infilate",
                        "description": "Transaction",
                        "image": `${infilatelogo}`,
                        "order_id": `${res.data.data.razor_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        "handler": function (response){
                            if(response){
                            SaveDetails({data1:response.razorpay_payment_id,data2:response.razorpay_order_id,
                            data3:response.razorpay_signature,data4:res?.data?.data?.order_id,data5:'1'
                            })
                            }
                            
                            // alert(res.razorpay_payment_id);
                            alert(response.razorpay_order_id);
                            // alert(res.razorpay_signature)
                        },
                        "prefill": {
                            "name": `${selector.userLoginLogout.FullName}`,
                            "email": `${selector.userLoginLogout.email}`,
                            "contact": ""
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
                        if(response) {
                            SaveDetails({data1:"dsad",data2:"sdadad",
                                data3:'dhjksahd',data4:`${res?.data?.data?.order_id}`,data5:'0'
                                })
                        }

                        // alert(response.error.code);
                        // alert(response.error.description);
                        // alert(response.error.source);
                        // alert(response.error.step);
                        // alert(response.error.reason);
                        alert(response.error.metadata.order_id);
                        // alert(response.error.metadata.payment_id);
                });
                rzp1.open();
                }
                
                console.log(res.data.data)
            })
            .catch(e => console.log(e.response.data))
      }


      function SaveDetails({data1,data2,data3,data4,data5}){
        axios({
            method:'POST',
            url:'http://infilate.com/backend/public/api/order/verifyPayment',
            headers: {
                "token": selector.userLoginLogout.token, 
            },
            data:{"razorpay_payment_id":`${data1}`,
            "razorpay_order_id":`${data2}`,
            "razorpay_signature":`${data3}`,
            "order_id":`${data4}`,
            "status":`${data5}`,
        }
        }).then(res => console.log(res))
        .catch(e => console.log(e.message))
      }

        
      const handlebtnClick = () => {
            history.push('')
      }
        // window.onload = function() {


        //     document.getElementById('rzp-button1').onclick = function(e){
        //         rzp1.open();
        //         e.preventDefault();
        //     }
        // }


    return (
        <Box pt={20} display='flex' justifyContent='center' style={{gap:'5px'}} pb={5} >
            <Grid item md={4}>
            <Stack spacing={2}>
                {cartItems && cartItems.map((item,index) => 
               <Paper key={index}>
               <div className= "cart_items_Heading">
                  <p style={{paddingLeft:'10px'}}>name</p>
                  <p style={{paddingRight:'10px'}}>price</p>  
               </div>
               <Divider style={{borderBottomWidth:'inherit'}} />   
               <div className='car_item_content'>
               <img style={{width:'100px',height:'100px'}} 
               src='https://portal.zakeke.com/images/homepage/documentation/API/shopping-cart.jpg' />
               <p target='web_name'>{item.webinar_name}</p>
               <p style={{paddingRight:'10px'}} >₹{item.price ? item.price : 0} </p>

               </div>

               <div className='chip_container'>
               <Chip size='small' label="Remove Item" variant="outlined" onDelete={() => handleDelete(item.id)} onClick={() => 'ok'}/>
               </div>
               </Paper> 
                )} 
               </Stack>
               <div style={{display:'flex',justifyContent:'center',marginTop:'1.5rem'}}>
               <Button size='small' id='rzp-button1' onClick={handleClick} variant="contained">Checkout</Button>
                </div>
               
            </Grid>
            <ToastContainer autoClose={4000}  />  
            <Button onClick={handlebtnClick} size='small' className={classes.btn} endIcon={<HistoryIcon />}> My order history</Button>
        </Box>
    )
}

export default Cart
