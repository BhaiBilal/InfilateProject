import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import "./Webinar.css"
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Container from 'react-bootstrap/Container'
import { Content2Xl } from "components/misc/Layouts.js";
import ReactModalAdapter from "../helpers/ReactModalAdapter.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import ResponsiveVideoEmbed from "../helpers/ResponsiveVideoEmbed.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/dot-pattern.svg";
import webinar from "../images/webinar4.jpeg";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../bannercopy.png'


const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const Heading = tw(SectionHeading)``;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Description = tw(SectionDescription)`mx-auto text-center `;
const HeadingContainer = tw.div``;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;
const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  descri = "IT Infrastructure",
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Claim your Tickets",
  primaryButtonUrl = "/domain",
  watchVideoButtonText = "All Webinars",
  watchVideoYoutubeUrl = "",
  // watchVideoYoutubeUrl="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1",
  imageSrc = webinar,
  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const history = useHistory();
  const WebinarList = () => {
    history.push('/Allwebinar')
  }



  return (
    <>
      {/* <h1 style={{ fontSize: "1.5rem", marginLeft: "2rem", fontStyle: "normal", fontWeight: "bold" }} >Webinars</h1> */}
    
      <Container className="webinar-head">


        <div className = "webinar-conatainer">
        <Hero
          heading={<>Join A Webinar</>}
          descri="IT Infrastructure"
          Paragraph="John Doe"
          description=""
          imageSrc={webinar}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Buy Ticket"
          watchVideoButtonText="All Webinars"
          
        />
        </div>

      </Container>
    </>
  );
};
