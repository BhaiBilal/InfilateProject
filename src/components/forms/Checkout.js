import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/infi-logo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import {Avatar,Grid} from "@material-ui/core";
import { motion } from "framer-motion";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;


const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-bold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;
const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const AuthorName = tw.h6`font-semibold text-lg`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Option = tw.option`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

//const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;


const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default ({

   recentPosts = [
        {
          postImageSrc:
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
          title: "Getting the most out of your vacation",
          authorName: "Aaron Patterson",
          url: "https://reddit.com"
        },
        {
          postImageSrc:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
          title: "Choosing the perfect Safaris in Africa",
          authorName: "Sam Phipphen",
          url: "https://reddit.com"
        },
      
      ],

  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "CheckOut",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",

}) => (
    <div>
    {/* <Header/> */}
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer  style={{width:'55.666667%'}}>
          <MainContent  style={{marginTop:'0rem'}}>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form style={{maxWidth:'35rem'}}>
                <Input type="name" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Textarea name="address" placeholder="Address" />
                <Input type="landmark" placeholder="Landmark" />
                <Select style={{width:'30%',marginRight:'3%'}}>
                <Option>City</Option>
                <Option>delhi</Option>
                <Option>mumbai</Option>
                <Option>indore</Option>
                </Select>
                <Select style={{width:'30%',marginRight:'3%'}}>
                <Option>State</Option>
                <Option>delhi</Option>
                <Option>mumbai</Option>
                <Option>indore</Option>
                </Select>
                <Select style={{width:'30%',marginRight:'3%'}}>
                <Option>Pin Code</Option>
                <Option>delhi</Option>
                <Option>mumbai</Option>
                <Option>indore</Option>
                </Select>
                {/* <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton> */}
              </Form>
             
            </FormContainer>
          </MainContent>
        </MainContainer>
        <RecentPostsContainer style={{marginTop:'3rem',width:'25.333333%'}}>
            <Heading>Order Summary</Heading>
            <PostsContainer>
                {/* <h5>Order Summary</h5> */}
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                  
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
              
            </PostsContainer>
            <Card>
                <CardText>
                  <CardHeader>
                    <CardType>Total</CardType>
                    <CardPrice>
                      <CardPriceAmount>Rs 2199</CardPriceAmount> 
            
                    </CardPrice>
                  </CardHeader>
                  <CardAction>Submit</CardAction>
                </CardText>
              </Card>
          </RecentPostsContainer>
         
             
      </Content>
    </Container>
  </AnimationRevealPage>
  {/* <Footer/> */}
  </div>
);
