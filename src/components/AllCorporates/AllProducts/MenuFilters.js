import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Checkbox, FormControlLabel} from '@mui/material';
import axios from 'axios'


function MenuFilters({ type, setType,arr2, setArr2, arr3, setArr3, value}) {
    const [list, setList] = React.useState([])
    
    const classes = useStyles();
    let List = [] 
   

    React.useEffect(() => {
      const formdata = new FormData()
      formdata.append('category_ids',`[]`)
      axios({
        method:'POST',
        url:'http://infilate.com/backend/public/api/app/products/product-list',
        headers: {
          "Content-Type":"multipart/form-data"
      },
        data:formdata,
      }).then(res => 
        {
          setList(res.data.Data)
        }
         ).catch(err => { console.log(err)})
    },[])






    list.map((v,i) => v.category.map((v,i) => List.push(v) ))
    

    const uniqueIds = [];

    const unique = List.filter(element => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }
    });



   


    const handleClick = (id,index) => {

      if(arr2.length == 0){
        setArr2(arrold => [...arrold,id])
      }
      else if(arr2.length>0 && arr2.includes(id)){
        
        // arr1.splice(arr1.indexOf(item),1)
        setArr2(arr2.filter(i=> i!==id))
          // console.log(arr1)      
        }
        else {
          setArr2(arrold=>[...arrold,id])
        }
      }



  


    return (
      <div>
        <Grid item>
            <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="Most Recent">Most Recent</MenuItem>
              <MenuItem value="User Reviews">User Reviews</MenuItem>
              <MenuItem value="Brands">Brands</MenuItem>
              <MenuItem value="Institutes">Institutes</MenuItem>
              <MenuItem value="Agencies">Agencies</MenuItem>
            </Select>

          </FormControl>


       
          <div style={{display:'flex',flexDirection:'column',paddingTop:'25px'}}>
          {unique && unique.map((item,i) => 
              <FormControlLabel onClick={()=> handleClick(item.id)} key={i} control={<Checkbox />} label={item.name} /> 
               )}
              
          </div>
        </Grid>
</div>
    )
}

export default MenuFilters
