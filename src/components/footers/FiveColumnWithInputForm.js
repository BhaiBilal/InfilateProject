import React, { useState } from "react";
import "./footer.css"
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { withRouter, Linki as link } from "react-router";
import { Link } from "react-router-dom";
import LogoImage from "../../images/infi-logo.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import Divider from "@material-ui/core/Divider"
import axios from "axios"


const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold `;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Linki = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

//const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const footer = [
  {
    heading: "New User",
    p: "New User Can Register here",
    buttons: "Register"
  },
  {
    heading: "Already a member",
    p: "please login here",
    buttons: "login"
  }
]

// console.log(footer)


  function FiveColumnWithInputForm() {

  const [data1,setData1] = React.useState([])

  React.useEffect(() => {

    let cancel
    
      axios('http://infilate.com/backend/public/api/app/footer/page-list', {
        method: 'POST',
        data:{
          heading:'company'
        },
        cancelToken: new axios.CancelToken(c=>cancel=c)
      }).then((res) => {
        setData1(res.data.Data)
        // console.log(res)
      }).catch(e=>{
        if(axios.isCancel(e)) return
      })   
      //  setBlogData(result.data.Data)
    
      return ()=> cancel()

    },[]);

    // console.log(data1);

  return (
    <>

      <Container style={{ paddingBottom: '1rem', marginLeft: '0rem', marginRight: '0rem' }}>
        {/*  <div style={{ marginBottom: "100px", borderRadius: "10px", backgroundColor: "#a7bbc7", width: "100%", height: "100px", top: "0px", display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center" }}>
          {
            footer.map((footers) =>
            ((
              <div style={{ width: "30%", height: "70px", borderRadius: "10px", display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#e1e5ea" }}>
                <div >
                  <h1 style={{ marginBottom: "10px", fontSize: "24px", color: "rgba(74,85,104)", height: "24px", fontWeight: "600" }}>{footers.heading}</h1>
                  <p style={{ marginBottom: "10px", fontSize: "15", color: "rgba(74,85,104)", fontWeight: "500", height: "14px", }}>{footers.p}</p>
                </div>
                <div className="footer-btn" style={{ height: "40px", width: "100px", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <button style={{ fontSize: "20px", outline: "none" }}>{footers.buttons}</button>
                </div>
              </div>
            ))


            )
          }

        </div>
        */}
        <Content className='footer-content-test'>
          <SixColumns>
            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <LogoContainer>
                  <LogoImg src={LogoImage} style={{ width: '8rem', borderRadius: "0px" }} />

                </LogoContainer>
                <SubscribeText>
                  We deliver high quality blog posts written by professionals weekly. And we promise no spam.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </SubscribeText>
 <SocialLinksContainer style={{ paddingTop: '16px' }}>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn>

            <Column>
              <ColumnHeading>Company</ColumnHeading>
              <LinkList>
          
                  <LinkListItem>
                  <Link to="/aboutUs">
                  <Linki href="">About us</Linki>
                  </Link>
                </LinkListItem>

                  <LinkListItem>
                  <Link to="/contactUs">
                  <Linki href="">Contact us</Linki>
                  </Link>
                </LinkListItem>                           
   

                  {/* <Linki href="#">About Us</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Pressroom</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Contact Us</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">FAQ's</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Sitemap</Linki>
                </LinkListItem> */}
              </LinkList>
            </Column>


            <Column>
              <ColumnHeading>Blog </ColumnHeading>
              <LinkList>
              {

                  data1 && data1.filter((v,i)=>v.heading=="Blog").map((v,i)=>
                  <LinkListItem key={i}>
                  <Linki href={`${v.link}`}>{v.pages}</Linki>
                  </LinkListItem>                           
                  )

                  }

                {/* <LinkListItem>
                  <Linki href="#">How to</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Compare</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Reviews</Linki>
                </LinkListItem> */}
                {/* <LinkListItem>
                  <Linki href="#">Lorem ipsum</Linki>
                </LinkListItem> */}
              </LinkList>
            </Column>


            <Column>
              <ColumnHeading>Quick Links </ColumnHeading>
              <LinkList>
                <LinkListItem>
                  <Linki href="#">Affiliate</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Bulbul</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Sumbit your brand</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Submit your Freelancing</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Write a review</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Help for Digital Marketers</Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="#">Help for Advertisers</Linki>
                </LinkListItem>
              </LinkList>
            </Column>


            <Column>
              <ColumnHeading> Legal </ColumnHeading>
              <LinkList>

                {  
                  
                
                
                }

                <LinkListItem>
                  <Linki href="http://my.infilate.com/privacyPolicy"> Privacy </Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="http://my.infilate.com/terms&Conditions"> Terms & Condition </Linki>
                </LinkListItem>
                <LinkListItem>
                  <Linki href="http://my.infilate.com/faQs">Brand Disclosure</Linki>
                </LinkListItem>
                {/* <LinkListItem>
                  <Linki href="#">Lorem ipsum</Linki>
                </LinkListItem> */}


              </LinkList>
            </Column>

            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <ColumnHeading>Contact</ColumnHeading>
                <SubscribeText>
                  info@infilate.com
              </SubscribeText>
                <SubscribeText>
                  882-587-3025
              </SubscribeText>
                <SubscribeText>
                  6116 Willa River Suitee 110
              </SubscribeText>


              </SubscribeNewsletterContainer>

            </SubscribeNewsletterColumn>
           
          </SixColumns>

          <Divider style={{ marginTop: '2%' }} />
          <ThreeColRow>
            <LogoContainer>

              <SubscribeText>Terms and Conditions </SubscribeText>
            </LogoContainer>
            <CopywrightNotice>&copy; 2021 - Form | All Rights Reserved.</CopywrightNotice>
          </ThreeColRow>


        </Content>
      </Container>
    </>
  );
};

export default withRouter(FiveColumnWithInputForm)