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



function Dashboard() {

    return (

        <Router>
        <Box component='div' pt={22} display='flex'pb={10} >


            <Grid item md={3}>
              <MenuItem2 />
            </Grid>
            <Container maxWidth='lg'>

            
            <Switch>
            <Route path='/Dashboard/Home'> <Home /> </Route>
            </Switch>

            <Switch>
            <Route path='/Dashboard/addBlog'> <AddBlog /> </Route>
            </Switch>


            <Switch>
            <Route path='/Dashboard/addCoupon'> <AddCoupons /> </Route>
            </Switch>


            <Switch>
            <Route path='/Dashboard/addProduct'> <AddProducts /> </Route>
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
            

            </Container>
        </Box>
        </Router>
    )
}

export default Dashboard
