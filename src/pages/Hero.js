import React, { useState } from "react";
import "./Hero.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { green, purple } from '@material-ui/core/colors';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import logo3 from 'images/Ava Hosting.png';
import logo4 from 'images/teamwork.png';
import logo5 from 'images/Active Camapign.png';
import logo6 from 'images/logo6.png';
import logo1 from 'images/Aweber.png';
import logo2 from 'images/Activechat.png';
import { Card, Grid, Paper, TextField, Button, withWidth } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import doodle from '../digital-marketing.jpg'
import doodle1 from '../6.png'






const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;
const HeadingContainer = tw.div``;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const HeadingRow = tw.div`flex`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;


const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#f5f5f6',

    paddingRight: '2%',
    paddingLeft: '5%'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
    // width:'60%',
    // marginLeft:'20%'
  },
  mobilediv: {
    height:100,
    border:"1px solid black"
  },
  homeImage:{
    width:'100px',
    height:'100px'
  }
}));


export default ({
  heading = "Good Morning, Marketers",
}) => {

  const [searchItem,setSearchItem] = useState('')
  const [searchResult,setSearchResult] = useState([])
  const [searchFilters,setSearchFilters] = useState([])
  const [homeImages,setHomeImages] = useState([])
  const [categoryID,setCategoryID] = useState(0)
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  const [visible,setVisible] = React.useState(false)
  const [mouseEnter,setMouseEnter] = React.useState(false)
  let divRef = React.useRef()
  const matches = useMediaQuery('(max-width:710px)');

  // console.log(matches)

  const  themeStyles={
    display: visible ? 'block' : 'none'
  }

  const toggleTab = (index) => {
    setTab(index )
  }

  function myFunction(e) {
    setSearchItem(e.target.value)
  }


  React.useEffect(() => {
    axios('http://infilate.com/backend/public/api/offer-category/all-sub-sub-category',{
      method:'GET',
    }).then((res) => {
      setSearchFilters(res.data.Data)
    }).catch((e) => {
      console.log(e)
    })

  },[])




  React.useEffect(() => {

    let cancel
    // formdata.append("category_id",)
    
      axios('http://infilate.com/backend/public/api/search/mysearch', {
        method: 'POST',
        data:{
          name:searchItem,
          organisation_type_id:tab,
          category_id:categoryID,
        },
        cancelToken: new axios.CancelToken(c=>cancel=c)
      }).then((res) => {
      
        if(searchItem=='') { setSearchResult([]) }

        else if(searchItem!=''){

          setSearchResult(res.data.data)
          // Object.entries(res.data.data).map((v,i)=> setSearchResult(prev => {return [...new Set([...prev,v])]}))
        }
      }).catch(e=>{

        if(e) setSearchResult([])

        if(axios.isCancel(e)) return
      })   
    
      return ()=> cancel()

    },[tab,searchItem,categoryID]);



    React.useEffect(() => {

      let cancel
      
        axios('http://infilate.com/backend/public/api/app/organisation/homepage-list', {
          method: 'POST',
          cancelToken: new axios.CancelToken(c=>cancel=c)
        }).then((res) => {
          setHomeImages(res.data.Data)
        }).catch(e=>{
          if(axios.isCancel(e)) return
        })   
        //  setBlogData(result.data.Data)
      
        return ()=> cancel()

      },[]);

    
    
    
    const getname=(v)=>{

        if(v.name){
          return v.name
        }

        if(v.title){
          return v.title
        }

        if(v.webinar_name){
          return v.webinar_name
        }
    }

    const history = useHistory();
    const handleClick = (v) =>{

        if(v.type=='Blogs'){
          history.push(`/BlogDetail/${v.id}`);
        }

        if(v.type=="Coupons"){
          history.push('/Coupon')
        }

        if(v.type=="Webinars"){
          history.push(`/webinarDetails/${v.id}`);
        }
        // console.log(post.webinar_name)
      // console.log(v)
    } 

  //  searchResult && searchResult.map((v,i)=> console.log(v))

    const handleBlur=(e)=>{

            if(mouseEnter!=true){
              setVisible(prev=>!prev)
            }      
            
        
    }

    const handleMouse = () =>{  
      setMouseEnter(prev=>!prev)
    }


    const handleSelectChange = (e) => {
      setCategoryID(e.target.value)
    }


  function compres(){

      return(
        <Container style={{ paddingTop: "9rem", marginBottom: "4rem", 
        backgroundImage:`url(${doodle1})`,backgroundSize:'contain' 
        }}>

        <HeadingContainer style={{ }}>
          {/* <HeadingRow style={{justifyContent:'center'}}>
            <Heading style={{ fontSize: '2rem', color:'white', fontWeight: '600', background:'#fffdfd4f',zIndex:'1',textShadow: '5px 3px 5px #312e2e',
          boxShadow: '5px 10px 20px #817e7e inset',padding:'6px',textDecoration:'underline overline'
          }}>{heading}</Heading>
          </HeadingRow>
          <HeadingRow style={{justifyContent:'center'}}>
            <Heading style={{ fontSize: '18px', fontWeight: 'unset',color:'white', background:'#fffefe47',padding:'6px',textShadow:'2px 2px 2px #000000',
          // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          textDecoration:'underline'
          }}>Deals from your favourite Digital Brand.<br/>
            Try searching for Data Servers, Institutes & Agencies in worldwide.
            </Heading>
          </HeadingRow> */}
          <HeadingRow style={{justifyContent:'center'}}>
            <Heading >{heading}</Heading>
          </HeadingRow>
          <Text style={{margin:"0",display:'flex', justifyContent:'center'}}>Deals from your favourite Digital Brand.</Text>
          <Text style={{margin:"0",display:'flex', justifyContent:'center'}}>Try searching for Data Servers, Institutes & Agencies in worldwide.</Text>
    
        </HeadingContainer>


        <div style={{ width: "100%", height: "220px", display: "flex", alignItems: "center", justifyContent:`${matches == true ? 'unset' : 'space-around'}`}}>
          
          
          
          
          {/* <Grid item md={3} style={{paddingTop:'141px'}}>

       
          <Grid item style={{display:'flex',justifyContent:'space-around'}}>

          <div className={classes.homeImage}  style={{marginTop:"-30px",width:'120px',}}>
          <img style={{borderRadius:'20px'}} src={`http://infilate.com/backend/public/images/${homeImages[0] && homeImages[0].image}`} />
          </div>

          <div className={classes.homeImage} >
          <img style={{borderRadius:'15px'}} src={`http://infilate.com/backend/public/images/${homeImages[1] && homeImages[1].image}`} />
          </div> 

          </Grid>

          <Grid style={{display:'flex',justifyContent:'center',paddingTop:'47px'}} item>

          <div className={classes.homeImage} style={{width:'143px'}} >
          <img style={{borderRadius:'20px'}} src={`http://infilate.com/backend/public/images/${homeImages[2] && homeImages[2].image}`} />
          </div>

          </Grid>
            </Grid> */}
          
          
          {/* seachbox start  */}
          <div style={{  }} className="form-hero"  >
            <div className="form-cont" onFocus={handleBlur} onBlur={handleBlur}>
    
              <div className="category">
                <ul className="category-item">
                  <li className="category-list">
                    <a className={tab===1 ? "tabs active" :"tabs"} onClick={() => { toggleTab(1) }} >Tools</a>
                    <a className={tab===2 ? "tabs active" :"tabs"} onClick={() => { toggleTab(2) }}   >Institute</a>
                    <a className={tab===3 ? "tabs active" :"tabs"} onClick={() => { toggleTab(3) }} >Agency</a>
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", marginLeft: "20px", marginRight: "20px", justifyContent: "space-between", backgroundColor: "white", borderRadius: "0 15px 15px 15px", boxShadow: "2px 4px 16px #888888" }}>
               
                <div class="col-12" style={{display: "flex",flexDirection: "column",position:'relative',width:'126%'}}>
                  {/* <label class="visually-hidden" for="inlineFormInputGroupUsername"></label> */}
                 
                  <div className="flex-item" style={{ height: "50px", borderRadius: "20px" }}>
    



                    <input  onKeyUp={myFunction} style={{ width: `${matches == true ? '142px' : '402px'}`, height: "50px", borderRadius: "0 0 0 20px", outline: "none" }} type="text" id="inlineFormInputGroupUsername" placeholder="What you looking for" />

                
                
                  </div>
                  
                 
                  <div onMouseEnter={handleMouse} onMouseLeave={handleMouse} className="search_result_container" 
                  style={themeStyles}
                  >
                   
                   <p id="shh" style={{fontSize:'20px',color:'rgb(246, 136, 32)',paddingLeft:'5px',fontFamily:'Hind Siliguri'}}> Webinars</p>
                  {
                      searchResult && searchResult.filter((v,i)=>v.type=='Webinars').map((item,index)=>
                     
                      <>
                        <p onClick={()=>handleClick(item)} 
                        style={{fontSize:'15px',paddingLeft:'8px',fontFamily:'Hind Siliguri',cursor:'pointer'}} 
                        key={index}>{item.name}</p> 
                      </>

                    //   <>
                    //   
                    //   {
                    //       item[1].map((v,i)=> {
                    //         return  
                    //         { getname(v) } 
                    //         </p>
                    //       })
                    //   }
                    //  </>
                      )
                  }    

<p id="shh" style={{fontSize:'20px',color:'rgb(246, 136, 32)',paddingLeft:'5px',fontFamily:'Hind Siliguri'}}>Coupons</p>
                  {
                     searchResult && searchResult.filter((v,i) => v.type=='Coupons').map((item,index) => 
                     <>
                        <p onClick={()=>handleClick(item)} 
                        style={{fontSize:'15px',paddingLeft:'8px',fontFamily:'Hind Siliguri',cursor:'pointer'}} 
                        key={index}>{item.name}</p> 
                   </>

                     
                     )

                  }

<p id="shh" style={{fontSize:'20px',color:'rgb(246, 136, 32)',paddingLeft:'5px',fontFamily:'Hind Siliguri'}}>Blogs</p>
                  {
                     searchResult && searchResult.filter((v,i) => v.type=="Blogs").map((item,index) => 
                     <>
                         <p onClick={()=>handleClick(item)} 
                        style={{fontSize:'15px',paddingLeft:'8px',fontFamily:'Hind Siliguri',cursor:'pointer'}} 
                        key={index}>{item.name}</p>
                   </>

                     
                     )

                  }

<p id="shh" style={{fontSize:'20px',color:'rgb(246, 136, 32)',paddingLeft:'5px',fontFamily:'Hind Siliguri'}}> Products</p>
                  {
                     searchResult && searchResult.filter((v,i) => v.type=='Products').map((item,index) => 
                     <>
                        <p onClick={()=>handleClick(item)} 
                        style={{fontSize:'15px',paddingLeft:'8px',fontFamily:'Hind Siliguri',cursor:'pointer'}} 
                        key={index}>{item.name}</p> 
                   </>

                     
                     )

                  }

<p id="shh" style={{fontSize:'20px',color:'rgb(246, 136, 32)',paddingLeft:'5px',fontFamily:'Hind Siliguri'}}> Services</p>
                  {
                     searchResult && searchResult.filter((v,i) => v.type=='Services').map((item,index) => 
                     <>
                        <p onClick={()=>handleClick(item)} 
                        style={{fontSize:'15px',paddingLeft:'8px',fontFamily:'Hind Siliguri',cursor:'pointer'}} 
                        key={index}>{item.name}</p> 
                      </>
 
                     
                     )

                  }



                    </div> 
                 
                </div>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                   <div >
    
                    <select className="select-style" id="inlineFormSelectPref" onChange={handleSelectChange}>
                      <option selected>Select...</option>
                      { searchFilters && searchFilters.map((item,index) => 
                      <option key={index} value={item.id} > { item.name } </option>   
                      ) }
                      {/* <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option> */}
                    </select>
                  </div> 
                  {/* <div >
    
                    <select className="select-style" id="inlineFormSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div> */}
                  {/* <div >
    
                    <select className="select-style" id="inlineFormSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div> */}
    
    
    
                  <div >
                    <button  style={{ borderRadius: "10px",
                    //  width: `${matches == true ? '90px' : '160px'}`, 
                    height: "50px" }} type="submit" className="search-btn"><a>Search</a></button>
                  </div>
                </div>
              </div>
    
            </div>
          </div>

    
          
          {/* <Grid item md={3} style={{}}> */}

       
{/* 
          <Grid style={{display:'flex',justifyContent:'center',}} item>

          <div className={classes.homeImage} >
          <img src={`http://infilate.com/backend/public/images/${homeImages[3] && homeImages[3].image}`} />
          </div>

          </Grid> */}
{/* 
          <Grid item style={{display:'flex',justifyContent:'space-around',paddingTop:'40px'}}>

          <div className={classes.homeImage}  style={{width:'120px'}}>
          <img src={`http://infilate.com/backend/public/images/${homeImages[4] && homeImages[4].image}`} />
          </div>
          
          <div className={classes.homeImage} style={{width:'140px'}}>
          <img src={`http://infilate.com/backend/public/images/${homeImages[5] && homeImages[5].image}`} />
          </div> 

          </Grid> */}


            {/* </Grid> */}




        </div>
        {/* <div className="down-button" >
          <button><a>I-metric</a></button>
          <button><a>Server</a></button>
          <Link to="/AllBrands">
          <button style={{width: "188px"}}><a>View all corporates</a></button>
          </Link>  
          
        </div> */}


    
    
        {/* <DecoratorBlob1 />
        <DecoratorBlob2 /> */}
      </Container >
      )
    }





  return (
    <>
    {compres()}
    </>


  );
};

/* This function is only there for demo purposes. It populates placeholder cards */

