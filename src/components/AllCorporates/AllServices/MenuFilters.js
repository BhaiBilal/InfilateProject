import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';



function MenuFilters({type,setType}) {
    const classes = useStyles();

    // console.log(type)

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
        </Grid>
    )
}

export default MenuFilters
