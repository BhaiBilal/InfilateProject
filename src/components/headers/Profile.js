import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cashback from "../../images/cashback2.png"
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import { cartReset } from 'redux/CartItemsSlice';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios'



function Profile({handleProfile,handlelogin,handlecorporatesignup,handlesignup,handleCart}) {

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
             alert('successfullt logged out',res) 
             dispatch(userLogoutRequest())
             dispatch(cartReset())
          });
        
    }



    function CondtionalRender() {
        
        if(selector.userLoginLogout.role_id=='3'){

          return(  
          <>
          <div style={{ zIndex: "999" }} className="dropdown">

<button className="dropbtn"><i style={{paddingRight:'7px'}} class="fas fa-user fa-2"></i>{selector.userLoginLogout.FullName}</button>
<div className="dropdown-content">
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "#e1e5ea" }}>
        <div>
            <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
        <div style={{ paddingLeft: "10px" }}>
            <h3 style={{ fontSize: "16px" }}>Welcome</h3>
            <h6 style={{ fontSize: "13px" }}>
                Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
        </div>
    </div >
    <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
        {/* <ul className="hList10">
            <li>
                <div className="menu10">
                    <h2 className="menu-title10">Sign UP</h2>
                    <ul className="menu-dropdown10">
                        <li onClick={() => handleClick("Signup as user")}>Signup as user</li>
                        <li onClick={() => handleClick("Signup as corporate")}>Signup as corporate</li>
                    </ul>
                </div>
            </li>

        </ul> */}

        <a onClick={handleLogout}>LOGOUT</a>
    </div>

</div>
</div>

{selector.userLoginLogout.isUserLoggedIn == true ? 
    <div className='add_to_cart'>
    <Badge onClick={handleCart} badgeContent={selector.cartItemsReducer.count} color="primary">
            <ShoppingCartIcon style={{color:'white',cursor:'pointer'}} />
        </Badge>
    </div>
: null}

</>
)}

        else if(selector.userLoginLogout.role_id=='2'){

           return (  
           <>
           <div style={{ zIndex: "999" }} className="dropdown">

            <button className="dropbtn"><i style={{paddingRight:'7px'}} class="fas fa-user fa-2"></i>{selector.userLoginLogout.FullName}</button>
            <div className="dropdown-content">
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "#e1e5ea" }}>
                    <div>
                        <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                    <div style={{ paddingLeft: "10px" }}>
                        <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                        <h6 style={{ fontSize: "13px" }}>
                            Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                    </div>
                </div >
                <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>

                 <a onClick={handleProfile}>Profile</a>
                    <a onClick={handleLogout}>LOGOUT</a>
                </div>
            
            </div>
            </div> 

{selector.userLoginLogout.isUserLoggedIn == true ? 
    <div className='add_to_cart'>
    <Badge onClick={handleCart} badgeContent={selector.cartItemsReducer.count} color="primary">
            <ShoppingCartIcon style={{color:'white',cursor:'pointer'}} />
        </Badge>
    </div>
: null}
</>
           )}


        else {
            return (
                <>
            <div style={{ zIndex: "999" }} className="dropdown">
            <button className="dropbtn"><i style={{paddingRight:'7px'}} class="fas fa-user fa-2"></i>Profile</button>
           
            <div className="dropdown-content">
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "#e1e5ea" }}>
                    <div>
                        <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                    <div style={{ paddingLeft: "10px" }}>
                        <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                        <h6 style={{ fontSize: "13px" }}>
                            Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                    </div>
                </div >
                <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <ul className="hList10">
                        <li>
                            <div className="menu10">
                                <h2 className="menu-title10">Sign UP</h2>
                                <ul className="menu-dropdown10">
                                    <li onClick={ handlesignup }>Signup as user</li>
                                    <li onClick={ handlecorporatesignup }>Signup as corporate</li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                    <a onClick={handlelogin}>LOGIN</a>
                    
                </div>

            </div>
        </div>


        </>
            )}

    }






    return (
       <>
        <CondtionalRender />
        </>
    )
}

export default Profile
