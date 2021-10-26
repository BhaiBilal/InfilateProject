import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Checkbox, FormControlLabel} from '@mui/material';


function MenuFilters({ type, setType, list }) {
    const classes = useStyles();
    let List = [] 
    list.map((v,i) => v.category.map((v,i) => List.push(v.name) ))
    let checkboxData = [...new Set(List)]

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
          {checkboxData && checkboxData.map((v,i) => 
              <FormControlLabel key={i} control={<Checkbox />} label={v} /> 
               )}
          </div>
        </Grid>
</div>
    )
}

export default MenuFilters
