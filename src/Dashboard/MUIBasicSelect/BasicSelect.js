import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'

export default function BasicSelect({field,type,couponfield1,couponfield2,couponfield3,couponfield4}) {
  const [data, setData] = React.useState([]);
  const [cat, setCat] = React.useState('');

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  if(type == 'addblog'){
    field.onChange(cat)
  }
  

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
    <Box sx={{ 
      // minWidth: 120 
      }}>
      <FormControl style={{width:'100%',marginBottom:'16px'}}>
        <InputLabel id="demo-simple-select-label">Category name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
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

else if(type=='coupon' && couponfield1) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={couponfield1.value}
          label="Category"
          onChange={couponfield1.onChange}
        > 
          <MenuItem value={'code'}>code</MenuItem>
          <MenuItem value={'deal'}>deal</MenuItem>
          <MenuItem value={'printed'}>printed</MenuItem>    
        </Select>
      </FormControl>
    </Box>
  );

}


else if(type=='coupon' && couponfield2) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={couponfield2.value}
          label="Category"
          onChange={couponfield2.onChange}
        > 
          <MenuItem value={'Brand'}>Brand</MenuItem>
          <MenuItem value={'Institute'}>Institute</MenuItem>
          <MenuItem value={'Agency'}>Agency</MenuItem>     
        </Select>
      </FormControl>
    </Box>
  );
}


else if(type=='coupon' && couponfield3) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Allow reviews</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={couponfield3.value}
          label="Category"
          onChange={couponfield3.onChange}
        > 
        {['Yes','No'].map((item,i) =>
        <MenuItem key={i} value={item}>{item}</MenuItem>
        ) 
        }
              
        </Select>
      </FormControl>
    </Box>
  );
}


else if(type=='coupon' && couponfield4) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={couponfield4.value}
          label="Category"
          onChange={couponfield4.onChange}
        > 
        {[1,2,3,4,5,6,9,8,9,10].map((item,i) =>
        <MenuItem key={i} value={item}>{item}</MenuItem>
        ) 
        
        }  
        </Select>
      </FormControl>
    </Box>
  );
}

else if(type == 'updateBlog') {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'1'}
          label="Category"
          onChange={couponfield4.onChange}
        > 
        {[1,2,3,4,5,6,9,8,9,10].map((item,i) =>
        <MenuItem key={i} value={item}>{item}</MenuItem>
        ) 
        
        }  
        </Select>
      </FormControl>
    </Box>

  )
}


}
