import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

function Map() {
    
    const useStyles = makeStyles((theme) => ({
        
        paper1: {
            padding: theme.spacing(1),
            margin: 'auto', 
            marginBottom: '20px',
            backgroundColor: 'black',  
            backgroundColor: "#EAEAEA",
            border: '1px solid',
          },
   
      }));
  
const [check, setChecked, classes, paper1] =useState([
    { id: 1, name: "You cannot be sure how." },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
    { id: 4, name: "John Doe" },
    { id: 5, name: "Victor Wayne" },
    { id: 6, name: "Jane Doe" },
  ])
  console.log('nnn',check)
    return (
        <div>
           {check.map((user) => (
        <div className="user">
         <Paper className={classes} style={{borderRadius: '30px', display: 'flex'}}>
            <div style={{ flexGrow: '3'}}><Avatar src="./components/images/1.jpg"></Avatar></div>
            <div style={{ flexGrow: '5', alignSelf: 'center'}}><b>{user.name}</b></div>
            <div style={{ flexGrow: '3'}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
        </Paper>
        </div>
      ))}
    </div>
    )
}

export default Map
