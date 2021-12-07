import "tailwindcss/dist/base.css";
// import "styles/globalStyles.css";
import React from "react";
import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import Home from "pages/Home.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Brand from "../src/Brands/Brand"
import Headerj from "components/headers/Headerj";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Coupon from "./couponMain/Coupon"
import AllCoupon from './pages/AllCoupons'
import './App.css'

import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import CheckOut from "components/forms/Checkout";
import Purchase from "components/Purchase/Purchase";
import ThankYou from "components/Thankyou/ThankYou";
import Domain from "pages/Domain.js";
import Tools from "pages/Tools.js";
import Comparison from "pages/Comparison.js";
import Institute from "pages/Institute.js";
import Product from "pages/Product";
import SearchPage from 'SearchPage/Search'
import SearchPage2 from 'SearchPage2/Search2'
import CardDetails from 'CardDetails/CardDetails'
import BlogIndexPage from "pages/BlogIndex.js";
import AddProducts from './Dashboard/Contents/AddProducts'
import AddCoupons from './Dashboard/Contents/AddCoupons'
import AddServices from './Dashboard/Contents/AddServices'
import UpdateService from './Dashboard/Contents/UpdateService'
import UpdateProduct from './Dashboard/Contents/UpdateProduct'
import UpdateBlog from './Dashboard/Contents/Updateblog'
import UpdateCoupon from './Dashboard/Contents/UpdateCoupon'
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import CategoriesCheckBox from "components/CategoriesCheckBox/CategoriesChekBox";
import ReviewBox from "components/CategoriesCheckBox/ReviewBox";
import ReviewSubmit from "components/CategoriesCheckBox/ReviewSubmit";
import AllWebinars from "pages/AllWebinars";
import Static1 from "StaticPage/Static1"
import Tabs from './components/AllCorporates/Tabs'
import MainBlog from "BlogSection/MainBlog";
import BlogHead from "BlogSection/BlogHead";
import Review from "mainReview/Review"
import ReviewSelect from "mainReview/ReviewSelect"
import Signup from "Users/Signup";
import RegisterCorporate from "Users/RegisterCorporate";
import Login from "Users/Login"
import ScrollToTop from "./ScrollToTop";
import AboutUs from './components/aboutus/Aboutus'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import { cartReset } from 'redux/CartItemsSlice';
import ContactUs from 'components/contactUs/Contact'
import FAQs from './components/faqs/TwoColumnPrimaryBackground'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'

import DashBoardHome from './Dashboard/Contents/Home'
import AddBlog from './Dashboard/Contents/Addblog'

import SearchList from 'components/SearchList/SearchList' 
import Pressroom from "components/Pressroom/Pressroom";
import Cart from 'components/cart/Cart'
import { cartDispatch } from 'redux/CartItemsSlice';
import axios from 'axios'
import Section1 from "Template/Section1";
import MyOrders from 'components/MyOrders/MyOrders'
import Seemorereviews from "components/SeeMoreReviews/Seemorereviews";


export default function App() {
  const selector = useSelector((state) => (state));
  const [cartItems,setCartitems] = React.useState([])
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetchTotalCartItems();
  }, [])


  const fetchTotalCartItems = () => {
    axios({
        method:'POST',
        url:'http://infilate.com/backend/public/api/app/cart/items-in-cart',
        headers:{
            'token':selector.userLoginLogout.token
        }
    }).then(res => {
        // console.log(res)
        setCartitems(res.data.Data)
        const count = res.data.Data.length
        dispatch(cartDispatch({count}))
    }).catch(e => {
      if(e) {
        console.log(e)
        // dispatch(userLogoutRequest())
        // dispatch(cartReset())
      }
    })
  }
  
 

  
  return (
    <>
      
    <Router>
      <ScrollToTop />
      <Headerj/>
      <Switch>
      {/* <Route exact path="/components/:type/:subtype/:name">
      <ComponentRenderer />
      </Route>
        <Route exact path="/components/:type/:name">
          <ComponentRenderer />
        </Route> */}
        {/* <Route exact path="/login"><Login /> </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component = {BlogIndexPage}/>
        <Route exact path="/pressRoom" component = {Pressroom}/> 
        <Route exact path="/registerWebinar"> <ContactUsForm /> </Route>
        <Route exact path="/checkout"> <CheckOut /></Route>
        <Route exact path="/Brand/:id"> <Brand /></Route>
        <Route exact path="/AllCorporates"> <Tabs /></Route>
        <Route exact path="/MainBlog"> <MainBlog /></Route>
        <Route exact path="/BlogDetail/:id"> <BlogHead /></Route>
        <Route exact path="/faQs"> <FAQs /></Route>
        <Route exact path="/privacyPolicy"> <PrivacyPolicy /></Route>
        <Route exact path="/terms&Conditions"> <TermsOfService /></Route>
        <Route exact path="/Coupon"> <Coupon /></Route>
        <Route exact path="/AllCoupons"> <AllCoupon /></Route>
        <Route exact path="/SeeMoreReviews"> <Seemorereviews /></Route>
        <Route exact path="/Review/:id"> <Review /></Route>
        <Route exact path="/ReviewSelect"> <ReviewSelect /></Route>
        <Route exact path="/MyOrders"> <MyOrders /></Route>
        <Route exact path="/webinarDetails/:id"> <CardDetails /></Route>
            
        <Route exact path="/other"> <Static1 /> </Route> 
        <Route exact path="/others/:id"> <Section1 /> </Route> 
        
        <Route exact path='/DashboardHome' component={DashBoardHome} />

        <Route exact path='/addProduct' component={AddProducts} />

        <Route exact path= '/addBlog' component={AddBlog} />    

        <Route exact path='/addCoupon' component={AddCoupons} />

        <Route exact path='/addService' component={AddServices} />  

        <Route exact path='/updateService' component={UpdateService} /> 

        <Route exact path='/updateProduct' component={UpdateProduct} /> 

        <Route exact path='/updateCoupon' component={UpdateCoupon} /> 

        <Route exact path='/updateBlog' component={UpdateBlog} /> 

        {
          selector.userLoginLogout.role_id=='2' || selector.userLoginLogout.role_id=='3'  ?  null  : <Route exact path="/RegisterUser" component={Signup} />
            
          }

          {
           selector.userLoginLogout.role_id=='3' ||  selector.userLoginLogout.role_id=='2'  ? null  : <Route exact path="/RegisterCorporate" component={RegisterCorporate} />
            
          }

         {
          selector.userLoginLogout.role_id=="2" || selector.userLoginLogout.role_id== "3" ? null : <Route exact path="/Login" component={Login} />
          } 


         
          {/* <Route exact path="/Login">  <Login/></Route> */}
        <Route exact path="/purchase"><Purchase /></Route>
        <Route exact path="/thankyou"><ThankYou /></Route>
        <Route exact path="/domain"><Domain /></Route>
        <Route exact path="/tools"><Tools /></Route>
        <Route exact path="/Comparison/:id"><Comparison /></Route>
        <Route exact path="/institute"><Institute /></Route>
        {/* <Route exact path="/map"><Map /></Route> */}
        <Route exact path="/category"><CategoriesCheckBox /></Route>
        <Route exact path="/searchMap"><SearchPage /></Route>
        <Route exact path="/allList"><SearchPage2 /></Route>
        <Route exact path="/aboutUs"><AboutUs /></Route>
        <Route exact path="/contactUs"><ContactUs /></Route>
        <Route exact path="/reviewSubmit"><ReviewSubmit /></Route>
        <Route exact path="/product"><Product /></Route>
        <Route exact path="/Allwebinar"><AllWebinars /></Route>
        <Route exact path="/SearchList/:id"><SearchList /></Route>
        {selector.userLoginLogout.isUserLoggedIn == true ? <Route exact path="/addToCart"><Cart cartItems={cartItems} /></Route> :
        null
        }
        
        {/* <Route exact path="/">
          <HotelTravelLandingPage />
        </Route> */}
        

        </Switch>
        <Footer/>
      </Router>
      
      </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
