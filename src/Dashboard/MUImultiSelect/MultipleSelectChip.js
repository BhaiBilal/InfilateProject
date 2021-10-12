import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios'




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '17',
  '18',
  '20',
  // 'Web hosting',
  // 'SMM',
  // 'Digital Marketing',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({field}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [test, setTest] = React.useState([])
  const [categoryList,setCategoryList] = React.useState([])
  let arr = []

  React.useEffect(() => {

    axios({
      method:'GET',
      url:"http://infilate.com/backend/public/api/offer-category/category-list",
  })
    .then(function (response) {
      //handle success
      setCategoryList(response.data.Data)
      console.log(response);
      // window.location.href='http://my.infilate.com/Login'
    })
    .catch(function (err) {
      //handle error
      console.log(err)
      // dispatch(userLogoutRequest())
      // setErrors('error')
      // console.log(err+' user already registered');
    });
  },[])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function addID(id){

    if(test.length==0){
      return setTest([id])
    }

    else if(test.length >=1 && test.includes(id)){
      return setTest(test.filter(i => i!==id))
    }

    else {
      return setTest(p => [...p,id])
    }

  }


field.onChange(test)
// console.log(test)

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          // {...field}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <>
                <Chip key={value} label={value} />
                </>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}>



        {categoryList && categoryList.map((item,index) => (
            <MenuItem
              onClick={() => {
                addID(item.id)
                // field.onChange(test)
              }}
              key={index}
              value={item.name}
              style={getStyles(item.name, personName, theme)}
            >
              {item.name}
            </MenuItem>
          ))}

          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </div>
  );
}
