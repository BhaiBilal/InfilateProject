import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ getValues, setValue }) {
  const [age, setAge] = React.useState('');



  const handleChange = (event) => {
      setValue('category_name',event.target.value)
    setAge(event.target.value);
  };

  const renderDefault = () => {
      if(age!=''){
        return  age
      }

      else {
        return(
            <p> {getValues} </p>
        )
      }

  }


  console.log(getValues)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard' fullWidth>
        <InputLabel id="demo-simple-select-label">{ getValues!='' ? null :  'Category name' } </InputLabel>
        <Select
          displayEmpty
          value={age}
          renderValue={renderDefault}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value='Design'>Design</MenuItem>
          <MenuItem value='Marketing'>Marketing</MenuItem>
          <MenuItem value='Productivity'>Productivity</MenuItem>
          <MenuItem value='Sales'>Sales</MenuItem>
          <MenuItem value='Technology'>Technology</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}