import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'

export default function BasicSelect({field,type}) {
  const [data, setData] = React.useState([]);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  field.onChange(age)

  React.useEffect(() => {

    axios({
        method:"GET",
        url:'http://infilate.com/backend/public/api/offer-category/category-list',
    }).then((res) => setData(res.data.Data))
    .catch((err) => console.log(err))
  },[])

//   console.log(data)

if(type=='addblog'){

  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category name"
          onChange={handleChange}
        >
          <MenuItem value={'Marketing'}>Marketing</MenuItem>
          <MenuItem value={'Productivity'}>Productivity</MenuItem>
          <MenuItem value={'Technology'}>Technology</MenuItem>
          <MenuItem value={'Design'}>Design</MenuItem>
          <MenuItem value={'Sales'}>Sales</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )

}

else {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field.value}
          label="Category"
          onChange={field.onChange}
        >
            {data && data.map((item,index) => 
            
            <MenuItem key={index} value={item.id}>{item.name}</MenuItem>  
            
            )}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );

}

}
