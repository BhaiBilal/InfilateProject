import React from 'react'
import { useState } from 'react'
import Axios from "axios"
import {Radio ,RadioGroup,FormControlLabel,Typography,Container,Grid,TextField,AppBar,Toolbar,Paper
,FormControl,InputBase,Input,Switch }
 from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import user3 from "../images/user3.jpg"
import user5 from "../images/login3.jpg"

const useStyles = makeStyles((theme) => ({
    mainHead: {
        paddingTop: "100px",
        position:"relative"
    },
    
    root: {
       
         backgroundColor:"#F9F9F9"
      
    },
  button1: {
               width: "150px",
               height:"40px",
           marginLeft:"150px",
            backgroundColor:"#6415FF",
           
        },
    
    leftdiv: {
        backgroundImage: `url(${user5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height: "100%",
        padding:"4rem",
         "& h1": {
            fontSize: "2rem",
            fontWeight: "bold",
            color:"#4C4C6D",
        },
          "& h2": {
            fontSize: "2rem",
            fontWeight: "500",
              color: "#4C4C6D",
            marginBottom:"40px"
        },
           
        "& a": {
            fontSize: "1rem",
            fontWeight:"bold",
            color:"white",
        }
        
        },
    rightdiv: {
    padding:"0rem 8rem"
    },

    formSpace: {
       
      
    },
    form: {
        padding:"10px",
       
        "& label": {
            fontSize: "1rem",
            fontWeight:"500",
            color: "#444444",
            
        },
        "& input": {
            border: ".2px solid grey",
            outline: "none",
            height: "35px",
            padding: "0px 5px",
            width: "100%",
            "placeholder": {
                fontSize:"2rem"
            }
          
            
        },
        "& button": {
            width: "100%",
            height: "40px",
            backgroundColor: "#6415FF",
            fontSize: "1.5rem",
            color: "white",
            transition:"all .5s ease",
            "&:hover": {
                border: "2px solid grey",
                backgroundColor: "white",
                color:"#444444"
                
            }
        }
    },

   
  
  
    //width:'40%'
   // float:'right',
  // marginRight:'9%',
 

}));





function RegisterUser() {
const classes = useStyles();
    const [user, setUser] = useState({
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    
    let name, value;
    
    const handleInputs = (e) => {
        name = e.target.name
        value=e.target.value
setUser({...user,[name]:value})

        {/*--
   async function  signUp() {
        let item = { f_name, l_name, email, password, password_confirmation }
        
     let result =await   fetch("http://netdemo.site/infilate/public/api/auth/register", {
            method: "POST",
            body: JSON.stringify(item),
            header: {
                 "Content-Type": "application/json; charset=utf-8"
            }
        }
        )
        result = await result.json()
    console.warn("result",result) ---*/}
    }

   
    const formData = new FormData()
    formData.append("f_name",user)
    formData.append("l_name",user)
    formData.append("email", user)
    formData.append("password",user)
    formData.append("password_confirmation",user)
    
    const PostData = async (e) => {
        e.preventDefault();
        const { f_name, l_name, email, password, password_confirmation } = user;
        console.log(user);
        const result = await Axios("http://netdemo.site/infilate/public/api/auth/register", {
            method: "POST",
            data: formData,
            body: JSON.stringify({
               user
            }),
            headers: {
                "Content-Type": "'multipart/form-data'"
            }
        })
            .then((response) => {
            console.log(response)
            })
        .catch((response) => {
            console.log(response)
            })

    }


    return (
        <>
            <div className={classes.mainHead}>
        <div className={classes.root} style={{padding:"4rem", height: "100vh",width:"100%" }}>

            <Grid container  style={{backgroundColor:"white"}} >
                <Grid item md={6}  >
                            <div className={classes.leftdiv}>
                                <h1>Welcome to Infilate</h1>
                                <h2>Sign in to continue to your account </h2>
                              <button className={classes.button1}>  <a href="#">Sign In </a> </button>

                    </div>

                </Grid>
                        <Grid item md={6} className={classes.rightdiv}>
                            <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#053742",textAlign:"center"}}>Registration</h1>
                    <form className={classes.form} method="POST" >
                        <div classname={classes.formSpace}>
                <label >
                            First Name
                            <br/>
                <input type="text" className="formdata" autoComplete="" name="f_name" placeholder="first name" value={user.f_name} onChange={handleInputs} />
                </label>
                </div>
                        <br />
                         <div classname={classes.formSpace}>
                <label >
                            Last Name
                             <br/>
                <input type="text" className="formdata" autoComplete="" name="l_name" placeholder="last name" value={user.l_name} onChange={handleInputs} />
                </label>
                </div>
                        <br />
                         <div classname={classes.formSpace}>
                <label >
                            E-mail
                             <br/>
                <input type="email" className="formdata" autoComplete="" name="email" placeholder="email" value={user.email} onChange={handleInputs} />
                      </label>
                      </div>
                        <br />
                         <div classname={classes.formSpace}>
                        <label >
                            Password
                             <br/>
                <input type="password" className="formdata" autoComplete="" name="password" placeholder="password" value={user.password} onChange={handleInputs} />
                            </label>
                            </div>
                        <br />
                         <div classname={classes.formSpace}>
                            <label >
                            Confirm Password
                             <br/>
                                <input type="password" className="formdata" autoComplete="" name="password_confirmation" placeholder="confirm password" value={user.password_confirmation} onChange={handleInputs} />
                                 </label>
                                 </div>
                <br />
                <button classname={classes.button} onClick={PostData}>Sign Up</button>
            </form>
                </Grid>
            </Grid>
            
          </div>
          
            </div>
            </>
    )

}
export default RegisterUser
