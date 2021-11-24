import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { Grid } from '@mui/material'
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import axios from 'axios'


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Terms And Condition" }) => {


  const [data,setData] = React.useState([])
  let content = ''
  React.useEffect(() => {
    let cancel
    axios({
      method: 'POST',
      url: 'http://infilate.com/backend/public/api/app/footer/terms-and-conditions',
    }).then(res => {
      setData(res.data.Data.content)
     
    }).catch(e => {
      console.log(e)
    })
  }, [])

  // data && data.map((v,i)=>v.content.map((v,i)=> content=v.content))  










  return (
    <AnimationRevealPage>
      {/* <Header /> */}
      <Container style={{paddingTop:'110px'}}>
        <ContentWithPaddingXl>
          <HeadingRow>
            {/* <Heading>{data && data.map((v,i) => v.content.map((v,i) => v.heading ))}</Heading> */}
          </HeadingRow>
          <Text>

          <div style={{display:'flex', justifyContent:'center'}}>
          <Grid item md={8} sm={8}>
          <div className='changeToDefault3'>
          <div dangerouslySetInnerHTML={{__html:data[0]?.description_1}} />
          </div>
          </Grid>
          </div>



          </Text>
        </ContentWithPaddingXl>
      </Container>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
