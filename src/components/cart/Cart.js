import React from 'react'
import {Box,Container,Grid,Paper,Divider,Stack,Chip} from '@mui/material';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { cartDispatch } from 'redux/CartItemsSlice';
import './cart.css'


function Cart({cartItems}) {
    const dispatch = useDispatch()
    const selector = useSelector((state) => (state)); 

      const handleDelete = (id) => {
        axios({
            method:'POST',
            url:`http://infilate.com/backend/public/api/app/cart/item-delete/${id}`,
            headers:{
                'token':selector.userLoginLogout.token
            },
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
      };

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
               <Chip size='small' label="Remove Item" variant="outlined" onDelete={() => handleDelete(item.webinar_id)} onClick={() => 'ok'}/>
               </div>
               </Paper> 
                )} 
               </Stack>
            </Container>
            
        </Box>
    )
}

export default Cart
