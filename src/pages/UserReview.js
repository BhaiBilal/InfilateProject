import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import {withStyles} from "@material-ui/core/styles";
import StarIcon from '@material-ui/icons/Star'; 
import {Divider, Grid} from "@material-ui/core";
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './userreview.css'

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
  ${props => props.active && tw`bg-primary-500 text-gray-100`}
`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-gray-500`}
  }
`;

const PlanAction = tw.div`px-4 pb-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
`;

export default ({
  subheading = "User Reviews",
  heading = "User Reviews",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "View",
  planDurations = [
    {
      text: "Month",
      switcherText: "Monthly",
    },
    {
      text: "Year",
      switcherText: "Yearly",
    }
  ],data
}) => {
  const defaultPlans = [
    // {
    //   name: "Starting From",
    //   durationPrices: ["$0", "$0"],
    //   mainFeature: "For Personal Blogs",
    //   features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
    // },
    {
      name: "Starting From",
      durationPrices: ["$49", "$499"],
      mainFeature: "Suited for Production Websites  Landing Pages Priority Assistance Priority Assistance ",
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
      featured: true
    },
    {
      name: "Starting From",
      durationPrices: ["$49", "$499"],
      mainFeature: "Suited for Production Websites",
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
      featured: true
    },
    {
      name: "Starting From",
      durationPrices: ["$49", "$499"],
      mainFeature: "Suited for Production Websites",
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
      featured: true
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);
  const [ value, setValue ] = useState()

  console.log(data)


  return (
    <Container>
      <ContentWithPaddingXl style={{paddingTop:'0rem'}}>
      
        <HeaderContainer>
      
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <Heading>{heading}</Heading>
          {/* {description && <Description>{description}</Description>}
        <PlanDurationSwitcher>
          {planDurations.map((planDuration, index) => (
            <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</SwitchButton>
          ))}
        </PlanDurationSwitcher> */}
        </HeaderContainer>
        <PlansContainer>
          {data.map((plan, index) => 
            <Plan key={index}  style={{marginTop:'1rem'}}>
            <PlanHeader>
                {/* <img /> */}
                <Grid container spacing={2}>
                    
                  <Grid item md={4}><StarIcon/>
                  { plan.review.average_review } <br/>( { plan.review.reviews.length } )
                  </Grid>
                  <Grid item md={8}>
                  <BorderLinearProgress variant="determinate" value={20} style={{marginTop:'5%'}}/>
                  <BorderLinearProgress variant="determinate" value={50} style={{marginTop:'5%'}}/>
                  <BorderLinearProgress variant="determinate" value={70} style={{marginTop:'5%'}}/>
                  <BorderLinearProgress variant="determinate" value={30} style={{marginTop:'5%'}}/>
                  {/* <BorderLinearProgress variant="determinate" value={50} style={{marginTop:'5%'}}/> */}
                  </Grid>
                  
                </Grid>

                {/* <Grid container spacing={2} style={{marginTop:'10%'}}>
                    
                    <Grid item md={6} >  <span className="mainFeature">Value for Money</span></Grid>
                    <Grid item md={6}> 
                    <StarIcon/>  <StarIcon/> <StarIcon/><StarIcon/>  <StarIcon/>   </Grid>
                    </Grid>
                  
                  
                    <Grid container spacing={2}>
                    
                    <Grid item md={6} >  <span className="mainFeature">Ease of Use</span></Grid>
                    <Grid item md={6}> 
                    <StarIcon/>  <StarIcon/> <StarIcon/><StarIcon/>  <StarIcon/>   </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                    
                    <Grid item md={6} >  <span className="mainFeature">Features</span></Grid>
                    <Grid item md={6}> 
                    <StarIcon/>  <StarIcon/> <StarIcon/><StarIcon/>  <StarIcon/>   </Grid>
                    </Grid>
                    
                    <Grid container spacing={2}>
                    
                    <Grid item md={6} >  <span className="mainFeature">Customer Support</span></Grid>
                    <Grid item md={6}> 
                    <StarIcon/>  <StarIcon/> <StarIcon/><StarIcon/>  <StarIcon/>   </Grid>
                    </Grid>

                 
                    <Grid container spacing={2} style={{marginTop:'6%'}}>
                    
                    <Grid item md={2} >  <span className="name">97%</span></Grid>
                    <Grid item md={10}> 
                    <span className="mainFeature">would recommend this app</span></Grid>
                    </Grid> */}
           
            {/* <span className="name">{plan.name}</span> */}
              {/* <span className="priceAndDuration">
                <span className="name">{plan.durationPrices[activeDurationIndex]}</span>
                <span className="slash"> / </span>
                <span className="duration">{planDurations[activeDurationIndex].text}</span>
              </span> */}
             
              {/* <span className="mainFeature">{plan.mainFeature}</span> */}
            </PlanHeader>
            {/* <PlanFeatures>
            <Subheading className="name">There are many</Subheading>
              {plan.features.map((feature, index) => (
                <span key={index} className="feature">
                  {feature}
                </span>
              ))}
            </PlanFeatures>
            <PlanFeatures>
            <Subheading className="name">Contrary to Popular</Subheading>
              {plan.features.map((feature, index) => (
                <span key={index} className="feature">
                  {feature}
                </span>
              ))}
            </PlanFeatures> */}
            <PlanFeatures>
            {/* <Subheading className="name">The point of using</Subheading> */}
              
                <span key={index} className="feature">
                  {/* { plan.review.review_data.map((v,i) => ) }  */}
                </span>

             <Grid>
            { plan.review.reviews.slice(0,3).map((v,i) =>

           <Accordion key={i} style={{marginBottom:'10px'}}>
           <AccordionSummary
             // expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <div>
             <div className='user_review_Container'>
                    <img style={{ maxWidth: '30%' }} src='https://randomuser.me/api/portraits/men/77.jpg' />
   
                    <div style={{ paddingLeft:'7px' }}>
                    <p style={{color:'#243e63'}}> {v.f_name} {v.l_name} </p>
                    <Rating name="read-only" value={v.user_rating} readOnly size='small' />
                    </div>
   
                    {/* <p> feedback </p> */}
                    </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                  <p style={{fontWeight:'bold', color:'#243e63',marginBottom:'0.5rem'}}> feedback:-  </p>
                  <span style={{fontSize:'13px',color:'#243e63'}}> { v.feedback } </span>
                  {/* <p> FAQ's </p> */}
                  {/* <p> { v.questionsanswers } </p> */}
                  </AccordionDetails>
                   </Accordion>            
                  )}
               </Grid>  
              <p id='see-more-reviews'> see more reviews </p>
            </PlanFeatures>
            {/* <PlanAction>
              <BuyNowButton>{primaryButtonText}</BuyNowButton>
            </PlanAction> */}
          </Plan>
          )}
        </PlansContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
