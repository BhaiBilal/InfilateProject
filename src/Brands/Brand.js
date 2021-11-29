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
    const [coupondata, setCouponData] = React.useState([])
    const [couponLength, setCouponLength] = React.useState({all:0,code:0,deal:0,printed:0})

    React.useEffect(() => {
        axios({
            method: 'POST',
            url: `http://infilate.com/backend/public/api/app/organisation/detail/${id}`,
          }).then(res => {
            setData(res.data.Data[0])
            setCouponLength(prevState => ({
              ...prevState,
              all : res.data.Data[0].coupon.length,
              code : res.data.Data[0].coupon.filter(v => v.type == 'code').length,
              deal : res.data.Data[0].coupon.filter(v => v.type == 'deal').length,
              printed : res.data.Data[0].coupon.filter(v => v.type == 'printed').length,
            }))
            setCouponData(res.data.Data[0].coupon)
          }).catch(e => {
            console.log(e)
          })
    },[])

    console.log(couponLength)

    const handleBtn = (e) => {
      let word = e.target.value;
      if (word === "All") {
          setCouponData(data?.coupon)
      }

      else if (word === "Code") {
          const filtered = data?.coupon.filter(data => data?.type === "code");
          setCouponData(filtered)
      }
      else if (word === "Deal") {
        const filtered = data?.coupon.filter(data => data?.type === "deal");
        setCouponData(filtered)
      }

      else if (word === "Printed") {
        const filtered = data?.coupon.filter(data => data?.type === "printed");
        setCouponData(filtered)
      }
  }

// console.log(data?.coupon)

    return (
        <>
            {/* <Header /> */}
            <div style={{width:'100%'}}>
            <Home />
            <Brandpage data={data} />
            <Domain coupondata={coupondata} handleBtn={handleBtn} couponLength={couponLength} />
            <Recommend coupondata={data?.allcoupon && data.allcoupon[0]} />              
            </div>

            {/* <Frequently /> */}
            {/* <Review /> */}

        </>
    )
}

export default Brand

