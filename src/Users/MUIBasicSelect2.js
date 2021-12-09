import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect2({field}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  field.onChange(age)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Holder Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value='Sole Proprietorship'>Sole Proprietorship</MenuItem>
          <MenuItem value='Director , Pvt Ltd'>Director , Pvt Ltd</MenuItem>
          <MenuItem value='Partnership'>Partnership</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}