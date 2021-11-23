import React from 'react'
import {Box,Container,Grid,Paper,Divider,Stack,Chip} from '@mui/material';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { cartDispatch } from 'redux/CartItemsSlice';
import Button from '@mui/material/Button';
import './cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart({cartItems}) {
    const dispatch = useDispatch()
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
                        "name": "Acme Corp",
                        "description": "Test Transaction",
                        "image": "https://example.com/your_logo",
                        "order_id": `${res.data.data.razor_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        "handler": function (response,res){
                            SaveDetails(response,res)
                            alert(response.razorpay_payment_id);
                            alert(response.razorpay_order_id);
                            alert(response.razorpay_signature)
                        },
                        // "prefill": {
                        //     "name": "Harsh Garg",
                        //     "email": "collaboration.support@infilate.com",
                        //     "contact": "12345678"
                        // },
                        "notes": {
                            "address": "Razorpay Corporate Office"
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };  

                    var rzp1 = new window.Razorpay(options);
                    rzp1.on('payment.failed', function (response){
                        alert(response.error.code);
                        alert(response.error.description);
                        alert(response.error.source);
                        alert(response.error.step);
                        alert(response.error.reason);
                        alert(response.error.metadata.order_id);
                        alert(response.error.metadata.payment_id);
                });
                rzp1.open();
                }
                
                console.log(res.data.data)
            })
            .catch(e => console.log(e.response.data))
      }


      function SaveDetails(response,res){
        axios({
            method:'POST',
            url:'http://infilate.com/backend/public/api/order/verifyPayment',
            headers: {
                "token": "$2y$10$zPx9IZCKSVxyakQxzzKUZ.m7vmhjFQ/j34UX04i.PMdqTQHRsYFzi", 
            },
            data:{"razorpay_payment_id":`${response.razorpay_payment_id}`,
            "razorpay_order_id":`${response.razorpay_order_id}`,
            "razorpay_signature":`${response.razorpay_signature}`,
            "order_id":"order_619b33c79236b"}
        }).then(res => console.log(res))
        .catch(e => console.log(e.message))
      }

        

        // window.onload = function() {


        //     document.getElementById('rzp-button1').onclick = function(e){
        //         rzp1.open();
        //         e.preventDefault();
        //     }
        // }


    return (
        <Box pt={20}>
            <Container maxWidth='sm'>
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
               <div style={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
               <Button id='rzp-button1' onClick={handleClick} variant="contained">Checkout</Button>
                </div>
               
            </Container>
            <ToastContainer autoClose={4000}  />  
        </Box>
    )
}

export default Cart
