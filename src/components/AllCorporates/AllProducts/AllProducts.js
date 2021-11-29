import React from 'react'
import useStyles from './Styles.js';
import { CircularProgress, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import MenuFilters from './MenuFilters'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import ProductCard from './ProductCard.js';
import CustomPagination from '../CustomPagination.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@mui/material/Button';
import CompareIcon from '@material-ui/icons/Compare';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import {Typography,Grid} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


function AllProducts({productList, arr2, setArr2, value}) {

    // const [productList,setProductList] = React.useState(products)
    const [type,setType] = React.useState('Most Recent')
    const [loading,setLoading] = React.useState(false)
    const [currentPage,setCurrentPage]= React.useState(1)
    const [postPerPage,setPostPerPage]= React.useState(10)
    const [open,setOpen] = React.useState(false)
    const [arr1,setArr1]= React.useState([])
    const matches = useMediaQuery('(max-width:800px)');
    
    const classes = useStyles()
    let modifiedArray = []
    productList.map((v,i) => modifiedArray.push(v))

    // React.useEffect(() => {
    //     let cancel
      
    //     axios('http://infilate.com/backend/public/api/app/products/product-list', {
    //       method: 'POST',
    //       cancelToken: new axios.CancelToken(c=>cancel=c)
    //     }).then((res) => {
    //       if(type=='Most Recent'){
    //         setProductList(res.data.Data)
    //       }

    //       else if(type=='User Reviews') {
            
    //           setProductList(res.data.Data.sort((a,b) => b.review.user_rating - a.review.user_rating ) )
            
    //       }
    //       else if(type=='Brands') {
            
    //         setProductList(res.data.Data.filter((v,i) => v.organisation_type.name=='Brand' ))
          
    //     }

    //     else if(type=='Institutes') {
            
    //       setProductList(res.data.Data.filter((v,i) => v.organisation_type.name=='Institute' ))
        
    //     }

    //     else if(type=='Agencies') {
            
    //     setProductList(res.data.Data.filter((v,i) => v.organisation_type.name=='Agency' ))
      
    //     }
          
    //     }).catch(e=>{
    //       if(axios.isCancel(e)) return
    //     })   
      
    //     return ()=> cancel()

    // },[type])
    
    
      // if(type == 'User Reviews') {
      // setProductList(productList.sort((a,b) => b.review.user_rating - a.review.user_rating ))
      // }

    // console.log(type)

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

      // console.log(modifiedArray)
      if(type=='Most Recent') {
        productList.map((v,i) => modifiedArray.push(v))
      }
      else if(type=='User Reviews') {
        modifiedArray.sort((a,b) => b.review.average_review - a.review.average_review )
      }

          else if(type=='Brands') {
            modifiedArray = productList.filter((v,i) => v.organisation_type.name=='Brand' )
        }

        else if(type=='Institutes') {   
          modifiedArray = productList.filter((v,i) => v.organisation_type.name=='Institute' )
        }
        else if(type=='Agencies') {  
          modifiedArray = productList.filter((v,i) => v.organisation_type.name=='Agency' )
        }
      // console.log(modifiedArray)




    const history = useHistory()
    const passDatatoPage =(array) => {
        history.push({pathname:`/Comparison/${array.map(v => v.id)}`});
        // array.map((v,i) => console.log(v.id))
      }

    


    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const indexOfLastPost=currentPage * postPerPage
    const indexOfFirstPost=indexOfLastPost - postPerPage
    const currentPosts=modifiedArray.slice(indexOfFirstPost,indexOfLastPost)


    return (

           <Box display='flex' justifyContent='space-between'>
           {/* { matches == true ?  null : 
            <MenuFilters list={productList} type={type} setType={setType} arr2={arr2} setArr2={setArr2} value={value} />
           } */}
           
           <MenuFilters list={productList} type={type} setType={setType} arr2={arr2} setArr2={setArr2} value={value} />
          

                <Grid item md={10} sm={10} xs={12} lg={8}>
                <Stack spacing={3}>

                <ProductCard list={currentPosts} handleCompare={handleCompare} />

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
           

    )

}

export default AllProducts
