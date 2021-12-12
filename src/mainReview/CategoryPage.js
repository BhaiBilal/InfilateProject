import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './categoryPage.css'
import ScrollIntoView from 'react-scroll-into-view'
//icons
import Bluejeansmeetings from '../images/minicons/bluejeans-meetings.svg'
import Boxicon from '../images/minicons/box.svg'
import Dropboxicon from '../images/minicons/dropbox-professional.svg'
import Eyesonicon from '../images/minicons/eyeson.svg'
import Googledriveicon from '../images/minicons/google-drive.svg'
import Icontacticon from '../images/minicons/icontact.svg'
import Joinmeicon from '../images/minicons/join-me.svg'
import Richcallicon from '../images/minicons/richcall.svg'
import Roblyicon from '../images/minicons/robly.webp'
import Sendinblueicon from '../images/minicons/sendinblue.svg'
import Shopifyicon from '../images/minicons/shopify.svg'
import Surveymonkeyicon from '../images/minicons/surveymonkey.svg'
import Zohosurveyicon from '../images/minicons/zoho-survey.svg'
import Zoomicon from '../images/minicons/zoom.svg'
import axios from 'axios'
import { ChangeHistoryOutlined } from '@material-ui/icons';
import Header from '../components/headers/Headerj'
import { useStore } from './zustand'
import { Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),

        },
    },
}));




function CategoryPage(props) {
    const classes = useStyles();
    const [scrollState, setScrollState] = React.useState(false)
    const [categoriesData, setCategoriesData] = React.useState([])
    const [checkedState,setCheckedState] = React.useState([])
    const [checkedState2,setCheckedState2] = React.useState([])
    const [subSubCategoriesData, setSubSubCategoriesData] = React.useState([])
    const [subSubCategoriesData2, setSubSubCategoriesData2] = React.useState([]);
    const matches = useMediaQuery('(max-width:1279px)');
    const matches2 = useMediaQuery('(max-width:900px)');

    const selector = useSelector(state => state);
    console.log(selector)
    
    const [id,setId] = React.useState(0)
    
    let array=[]
    let array1=[]

    useEffect(() => {

        let cancel
        
          axios('http://infilate.com/backend/public/api/offer-category/sub-category', {
            method: 'POST',
            data:{
            category_id:props.id
            },
            cancelToken: new axios.CancelToken(c=>cancel=c)
          }).then((res) => {
            if(res && res.data) {
              setCategoriesData(res.data.Data)
              if(res.data.Data && res.data.Data.length) {
                setId(res.data.Data[0].id);
              }
            }
          }).catch(e=>{
            if(axios.isCancel(e)) return
          })   
          //  setBlogData(result.data.Data)      
          return ()=> cancel()
        },[props.id]);




        useEffect(() => {

            let cancel
            
              axios('http://infilate.com/backend/public/api/product-n-services/list-by-category', {
                method: 'POST',
                data:{
                    sub_category_id:id
                },
                cancelToken: new axios.CancelToken(c=>cancel=c)
              }).then((res) => {
                // let products = 'products' in res.data.Data
                // products ? 
                if(res.data.Message=='Sub category found Successfully'){
                  setSubSubCategoriesData(res.data.Data)
                }

                else if(res.data.Message=='No sub category found'){
                  // setSubSubCategoriesData2(res.data.Data)
                  setSubSubCategoriesData([])
                }
                
              }).catch(e=>{
                if(axios.isCancel(e)) return
              })   
              //  setBlogData(result.data.Data)
            
              return ()=> cancel()
      
            },[id]);



    // const secondCol = Math.floor(testdata[0].data.length / 2)

        // subSubCategoriesData.map((v,i)=> { if(v.products.length>0 || v.services.lenght>0){ array.push(v.products.length + v.services.length)  }  } )

        // subSubCategoriesData.map((v,i)=> { if(v.products.length>0){ array.push(v.products.length) } } )
        // subSubCategoriesData.map((v,i)=> { if(v.services.length>0){ array1.push(v.services.length) } } )
        // console.log(subSubCategoriesData2)



    const handleChangeService = (item) => {

        if(checkedState.length==0){
           setCheckedState(p => [...p,item]) 
        }

        else if(checkedState.length>0 && checkedState.some(val => val.id===item.id)){
            setCheckedState(checkedState.filter( (v,i) => v.id!==item.id ))
        }

        else {
            setCheckedState(p=> [...p, item])
        }

        // console.log(item.id)
         
        }

        const handleChangeProduct = (item) => {

            if(checkedState2.length==0){
               setCheckedState2(p => [...p,item]) 
            }
    
            else if(checkedState2.length>0 && checkedState2.some(val => val.id===item.id)){
                setCheckedState2(checkedState2.filter( (v,i) => v.id!==item.id ))
            }
    
            else {
                setCheckedState2(p=> [...p, item])
            }
    
            // console.log(item.id)
             
            }









        // console.log(checkedState)
        // console.log(checkedState2)

        const forOneType = (item) => {

            if(item.services.length>0 || item.products.length>0)
            return (
                <div className='row_chabba'>
                {item.services.map((v,i)=>

                <Grid md={12} key={i} item className='column_chabba'>
                 
                 <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                 <Grid item style={{display:'flex',alignItems:'center'}}>
                 <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
                <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>                     
                 </Grid>   

                <Checkbox color="primary"
                //   checked={checkedState1[i]}
                  id={`custom-checkbox-${i}`}
                  onClick={() => handleChangeService(v)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}/>
                  
                </Paper>  
                </Grid>

                )
                }
                {    
                item.products.map((v,i)=>
                
              <Grid md={6} key={i} item className='column_chabba'>

               <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                <Grid item style={{display:'flex',alignItems:'center'}}>
                <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
               <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>
               </Grid>
               <Checkbox color="primary"
                //  checked={checkedState1[i]}
                   id={`custom-checkbox-${i}`}
                 onChange={() => handleChangeProduct(v)}
                 inputProps={{ 'aria-label': 'primary checkbox' }}/>
                </Paper> 
               </Grid>
                
                )
                }
                </div>
            )
        }

        const handleCategoryClick = (item) => {
            setId(item.id)
         }

         const notify = (message) => {   
          toast(message);
        }

         const reviewSelectHandler = () => {

           if(selector.userLoginLogout.isUserLoggedIn == true) {
             props.next(checkedState, checkedState2);
           }
           else if(selector.userLoginLogout.isUserLoggedIn == false) {
             notify('please log in to review')
           }
         }

    return (
        <div>
            <Box display='flex' ml={matches == true ? 2 : 12} style={{gap:'1rem'}} justifyContent='center'>


          {matches2 == true ?  null : 
            
            <Grid style={{display:'flex',flexDirection:'column'}} item md={1}>
            <p style={{ fontSize: "16px", fontWeight: "bold", cursor: "default",paddingBottom:'13px' }}>Categories</p>
            
            {categoriesData && categoriesData.map((item,index)=>
            <ul onClick={()=>handleCategoryClick(item)} style={{paddingLeft:'7px',paddingBottom:'5px',cursor:'pointer'}} key={index}>{ item.name }</ul>
            )}
            

            </Grid>
             }


                <Grid item lg={5} md={5} style={{marginLeft:'0px',marginRight:'0px'}}>
                    <Paper elevation={3} style={{
                        padding: "10px",
                        height: 'max-content'
                    }} >

                        <p style={{ color: '#808080', fontSize: "1.5rem", paddingLeft: "15px" }}>Select the solutions you use, and then click continue to start a review:</p><br />

                        {
                            subSubCategoriesData.length<1 ? <Typography>No data found</Typography> :
                            
                            subSubCategoriesData && subSubCategoriesData.map((item,index)=>
                             <>
                              <Typography style={{fontWeight:'bold',paddingLeft:'10px'}} key={index}> {item.name} </Typography>
                              {forOneType(item)}
                              </>  
                            )

                            }

                          <Grid item container md={12} spacing={2}>  

                          {
                              subSubCategoriesData2 && subSubCategoriesData2.map((item,index)=>
                           
                              <>
                              {/* <p key={index}> {item.name} </p> */}
                              <Grid key={index} item md={6} xs={12}>
                              <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                                <Grid item style={{display:'flex',alignItems:'center'}}>
                                <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${item.media}`} />   
                                <Typography style={{paddingLeft:'12px'}}> { item.name } </Typography>                     
                                </Grid>   

                                <Checkbox color="primary"
                                //   checked={checkedState1[i]}
                                  id={`custom-checkbox-${index}`}
                                  onClick={() => handleChangeService(item)}
                                  inputProps={{ 'aria-label': 'primary checkbox' }}/>
                                  
                                </Paper> 

                              </Grid>
                              </>
                            )

                            }
                          </Grid>

                                <br />
       
                    </Paper>
                    </Grid>


                    {matches2==true  ? 
                      checkedState2.length + checkedState.length > 0 &&  <div className='postion-fixed-div'>
                      <Container maxWidth='sm' style={{margin:'0px',zIndex:'100'}}>

                        <Typography>You Use</Typography>

                        { checkedState && checkedState.map((v,i) => 
                          <Grid md={12} key={i} item style={{paddingBottom:'14px'}}>

                            <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                            <Grid item style={{display:'flex',alignItems:'center'}}>
                          <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
                          <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>                     
                            </Grid>   
                          
                              <Checkbox color="primary"
                              checked={true}
                              id={`custom-checkbox-${i}`}
                            //    onClick={() => handleChangeService(v)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}/>
                              </Paper>
                                
                              </Grid>
                              

                        ) }

                          { checkedState2 && checkedState2.map((v,i) => 
                          <Grid md={12} key={i} item style={{paddingBottom:'14px'}}>

                            <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                            <Grid item style={{display:'flex',alignItems:'center'}}>
                          <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
                          <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>                     
                            </Grid>   
                          
                              <Checkbox color="primary"
                              checked={true}
                              id={`custom-checkbox-${i}`}
                            //    onClick={() => handleChangeProduct(v)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}/>
                              </Paper>
                                
                              </Grid>
                              

                        ) }

                        <Grid style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} item>
                        <Typography>You have selected { checkedState.length + checkedState2.length } products</Typography>

                        { checkedState2.length + checkedState.length > 0 ?  
                        <Button onClick={()=> reviewSelectHandler() } variant="contained" color='primary'>Continue</Button> 
                        : <Button variant="contained" color='primary' disabled>Continue</Button>
                        }

                        </Grid>

                        </Container> 
                        </div>
                        :
                    
                      <Grid lg={3} md={3} style={{margin:'0px'}}>

                        <Typography>You Use</Typography>

                        { checkedState && checkedState.map((v,i) => 
                          <Grid md={12} key={i} item style={{paddingBottom:'14px'}}>

                            <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                            <Grid item style={{display:'flex',alignItems:'center'}}>
                          <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
                          <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>                     
                            </Grid>   
                          
                              <Checkbox color="primary"
                              checked={true}
                              id={`custom-checkbox-${i}`}
                            //    onClick={() => handleChangeService(v)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}/>
                              </Paper>
                                
                              </Grid>
                              

                        ) }

                          { checkedState2 && checkedState2.map((v,i) => 
                          <Grid md={12} key={i} item style={{paddingBottom:'14px'}}>

                            <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
                            <Grid item style={{display:'flex',alignItems:'center'}}>
                          <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${v.media}`} />   
                          <Typography style={{paddingLeft:'12px'}}> { v.name } </Typography>                     
                            </Grid>   
                          
                              <Checkbox color="primary"
                              checked={true}
                              id={`custom-checkbox-${i}`}
                            //    onClick={() => handleChangeProduct(v)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}/>
                              </Paper>
                                
                              </Grid>
                              

                        ) }

                        <Grid style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} item>
                        <Typography>You have selected { checkedState.length + checkedState2.length } products</Typography>

                        { checkedState2.length + checkedState.length > 0 ?  
                        <Button onClick={()=> reviewSelectHandler() } variant="contained" color='primary'>Continue</Button> 
                        : <Button variant="contained" color='primary' disabled>Continue</Button>
                        }

                        </Grid>

                        </Grid>
                    
                    }

                    
            </Box>
            <ToastContainer autoClose={4000}  />
        </div>
    )
}

export default CategoryPage
