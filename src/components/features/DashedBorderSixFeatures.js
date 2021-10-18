import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import defaultCardImage from "../../images/shield-icon.svg";
import axios from 'axios'
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import logo3 from '../../images/agm.png';
import logo4 from 'images/agm.png';
import logo5 from 'images/247.png';
import logo6 from 'images/BigRock.png';
import logo1 from 'images/adroit.png';
import logo2 from 'images/BigRock.png';



const useStyles = makeStyles((theme) => ({

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-row  items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24   `}
`;
const Heading = tw(SectionHeading)`w-full`;
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10  transition hover:shadow-2xl   duration-1000 ease-in-out rounded-lg mt-12  `}
  .imageContainer {
    ${tw` text-center  p-6 flex-shrink-0 relative`}
    
  }

  


  .textContainer {
    ${tw` text-center`}
  }

  .title {
    ${tw`mt-2  text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({index}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: logo1,
      title: "247-HOST",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    { imageSrc: logo2, title: "365Zone" },
    { imageSrc: logo3, title: "AbeloHost" },
    { imageSrc: logo4, title: "AGM" },
    { imageSrc: logo5, title: "Adroit SSD" },
    { imageSrc: logo6, title: "BIGROCK" },
    { imageSrc: logo2, title: "365Zone" },
    { imageSrc: logo3, title: "AbeloHost" },
    { imageSrc: logo4, title: "AGM" },
  ];
  const [couponData,setCouponData] = React.useState('')
  const matches = useMediaQuery('(max-width:400px)');
  const matches2 = useMediaQuery('(max-width:855px)');
  const classes = useStyles();

  const H1 = (item) => {


    if(matches2 == false){
      return(<> 
          <h1 style={{ fontSize: '15px', fontWeight: "600", marginBottom: "10px" }} >{item.item.name}</h1>
       </> )
    }
    else {
      return(
        <> 
            <h1 style={{ fontSize: `${matches == false ? '1.9vw' : '2.5vw' }`, fontWeight: "600", marginBottom: "10px" }} >{item.item.name}</h1>
         </>
        )
    }

  }

  // console.log(matches2)

  React.useEffect(() => {

    let cancel
    
      axios(`http://infilate.com/backend/public/api/apps/coupon/coupon-list/${index}`, {
        method: 'POST',
        cancelToken: new axios.CancelToken(c=>cancel=c)
      }).then((res) => {

        // console.log(res.data.Data)
        setCouponData(res.data.Data)
      }).catch(e=>{
        if(axios.isCancel(e)) return
      })   
      //  setBlogData(result.data.Data)
    
      return ()=> cancel()

    },[index]);

  
   const handleClick = (item) => console.log(item)

  function conditionRender(){
      return(
        <div>
        <div className = "home-coupons">
          {couponData && couponData.slice(0,9).map((coupon, index) => {
         
            return (
              <div className = "home-coupons-card">
                <div className = "img-wrapper">
                  <img src = {`http://infilate.com/backend/public/images/${coupon.media}`}/>
                </div>
                <div className = "home-coupons-content">
                  <h6>{coupon.name}</h6>
                  <span>26 offers</span>
                </div>
              </div>
            )
          })}
      </div>
      
      <div className = "home-coupons-view">
            <Link to = "/Coupon">View all coupons</Link>
          </div>
      </div>
      )
  }

  return (
    <>
    {conditionRender()}
    </>
  );
};



{/* <Column key={index} style={{width:`${matches == true ? '175px' : '30%'}`,paddingLeft: '0rem', paddingRight: '0rem', marginBottom: "10px", }}>
<Card 
onClick={() => handleClick(item)} 

style={{ border: "1px solid grey",marginTop:'0px', padding: "0px", marginRight: "20px", width: "400px", height: "111px", position: "relative", borderRadius: "0px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
  <span className="imageContainer" style={{ backgroundColor: "white", padding: ".8rem", height: "108px", width: "60%", border: "0px" }}>
  <CardMedia
    className={classes.media}
    image={`http://infilate.com/backend/public/images/${item.media}`}
    title="Paella dish"
                      />
  </span>
  <span style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "40%", height: "111px", borderLeft: "1px solid black" }} className="textContainer">
    

    <H1 item={item} />
    <h3 style={{ color: "green" }}>26 offers</h3>
  </span>
</Card>
</Column> */}