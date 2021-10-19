import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

    const matches = useMediaQuery('(min-width:900px)');
    console.log(matches)

    const styles ={
        flexDirection:`${matches == false ? 'column' : 'row'}`
    }
    return (

        <Router>
        <Box component='div' pt={matches == false ? 12 : 22} display='flex'pb={10}
        style={styles}
        >

            <Grid item md={3}>
              <MenuItem2 mediaQuery={matches} />
            </Grid>
            
            <Container maxWidth='lg' style={{marginLeft:'0px',marginRight:'0px'}}>   


            <Switch>
            <Route path='/Dashboard/Home'> <Home /> </Route>
            </Switch>



            <Switch>
            <Route path='/Dashboard/addProduct'> <AddProducts /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/addBlog'> <AddBlog /> </Route>
            </Switch>


            <Switch>
            <Route path='/Dashboard/addCoupon'> <AddCoupons /> </Route>
            </Switch>


            <Switch>
            <Route path='/Dashboard/addService'> <AddServices /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/updateService'> <UpdateService /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/updateProduct'> <UpdateProduct /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/updateCoupon'> <UpdateCoupon /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/updateBlog/:id'> <UpdateBlog /> </Route>
            </Switch>



            <Redirect to="/Dashboard/Home" />
            </Container>
        </Box>
        </Router>
    )
}

export default Dashboard
