import React from "react";
import styled from "styled-components";
import "./Register.css";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import client from "images/client.jpg";
import register from "./../images/register4.jpg"
import agency from "images/agency.jpg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { Paper } from '@material-ui/core';
import { BorderLeft } from "@material-ui/icons";
import register5 from "../images/register5.jpg"
import { Link } from "react-router-dom"
import Login from "Users/Login";
import useMediaQuery from '@material-ui/core/useMediaQuery';




const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;

const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-32 h-20`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: agency,
      title: "Corporate User",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: client,
      title: "DMC User",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    // {
    //   imageSrc: CustomizeIconImage,
    //   title: "Customizable",
    //   description: "Lorem ipsum donor amet siti ceali placeholder text",
    //   url: "https://reddit.com"
    // }
  ],
  linkText = "Create Account",
  heading = "Register For Free",
  subheading = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */

  const matches = useMediaQuery('(max-width:1200px)');
  const clicked = () => {
    alert("you are clicked")
  }

  return (

    <Container className="head-con" style = {{backgroundColor : "#D8DEDF"}}>
      <div className="section">
        <div className = "section1">
          <img src = "/Assets/Images/register-home.png" />
        </div>
        <div className="section2">
            <div className="register-upper">
              <h1>Register With</h1>
              <img src = "/Assets/Images/infi-logo.png" />
            </div>
            <div className="register-lower">
              <div className="register-button"><a href="/RegisterCorporate"><button>Sign Up as CORPORATE  </button></a></div>
              <div className="signup-button"><a href="/RegisterUser"><button > Sign Up as DMC</button> </a></div>

              <h2>Already a Member? <a href="/Login">Sign in</a></h2>
            </div>


 
        </div>

      </div>
    </Container >


  );
};
