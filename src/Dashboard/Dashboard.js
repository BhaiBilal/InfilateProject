import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link,  useRouteMatch } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from './MenuItem'
import AddBlog from './Contents/Addblog'
import AddProducts from './Contents/AddProducts'
import AddCoupons from './Contents/AddCoupons'
import AddServices from './Contents/AddServices'
import UpdateService from './Contents/UpdateService'
import UpdateProduct from './Contents/UpdateProduct'
import UpdateBlog from './Contents/Updateblog'
import UpdateCoupon from './Contents/UpdateCoupon'
import Home from './Contents/Home'
import MenuItem2 from './MenuItem2'
import { Redirect } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Dashboard() {
    let { path, url } = useRouteMatch();
    const matches = useMediaQuery('(min-width:900px)');
    console.log(path)

    const styles ={
        flexDirection:`${matches == false ? 'column' : 'row'}`
    }
    return (
        <Router>
        <Box component='div' pt={matches == false ? 12 : 22} display='flex' pb={10}
        style={styles}
        >

            <Grid item md={3}>
              <MenuItem2 mediaQuery={matches} />
            </Grid>
            
            <Container maxWidth='lg' style={{marginLeft:'0px',marginRight:'0px'}}>   



            {/* <Redirect to="/Dashboard/Home" /> */}
            </Container>
        </Box>
        </Router>
    )
}

export default Dashboard
