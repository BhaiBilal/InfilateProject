import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "pages/Hero";

import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "components/headers/Headerj";
import SimplePrimaryBackgroundTestimonial from "components/testimonials/SimplePrimaryBackground.js";
import Services from "components/cards/Services";
import ReviewBox from "components/CategoriesCheckBox/ReviewBox";
import ReviewHome from "pages/ReviewHome";
import Register from "pages/Register";
import AllWebinars from "./AllWebinars";
import AllCourses from "./AllCourses";
import JoinWebinar from "./JoinWebinar";
import PopularCategories from "./PopularCategories";
import Service from "./Service"

// import Tabs from "./Tabs";

export default () => (
  <div>
    

    <Hero />
    {/* <Tabs/> */}
    {/* <AnimationRevealPage> */}
      <PopularCategories />
      <JoinWebinar />

      {/*  <SliderCard />
   <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true}/>
    <FAQ /> */}
      <SubscribeNewsLetterForm />
      <Register />
   
  
      {/*<AllCourses /> */}
      <ReviewHome />

      {/* <Services/> */}
      <SimplePrimaryBackgroundTestimonial />
      <Service />
    
    {/* </AnimationRevealPage> */}
   
  </div>
);
