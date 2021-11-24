import React from 'react'
import './MyOrders.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


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
    const selector = useSelector((state) => (state)); 
    const [data, setData] = React.useState([])
    const one = 1

    React.useEffect(() => {
        fetchData();
    },[one])

    const fetchData = async() =>{
        await axios({
            method:'POST',
            url:'http://infilate.com/backend/public/api/order/allorders',
            headers:{
                'token':selector.userLoginLogout.token
            },
        }).then(res => {
            setData(res.data.data)
        }).catch(e => console.log(e))
    }

    console.log(data)

    return (
        <div className='parent-cotainer'>

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
                {data && data.map((item,i) => {
                    return (

                        <tr key= {i}>
                            <td id='special'>{item?.webinar_name?.map(v => v.map(v => <p> {v.webinar_name}, </p>) )}</td>
                            <td>{item?.order_id?.map(v => v.order_id)}</td>
                            <td>{ item?.order_id?.map(v => v.amount) }</td>
                            <td>{'date'}</td>
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
        </div>
    )
}

export default MyOrders


                        
                        //  <tr key= {`order${order.order_id}`}>
                        //     <td>{order.ordername}</td>
                        //     <td>{order.orderid}</td>
                        //     <td>{order.payment}</td>
                        //     <td>{order.orderDate}</td>
                        // </tr> 