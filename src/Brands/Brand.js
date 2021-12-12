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
    const [exist, setExist] = React.useState(true)


    

    React.useEffect(() => {
        axios({
            method: 'POST',
            url: `http://infilate.com/backend/public/api/app/organisation/detail/${id}`,
          }).then(res => {
            console.log(res)
            if(res.data.Data.length > 0) {
              setData(res.data.Data[0])
              setCouponLength(prevState => ({
                ...prevState,
                all : res.data.Data[0]?.coupon.length,
                code : res.data.Data[0]?.coupon.filter(v => v.type == 'code').length,
                deal : res.data.Data[0]?.coupon.filter(v => v.type == 'deal').length,
                printed : res.data.Data[0]?.coupon.filter(v => v.type == 'printed').length,
              }))
              setCouponData(res.data.Data[0].coupon)
            }
            else {
              setExist(false)
            }

          }).catch(e => {
            console.log(e)
          })
    },[])


    const handleBtn = (e) => {
      let word = e.target.value;
      if (word === "All") {
          setCouponData(data?.coupon)
      }

      else if (word === "Code") {
          const filtered = data?.coupon?.filter(data => data?.type === "code");
          setCouponData(filtered)
      }
      else if (word === "Deal") {
        const filtered = data?.coupon?.filter(data => data?.type === "deal");
        setCouponData(filtered)
      }

      else if (word === "Printed") {
        const filtered = data?.coupon?.filter(data => data?.type === "printed");
        setCouponData(filtered)
      }
  }

// console.log(data)

    return (
        <>
            {/* <Header /> */}
            <div style={{width:'100%'}}>

            { exist ? 
            <>
             <Home data={data?.organisation} />
            <Brandpage data={data} />
            <Domain coupondata={coupondata} handleBtn={handleBtn} couponLength={couponLength} />
            <Recommend coupondata={data?.allcoupon && data.allcoupon[0]} /> </>
             : <> 
             <div style={{display:'flex', justifyContent:'center'}}>
             <div className='waring-message'>
               <img src='https://th.bing.com/th/id/R.e94b0bb00b08ae3e35d92874f39ec09e?rik=rvzfd44DmPf5aQ&riu=http%3a%2f%2fwww.downloadclipart.net%2flarge%2f22280-warning-sign-design.png&ehk=39F2Ky%2bHku3yXsuWNHtvYQOqXopSkfSncj2bcx%2bSYLk%3d&risl=&pid=ImgRaw&r=0' alt='' />
               <p> organisation not exist</p>
             </div>
             </div>
             </>
             }
            </div>

            {/* <Frequently /> */}
            {/* <Review /> */}

        </>
    )
}

export default Brand

