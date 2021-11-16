import React from 'react'
import Header from "../components/headers/Headerj"
import Home from "./Home"
import Domain from "./Domain"
import Recommend from "./Recommend"
import "./Brand.css"
import Frequently from './Frequently'
import Review from './Review'
import Brandpage from './Brandpage'
import { useParams } from 'react-router-dom'
import axios from 'axios'




function Brand() {

    const { id } = useParams()
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios({
            method: 'POST',
            url: `http://infilate.com/backend/public/api/app/organisation/detail/${id}`,
          }).then(res => {
            setData(res.data.Data[0])
          }).catch(e => {
            console.log(e)
          })
    },[])

// console.log(data?.coupon)

    return (
        <>
            {/* <Header /> */}
            <Home />
            <Brandpage data={data} />
            <Domain coupondata={data?.coupon} />
            <Recommend coupondata={data?.allcoupon && data.allcoupon[0]} />
            {/* <Frequently /> */}
            {/* <Review /> */}

        </>
    )
}

export default Brand

