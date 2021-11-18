import React from 'react'
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Grid } from '@mui/material'
import CustomPagination from './CustomPagination'

const posts = [
    {
      question: "Is lunch provided free of cost ?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
    },
    {
      question: "Do you have 2 Bedroom suites ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Are Wi-Fi costs included in the price ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Where can I reach you for support ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "What kind of SLA Guarantee do you provide ? ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Where are the servers located ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "What kind of SLA Guarantee do you provide ? ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
  ]


function Seemorereviews() {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(5);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber)


    return (
        <div style={{paddingTop:'160px',display:'flex',justifyContent:'center'}}>
        <Grid container md={8} >
            { currentPosts.map(v => 
        <Accordion key={v} style={{marginBottom:'10px', width:'inherit'}}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
          <div className='user_review_Container'>
                 <img style={{ maxWidth: '30%' }} src='https://randomuser.me/api/portraits/men/77.jpg' />

                 <div style={{  }}>
                 <p> 
                     {/* {v.first_name} {v.last_name}  */}
                     first name last name
                     </p>
                 <Rating name="read-only" 
                //  value={v.user_rating}
                 value='5' 
                 readOnly 
                 size='small' />
                 </div>

                 {/* <p> feedback </p> */}
                 </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <p> feedback:- 
            {/* { v.feedback }  */}
            </p>
        <p> FAQ's </p>
        <p> 
            {/* { v.questionsanswers }  */}
            </p>
        </AccordionDetails>
      </Accordion>                
                )}
        <CustomPagination style={{marginTop:'10px'}} postPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
          </Grid>
        </div>
    )
}

export default Seemorereviews
