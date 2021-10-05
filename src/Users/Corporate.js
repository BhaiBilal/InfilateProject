import React from 'react'
import {Radio ,RadioGroup,FormControlLabel,Typography,Container,Grid,TextField,AppBar,Toolbar,Paper
,FormControl,InputBase,Input,Switch }
 from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
   
    input: {
       backgroundColor:"yellow"
   },
   
    form: {
        display: "flex",
        flexDirection: "column",
        
       
        "& label": {
            fontSize: "1rem",
            fontWeight:"bold",
            color: "#444444",
            
        },
                "& select": {
            border: ".2px solid grey",
            outline: "none",
            height: "35px",
            padding: "0px 10px",
            width:"100%"
          
            
        },
        "& input": {
            border: ".2px solid grey",
            outline: "none",
            height: "35px",
            padding: "0px 10px",
            width:"100%"
          
            
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

function Corporate() {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.form}>
                <Typography>Organisation Details</Typography>
                <label >
                    Organisation Type
                    <select name="organisation" id="organisation">
                        <option value="Select Type" >Select Type</option>
                        <option value="tools" >Tools</option>
                        <option value="institute" >Institute</option>
                        <option value="agency" >Agency</option>

                    </select>
                </label>
                <label >
                    Organisation Name
                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
                   Organisation Title
                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
                  Organisation Description
                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
                 Organisation Email

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
                 Organisation Email

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>

                 <label >
                 Category

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
              Address Line 1

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                  <label >
              Address Line 2

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                   <label >
             city

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                  <label >
            State

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                  <label >
            Country

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
            Pincode

                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                  <label >
            Latitudinal Position


                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                 <label >
         Longitudinal Position


                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                  <label >
        GST Number


                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
                <label >
        Contact Number


                    <input type="text" className="input" autoComplete="" name="f_name" placeholder="" value=""  />
                </label>
               
            </form>
        </div>
    )
}

export default Corporate
