import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ getValues, setValue }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setValue('corporate_type',event.target.value)
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



  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard' fullWidth>
        <InputLabel id="demo-simple-select-label">{ getValues!='' ? null :  'Corporate type' }</InputLabel>
        <Select
          displayEmpty
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={renderDefault}
        >
          <MenuItem value='Digital Brand'> Digital Brand </MenuItem>
          <MenuItem value='Digital Marketing Institutes'> Digital Marketing Institute </MenuItem>
          <MenuItem value='Digital Agencies'> Digital Agencies </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}