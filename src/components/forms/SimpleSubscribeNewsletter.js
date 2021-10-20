import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";
import axios from 'axios'

const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`
const HeadingInfoContainer = tw.div`sm:ml-4 mt-4 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`


export default () => {

  const [input,setInput] = React.useState('')
  
  const handleSubmit = () => {

    axios({
      method: 'post',
      url: 'http://infilate.com/backend/public/api/app/newsletter/add',
      data: {
        email: input,
      
      }
    }).then(res => {
      if(res.data.Message="Email has already saved"){
        alert('Email has already saved')
      }
      else {
        alert('successfully subscribed')
        console.log(res)
        setInput('')
      }

    }).catch(err => 
        alert('OOps something went wrong'+err)
      )
  }

  return (
    <div  style={{padding: "30px 16px",backgroundColor : "#FEFEFE"}}>
      <Content style={{paddingTop:'3rem',paddingBottom:'3rem'}}>
        <Row>
          <TextColumn>
            {/* <EmailNewsletterIcon /> */}
            <HeadingInfoContainer>
              <Heading style={{color:"#000", paddingBottom : "8px"}}>Newsletter</Heading>
              <Description style = {{color : "#8B8B8B", letterSpacing : "1px"}}>Subscribe now to get our latest blog posts.</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>

            <Input value={input} onChange={(e) => setInput(e.target.value) } name="newsletter" type="email" placeholder="Your Email Address" style={{color:'black',background:'white', outlineStyle : "none", borderColor : "#FF4032"}}/>
            <Button onClick={handleSubmit} style={{backgroundColor: '#FF4032',borderWidth:'1px', borderColor : "#FF4032"}}>Subscribe Now</Button>

          </FormColumn>
        </Row>
      </Content>
    </div>
  );
};
