import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import { cartReset } from 'redux/CartItemsSlice';
import Badge from '@mui/material/Badge';
import axios from 'axios'
import './mobileprofile.css'

function MobileProfile() {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch()

    const handleLogout=() => {
        axios({
            method: 'post',
            url: 'http://infilate.com/backend/public/api/auth/logout',
            headers:{
                "token":selector.userLoginLogout.token,
            }
          }).then(res=> {
              console.log(res)
             alert('successfullt logged out',res) 
             dispatch(userLogoutRequest())
             dispatch(cartReset())
          }).catch(e =>{
            alert('successfullt logged out') 
            dispatch(userLogoutRequest())
            dispatch(cartReset())
          })
        
    }
    
    return (
        <>
        {selector.userLoginLogout.role_id=='3' ? 
        <div className='mobile-profile-logged-in'>
            <div className='mobile-profile-username'> { selector.userLoginLogout.FullName } </div>

            <Link to='/addToCart'>
            <div className='mobile-profile-cart'> 
            <Badge style={{marginRight:'10px'}} badgeContent={selector.cartItemsReducer.count ?  selector.cartItemsReducer.count : 0} color="primary">
            <ShoppingCartIcon />
            </Badge>Cart </div>
            </Link>

            <div onClick={handleLogout} className='mobile-profile-logout'> Logout </div>
        </div> :

        <div className='mobile-profile-parent'>
            <Link to='/Login'>
            <button className='mobile-profile-login'><i style={{paddingRight:'5px'}} class="fas fa-user-plus"></i> login </button>
            </Link>
            <button className='mobile-profile-signup'>
            <i style={{paddingRight:'5px'}} className="fas fa-sign-in-alt"></i>  Sign up
            <div className='mobile-profile-signup-dropdown'>
            <Link to ='/RegisterUser'>
            <li id='mobile-profile-li'> Sign up as User </li> </Link>
            <Link to = '/RegisterCorporate'>
            <li id='mobile-profile-li2'> Sign up as Corporate </li> </Link>
             </div>
            </button>

        </div>

         }







        </>
    )
}

export default MobileProfile
