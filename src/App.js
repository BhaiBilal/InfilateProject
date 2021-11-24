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
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

//import ContactUsForm from "components/forms/SimpleContactUs.js";
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
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */

// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";

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
import DashBoard from './Dashboard/Dashboard'
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
        // dispatch(userLogoutRequest())
        // dispatch(cartReset())
      }
    })
  }
   

  fetchTotalCartItems()
 

  
  return (
    <>
      
    <Router>
      <ScrollToTop />
      <Headerj/>
      <Switch>
      <Route path="/components/:type/:subtype/:name">
      <ComponentRenderer />
      </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        {/* <Route path="/login"><Login /> </Route> */}
        <Route path="/blog"> <BlogIndexPage /> </Route>
        <Route path="/pressRoom"> <Pressroom /> </Route>
        <Route path="/registerWebinar"> <ContactUsForm /> </Route>
        <Route path="/checkout"> <CheckOut /></Route>
        <Route path="/Brand/:id"> <Brand /></Route>
        <Route path="/AllCorporates"> <Tabs /></Route>
        <Route path="/MainBlog"> <MainBlog /></Route>
        <Route path="/BlogDetail/:id"> <BlogHead /></Route>
        <Route path="/faQs"> <FAQs /></Route>
        <Route path="/privacyPolicy"> <PrivacyPolicy /></Route>
        <Route path="/terms&Conditions"> <TermsOfService /></Route>
        <Route path="/Coupon"> <Coupon /></Route>
        <Route path="/AllCoupons"> <AllCoupon /></Route>
        <Route path="/SeeMoreReviews"> <Seemorereviews /></Route>
        <Route path="/Review/:id"> <Review /></Route>
        <Route path="/ReviewSelect"> <ReviewSelect /></Route>
        <Route path="/MyOrders"> <MyOrders /></Route>
        <Route path="/webinarDetails/:id"> <CardDetails /></Route>
            
        <Route path="/other"> <Static1 /> </Route> 
        <Route path="/others/:id"> <Section1 /> </Route> 
        

        {
            selector.userLoginLogout.role_id=='2' ?   <Route path="/Dashboard"> <DashBoard /> </Route> : null 
        }

        {
          selector.userLoginLogout.role_id!=='2' && selector.userLoginLogout.role_id!=='3'  ?  <Route path="/RegisterUser"> <Signup /></Route>  :
            null
          }

          {
           selector.userLoginLogout.role_id!=='3' &&  selector.userLoginLogout.role_id!=='2'  ?  <Route path="/RegisterCorporate"><RegisterCorporate/></Route> :
            null
          }

         {
          selector.userLoginLogout.role_id!=="2" && selector.userLoginLogout.role_id!== "3" ?  <Route path="/Login">  <Login/></Route> : null
          } 


         
          {/* <Route path="/Login">  <Login/></Route> */}
        <Route path="/purchase"><Purchase /></Route>
        <Route path="/thankyou"><ThankYou /></Route>
        <Route path="/domain"><Domain /></Route>
        <Route path="/tools"><Tools /></Route>
        <Route path="/Comparison/:id"><Comparison /></Route>
        <Route path="/institute"><Institute /></Route>
        {/* <Route path="/map"><Map /></Route> */}
        <Route path="/category"><CategoriesCheckBox /></Route>
        <Route path="/searchMap"><SearchPage /></Route>
        <Route path="/allList"><SearchPage2 /></Route>
        <Route path="/aboutUs"><AboutUs /></Route>
        <Route path="/contactUs"><ContactUs /></Route>
        <Route path="/reviewSubmit"><ReviewSubmit /></Route>
        <Route path="/product"><Product /></Route>
        <Route path="/Allwebinar"><AllWebinars /></Route>
        <Route path="/SearchList/:id"><SearchList /></Route>
        {selector.userLoginLogout.isUserLoggedIn == true ? <Route path="/addToCart"><Cart cartItems={cartItems} /></Route> :
        null
        }
        
        {/* <Route path="/">
          <HotelTravelLandingPage />
        </Route> */}
      <Route path="/">
      <Home />
      </Route>
        

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
