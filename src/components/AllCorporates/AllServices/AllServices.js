import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import MenuFilters from './MenuFilters'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import ServicesCard from './ServicesCard.js';
import CustomPagination from '../CustomPagination.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@mui/material/Button';
import CompareIcon from '@material-ui/icons/Compare';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";



function AllServices({serviceList, arr3, setArr3}) {

    // const [productList,setProductList] = React.useState([])
    const [type,setType] = React.useState('Most Recent')
    const [loading,setLoading] = React.useState(false)
    const [currentPage,setCurrentPage]= React.useState(1)
    const [postPerPage,setPostPerPage]= React.useState(10)
    const [open,setOpen] = React.useState(false)
    const [arr1,setArr1]= React.useState([])
    const classes = useStyles()
    let modifiedArray = []
    serviceList.map((v,i) => modifiedArray.push(v))


    if(type=='Most Recent') {
      serviceList.map((v,i) => modifiedArray.push(v))
    }
    else if(type=='User Reviews') {
      modifiedArray.sort((a,b) => b.review.average_review - a.review.average_review )
    }

        else if(type=='Brands') {
          modifiedArray = serviceList.filter((v,i) => v.organisation_type.name=='Brand' )
      }

      else if(type=='Institutes') {   
        modifiedArray = serviceList.filter((v,i) => v.organisation_type.name=='Institute' )
      }
      else if(type=='Agencies') {  
        modifiedArray = serviceList.filter((v,i) => v.organisation_type.name=='Agency' )
      }
    


    const handleCompare = (item,index) => {

      if(arr1.length==0){
        setArr1(arrold => [...arrold,item])
      }
      else if(arr1.length>0 && arr1.includes(item)){
        
        // arr1.splice(arr1.indexOf(item),1)
        setArr1(arr1.filter(i=>i.id!==item.id))
          // console.log(arr1)      
        }
        else if(arr1.length<4) {
          setArr1(arrold=>[...arrold,item])
        }
      }

      
    const history = useHistory()
    const passDatatoPage =(array) =>{
        history.push({pathname:'/Comparison', Post:array});
        // console.log(array)
      }

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const indexOfLastPost=currentPage * postPerPage
    const indexOfFirstPost=indexOfLastPost - postPerPage
    const currentPosts=modifiedArray.slice(indexOfFirstPost,indexOfLastPost)


    // console.log(productList)

  

    return (
<>
           <Box display='flex' style={{}} justifyContent='space-between'>
                <MenuFilters  type={type} setType={setType} arr3={arr3} setArr3={setArr3} />


                <Grid item md={8}>
                <Stack spacing={3}>

                <ServicesCard list={currentPosts} handleCompare={handleCompare} />

                </Stack>
                <CustomPagination style={{marginTop:'10px'}} postPerPage={postPerPage} totalPost={modifiedArray.length} paginate={paginate} />
                </Grid>



                {/* cart */}
                <div className={classes.btn}>
                <Button onClick={()=>setOpen(v=>!v)} color="secondary" startIcon={<CompareIcon />}>{arr1.length}</Button>
                {

               open === true ? <Paper elevation={3} style={{}}>

                 {arr1 && arr1.map((v,i)=>
               <Grid key={i} style={{display:'flex',alignItems:'center'}} item>
               <img style={{width:'55px',height:'43px',padding:'5px'}} 
               src={`http://infilate.com/backend/public/images/${v.media}`}
               alt='' />
               <p style={{padding:'5px'}}>{v.name}</p>
               <IconButton aria-label="delete" className={classes.closeicon}>
                <CloseIcon onClick={() => handleCompare(v)} style={{fontSize:'17px'}}/>
                </IconButton>
               </Grid> 
                 
                 
                 )}
                {arr1.length > 1 ? <Button 
                onClick={()=>passDatatoPage(arr1)} 
                color="secondary" >Full Comparison</Button> 
                : <Button disabled >Full Comparison</Button>   } 
             </Paper> :
             null
            }

            </div>
                
           </Box> 
           </>

    )

}

export default AllServices
