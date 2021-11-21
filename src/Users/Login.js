import React,{useState} from "react";
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
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import login from "../images/login3.jpg"
import mastImage from '../Live-Background.svg'
import Axios from "axios"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { userLoginRequest } from "redux/UserloginlogoutSlice";
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Container = tw(ContainerBase)`min-h-screen  text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-bold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: "auto",
    paddingTop: "90px",
  }
      // 
       
        
  
  
  }));
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

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
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




export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Login to Infilate",
  
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


  

}

) =>  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData] = useState('');
  const selector = useSelector((state) => console.log(state))
  const dispatch = useDispatch()

  const notify = (message) => {   
    toast(message);
}
  const loginTo= (e)=>{

    e.preventDefault();
    let cancel
    Axios.post('http://infilate.com/backend/public/api/auth/login',{
        email:email,
        password:password,
    }).then((response)=>{
      notify(response.data.message)
        console.log(response)
        // console.log(response.data.token[1].email)
        if(response.data.data.role_id=='3'){
          const token=response.data.data.token
          const email=response.data.data.email
          const FullName=`${response.data.data.f_name}` + ` ${response.data.data.l_name}`
          const role_id=response.data.data.role_id.toString()
          // console.log(FullName)
          dispatch(userLoginRequest({token, email,FullName,role_id}))
        }

    }).catch(e=>{
      console.log(e.message)
      notify("please enter all fields properly")
    })

  }




  return(
  <AnimationRevealPage>
    <Container style={{backgroundColor:"#F9F9F9",paddingTop:"100px"}}>
      <Content style={{backgroundImage:`url(${mastImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}  >
        <MainContainer >
          {/* <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink> */}
           
          <MainContent >
            <Heading style={{color:"white"}}>{headingText}</Heading>
            <FormContainer>
              {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt=""/>
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}
              {/* <DividerTextContainer>
                <DividerText>Or Sign in with your e-mail</DividerText>
              </DividerTextContainer> */}
              <Form onSubmit={loginTo}>
                <Input type="email" autoComplete="" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" autoComplete="" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}/>
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p>
             
            </FormContainer>
          </MainContent>
        </MainContainer>
        {/* <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer> */}
      </Content>
      <ToastContainer autoClose={4000}  />
    </Container>
  </AnimationRevealPage>)
};
