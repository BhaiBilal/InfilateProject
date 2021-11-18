import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import {Checkbox, FormControlLabel} from '@mui/material';
import axios from 'axios'

function MenuFilters({ type, setType, arr3, setArr3 }) {
    const classes = useStyles();
    const [list2, setList2] = React.useState([])
    let List2 = [] 
    // console.log(type)

    React.useEffect(() => {
      const formdata = new FormData()
      formdata.append('category_ids',`[]`)
      axios({
        method:'POST',
        url:'http://infilate.com/backend/public/api/app/services/service-list',
        headers: {
          "Content-Type":"multipart/form-data"
      },
        data:formdata,
      }).then(res => 
        {
          setList2(res.data.Data)
        }
         ).catch(err => { console.log(err)})
    },[])

    list2.map((v,i) => v.category.map((v,i) => List2.push(v) ))

    const uniqueIds2 = [];

    const unique2 = List2.filter(element => {
      const isDuplicate2 = uniqueIds2.includes(element.id);

      if (!isDuplicate2) {
        uniqueIds2.push(element.id);

        return true;
      }
    });

    const handleClick2 = (id,index) => {

      if(arr3.length == 0){
        setArr3(arrold => [...arrold,id])
      }
      else if(arr3.length>0 && arr3.includes(id)){
        
        // arr1.splice(arr1.indexOf(item),1)
        setArr3(arr3.filter(i=> i!==id))
          // console.log(arr1)      
        }
        else {
          setArr3(arrold=>[...arrold,id])
        }
      }

    return (
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
          {unique2 && unique2.map((item,i) => 
              <FormControlLabel onClick={()=> handleClick2(item.id)} key={i} control={<Checkbox />} label={item.name} /> 
               )}
          </div>
        </Grid>
    )
}

export default MenuFilters
