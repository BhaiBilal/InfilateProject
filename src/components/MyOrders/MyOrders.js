import React from 'react'
import './MyOrders.css'

const dummydata=[
    {ordername:'(webinar1,webinar2,webinar3)',
    orderid:'orderId',
    payment:'500',
    orderDate:'05-10-2020'},
    
    {ordername:'(webinar1,webinar2,webinar3)',
    orderid:'orderId',
    payment:'500',
    orderDate:'05-10-2020'},

    {ordername:'(webinar1,webinar2,webinar3)',
    orderid:'orderId',
    payment:'500',
    orderDate:'05-10-2020'},

    {ordername:'(webinar1,webinar2,webinar3)',
    orderid:'orderId',
    payment:'500',
    orderDate:'05-10-2020'},

    {ordername:'(webinar1,webinar2,webinar3)',
    orderid:'orderId',
    payment:'500',
    orderDate:'05-10-2020'},
]


function MyOrders() {


    return (
        <div className = "orders-log">
        <table>
            <thead>
            <tr>
                <th>ORDER</th>
                <th>ORDER ID</th>
                <th>PAYMENT</th>
                <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                {dummydata.map((order) => {
                    return (
                        <tr key= {`order${order.orderid}`}>
                            <td>{order.ordername}</td>
                            <td>{order.orderid}</td>
                            <td>{order.payment}</td>
                            <td>{order.orderDate}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tbody>

            </tbody>
        </table>
           {/* <Grid container 
        //    rowSpacing={1} 
        //    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent='center'
            >
           <Paper elevation={1} className={classes.paper}>
            <div style={{display:'flex',flexDirection:'column'}}>
            <Typography style={{textAlign:'center'}}> Ordername </Typography>
            <hr />
            { dummydata.map((v,i) => 
                <Typography className = {classes.typography} > { v.ordername } </Typography>
            ) }
            
            </div>

            <div style={{display:'flex',flexDirection:'column'}} >
            <Typography style={{textAlign:'center'}}>Orderid</Typography>
            <hr />
            { dummydata.map((v,i) => 
                <Typography className = {classes.typography} > { v.orderid } </Typography>
            ) }
            </div>

            <div style={{display:'flex',flexDirection:'column'}} >
            <Typography style={{textAlign:'center'}}>payment</Typography>
            <hr />
            { dummydata.map((v,i) => 
                <Typography className = {classes.typography} > { v.payment } </Typography>
            ) }
            </div>

            <div style={{display:'flex',flexDirection:'column'}} >
            <Typography style={{textAlign:'center'}}> order Date</Typography>
            <hr />
            { dummydata.map((v,i) => 
                <Typography className = {classes.typography} > { v.orderDate } </Typography>
            ) }
            </div>

           </Paper>
            </Grid> */}
        </div>
    )
}

export default MyOrders
