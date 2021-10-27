import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllProducts from './AllProducts/AllProducts'
import AllServices from './AllServices/AllServices'
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ContentTabs() {
  const [value, setValue] = React.useState(0);
  const [productList,setProductList] = React.useState([])
  const [serviceList,setServiceList] = React.useState([])

  React.useEffect(() => {
    let cancel
    axios({
      method:'POST',
      url:'http://infilate.com/backend/public/api/app/products/product-list',
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res => setProductList(res.data.Data)).catch(err => { if(axios.isCancel(err)) return })
    
    axios({
      method:'POST',
      url:'http://infilate.com/backend/public/api/app/services/service-list',
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res => setServiceList(res.data.Data)).catch(err => { if(axios.isCancel(err)) return })
   
    return ()=> cancel()
  },[])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} pt={22} px={45}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

        <AllProducts productList={productList} />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllServices serviceList={serviceList} />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}
