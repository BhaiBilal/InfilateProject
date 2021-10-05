import React from 'react'
// import Header from "../components/headers/Headerj"
import Home from "./Home"
import Domain from "./Domain"
import Recommend from "./Recommend"
import "./Brand.css"
import Frequently from './Frequently'
import Review from './Review'
import Brandpage from './Brandpage'
import {useLocation} from 'react-router-dom'





function Brand() {
    const [dataState,setDataState] = React.useState([])
    const location= useLocation()
  
    React.useEffect(()=>{
  
      location.Post && setDataState(location.Post);
  
  },[location])



    return (
        <>
            {/* <Header /> */}
            <Home />
            <Brandpage data={dataState} />
            <Domain />
            <Recommend />
            <Frequently />
            <Review />

        </>
    )
}

export default Brand

