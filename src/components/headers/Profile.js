import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cashback from "../../images/cashback2.png"
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import { useHistory } from 'react-router-dom'


function Profile({handleProfile}) {

    const selector = useSelector((state) => state);
    const dispatch = useDispatch()
    const loginbtn = {
        textAlign:'center',
        fontWeight:'unset',
        background:'white',
        borderRadius:'5px',

        '&:hover':{
            background:'#ff4032'
        }

    }

    const handleLogout=() => {
        dispatch(userLogoutRequest())
    }


    const handleClick = (e) => {
        if (e == "Signup as user") {
            window.location.href = 'http://infilate.com/RegisterUser'
        }

        else if (e == "Signup as corporate") {
            window.location.href = 'http://infilate.com/RegisterCorporate'
        }

        else if(e=="contents"){
            window.location.href = 'http://infilate.com/Static' 
        }

    }



    function CondtionalRender() {


        if(selector.userLoginLogout.role_id=='3'){

          return(  <div style={{ zIndex: "999" }} className="dropdown">

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
</div> )
        }

        else if(selector.userLoginLogout.role_id=='2'){

           return (  <div style={{ zIndex: "999" }} className="dropdown">

            <button className="dropbtn"><i style={{paddingRight:'7px'}} class="fas fa-user fa-2"></i>{selector.userLoginLogout.FullName}</button>
            <div className="dropdown-content">
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", background:'white' }}>
                     <div>
                        <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                    <div style={{ paddingLeft: "10px" }}>
                        <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                        <h6 style={{ fontSize: "13px" }}>
                            Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                    </div> 
                </div >
                <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row",background:'white' }}>
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
                 <a onClick={handleProfile}>Profile</a>
                    <a onClick={handleLogout}>LOGOUT</a>
                </div>
            
            </div>
            </div> 
           )}


        else {
            return (
            <div style={{ zIndex: "999" }} className="dropdown">
            <button className="dropbtn"><i style={{paddingRight:'7px'}} class="fas fa-user fa-2"></i>Profile</button>
            <div className="dropdown-content">
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "white" }}>
                    <div>
                        <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                    <div style={{ paddingLeft: "10px" }}>
                        <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                        <h6 style={{ fontSize: "13px" }}>
                            Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                    </div>
                </div >
                <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", 
                justifyContent: "space-around", alignItems: "center", flexDirection: "row", background:'white' }}>
                    <ul className="hList10">
                        <li>
                            <div className="menu10">
                                <h2 className="menu-title10">Sign UP</h2>
                                <ul className="menu-dropdown10">
                                    <li onClick={() => handleClick("Signup as user")}>Signup as user</li>
                                    <li onClick={() => handleClick("Signup as corporate")}>Signup as corporate</li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                    <a href="http://my.infilate.com/Login">LOGIN</a>
                </div>

            </div>
        </div>
            )}

    }






    return (
       <>
        <CondtionalRender />
        </>
    )
}

export default Profile
