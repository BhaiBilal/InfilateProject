import React from 'react'
import { useHistory, Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import Grid from '@mui/material/Grid';
import axios from 'axios'
import mastImage from '../../PolygonLuminary.svg'



const divStyle = {
  display:'flex',
  width:'inherit',
  height:'35px',
  // border:'1px solid black',
  justifyContent:'space-between',
  alignItems:'center'
}

const options = [
  'update',
  'delete'
];

const ITEM_HEIGHT = 48;


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const styles= {
    '&:hover':{
      background:'black',
     
    },
    paddingRight:'12px',
  }
  return <IconButton {...other} style={styles} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



function LongMenu({id,setdeleteState,type}) {
  const selector = useSelector((state) => (state));
  const dispatch = useDispatch()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 

  const deleteBlog = (formdata)=>{

    axios({
        method:'POST',
        url:"http://infilate.com/backend/public/api/corporate/blog/delete",
        headers: {
          "token":selector.userLoginLogout.token,
          "Content-Type":"multipart/form-data"
      },
        data:formdata,

    })
      .then(function (response) {
        console.log(response);
        alert('blog deleted')
        setdeleteState(p => !p)
        // window.location.href='http://my.infilate.com/Login'
      })
      .catch(function (err) {
        //handle error
        alert('Token is invalid, Please relogin '+err.message)
        console.log(err)
        // dispatch(userLogoutRequest())
        // setErrors('error')
        // console.log(err+' user already registered');
      });


  }

  const deleteCoupon = (formdata)=>{

    axios({
        method:'POST',
        url:"http://infilate.com/backend/public/api/coupons/delete-coupon",
        headers: {
          "token":selector.userLoginLogout.token,
          "Content-Type":"multipart/form-data"
      },
        data:formdata,

    })
      .then(function (response) {
        console.log(response);
        alert('coupon deleted')
        setdeleteState(p => !p)
        // window.location.href='http://my.infilate.com/Login'
      })
      .catch(function (err) {
        //handle error
        alert('Token is invalid, Please relogin '+err.message)
        console.log(err)
        // dispatch(userLogoutRequest())
        // setErrors('error')
        // console.log(err+' user already registered');
      });


  }

  const deleteProduct = (formdata)=>{

    axios({
        method:'POST',
        url:"http://infilate.com/backend/public/api/products/delete-product",
        headers: {
          "token":selector.userLoginLogout.token,
          "Content-Type":"multipart/form-data"
      },
        data:formdata,

    })
      .then(function (response) {
        console.log(response);
        alert('product deleted')
        setdeleteState(p => !p)
        // window.location.href='http://my.infilate.com/Login'
      })
      .catch(function (err) {
        //handle error
        alert('Token is invalid, Please relogin '+err.message)
        console.log(err)
        // dispatch(userLogoutRequest())
        // setErrors('error')
        // console.log(err+' user already registered');
      });


  }

  const deleteService = (formdata)=>{

    axios({
        method:'POST',
        url:"http://infilate.com/backend/public/api/services/delete-service",
        headers: {
          "token":selector.userLoginLogout.token,
          "Content-Type":"multipart/form-data"
      },
        data:formdata,

    })
      .then(function (response) {
        console.log(response);
        alert('service deleted')
        setdeleteState(p => !p)
        // window.location.href='http://my.infilate.com/Login'
      })
      .catch(function (err) {
        //handle error
        alert('Token is invalid, Please relogin '+err.message)
        console.log(err)
        // dispatch(userLogoutRequest())
        // setErrors('error')
        // console.log(err+' user already registered');
      });


  }




  const handleUpdateDelete = (option) => {
    // console.log(id,type)

    if(type=='product' && option == 'delete'){
      const formdata = new FormData()
      formdata.append('id',`[${id}]`)
      deleteProduct(formdata)
    }
    
    else if(type=='service' && option == 'delete'){
      const formdata = new FormData()
      formdata.append('id',`[${id}]`)
      deleteService(formdata)
    }

    else if(type == 'coupon' && option == 'delete') {
      const formdata = new FormData()
      formdata.append('id',`[${id}]`)
      deleteCoupon(formdata)
    }

    else if(type == 'blog' && option == 'delete') {
      const formdata = new FormData()
      formdata.append('id',`[${id}]`)
      deleteBlog(formdata)
    }

    else if(type == 'blog' && option == 'update') {
      history.push(`/Dashboard/updateBlog/${id}`)
     
    }
    
    else if(type == 'coupon' && option == 'update') {
      history.push('/Dashboard/updateCoupon')
     
    }

    else if(type == 'product' && option == 'update') {
      history.push('/Dashboard/updateProduct')
     
    }

    else if(type == 'service' && option == 'update') {
      history.push('/Dashboard/updateService')
     
    }

  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon fontSize='small' />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={()=>handleUpdateDelete(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}




function CardView({blogList,setdeleteState, productlist,servicelist,couponlist,Blogs,Products,Services,Coupons}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ViewBlogList = () => {

  }

  return (
    <Card sx={{ width: 'inherit' }} 
    style={{margin:'0px 10px 10px 0px',height:'max-content',boxShadow:'none',
    // backgroundImage:`url(${mastImage})`
    }} >

      <CardContent style={{paddingBottom:'0px',paddingTop:'0px'}}>
      { Products && (
      <div class="container">
      <div class="row">
      <div class="four col-md-3">
          <div class="counter-box colored" style={{background:'#ef5350', display:'flex', justifyContent:'space-between',}}> 
          <i class="fa fa-database"></i> 
          <div>
          <span class="counter">{productlist.length}</span>
              <p>products uploaded</p>
          </div>
          </div>
      </div>
      </div>
      </div>) }


      { Blogs && (
      <div class="container">
      <div class="row">
      <div class="four col-md-3">
          <div class="counter-box colored" style={{background:'#007bff', display:'flex', justifyContent:'space-between',}}> 
          <i class="fa fa-code-fork"></i> 
          <div>
          <span class="counter">{blogList.length}</span>
              <p>blogs uploaded</p>
          </div>
          </div>
      </div>
      </div>
      </div>) }


      { Services && (
      <div class="container">
      <div class="row">
      <div class="four col-md-3">
          <div class="counter-box colored" style={{background:'#66bb6a', display:'flex', justifyContent:'space-between',}}> 
          <i class="fa fa-users"></i> 
          <div>
          <span class="counter">{servicelist.length}</span>
              <p>services uploaded</p>
          </div>
          </div>
      </div>
      </div>
      </div>) }


      { Coupons && (
      <div class="container">
      <div class="row">
      <div class="four col-md-3">
          <div class="counter-box colored" style={{background:'#26c6da', display:'flex', justifyContent:'space-between',}}> 
          <i class="fa fa-ticket"></i> 
          <div>
          <span class="counter">{couponlist.length}</span>
              <p>coupons uploaded</p>
          </div>
          </div>
      </div>
      </div>
      </div>) }

      </CardContent>
      <CardActions disableSpacing style={{marginTop:'-61px',display:'flex', justifyContent:'end'}}>
      {Blogs && 
      <Link to='/blogListing'>
      <div className='view-more-blog-btn'>
      <button>view more</button>
      </div>
      </Link>
       }

       {Products && 
        <Link to='/productListing'>
      <div className='view-more-blog-btn'>
      <button style={{color:'#ef5350'}}>view more</button>
      </div>
      </Link>
       }


       {Services && 
       <Link to='/serviceListing'>
      <div className='view-more-blog-btn'>
      <button style={{color:'#66bb6a'}}>view more</button>
      </div>
      </Link>
       }


       {Coupons && 
        <Link to='/couponListing'>
      <div className='view-more-blog-btn'>
      <button style={{color:'#26c6da'}}>view more</button>
      </div>
      </Link>
       }



        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:'white'}} />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
      
      
        <CardContent >
        { 
            blogList && blogList.map((item,index) => 
            <div>
            <div key={index} style={divStyle}>
            <Checkbox />
            <Typography variant="body2" color="text.secondary">
              {item.title}
          </Typography>
            <div style={{display:'flex'}}>
            <LongMenu id={item.id} setdeleteState={setdeleteState} type={'blog'} />          
            </div>
            
            </div>
            <Button variant="text">Add Blog</Button>
            </div>
            )
        }

{ 
            productlist && productlist.map((item,index) => 
            <div key={index} style={divStyle}>
            <Checkbox />
            <Typography variant="body2" color="text.secondary">
              {item.name}
          </Typography>
            <div style={{display:'flex'}}>
            <LongMenu id={item.id} setdeleteState={setdeleteState} type={'product'} />          
            </div>
            </div>
            )
        }





{ 
            servicelist && servicelist.map((item,index) => 
            <div key={index} style={divStyle}>
            <Checkbox />
            <Typography variant="body2" color="text.secondary">
              {item.name}
          </Typography>
            <div style={{display:'flex'}}>
            <LongMenu id={item.id} setdeleteState={setdeleteState} type={'service'} />          
            </div>
            </div>
            )
        }


        
{ 
            couponlist && couponlist.map((item,index) => 
            <div key={index} style={divStyle}>
            <Checkbox />
            <Typography variant="body2" color="text.secondary">
              {item.name}
          </Typography>
            <div style={{display:'flex'}}>
            <LongMenu id={item.id} setdeleteState={setdeleteState} type={'coupon'} />          
            </div>
            </div>
            )
        }

        </CardContent>
      </Collapse> */}
    </Card>
  );
}




function Home() {

  const [blogList,setBlogList] = React.useState([])
  const [productList,setProductList] = React.useState([])
  const [serviceList,setServiceList] = React.useState([])
  const [couponList,setCouponList] = React.useState([])
  const [deleteState,setDeleteState] = React.useState(false)
  const selector = useSelector((state) => (state));
  const dispatch = useDispatch()



  React.useEffect(() => {

    axios({
      method:'POST',
      url:"http://infilate.com/backend/public/api/corporate/blog/blog-list",
      headers: {
          "token":selector.userLoginLogout.token,
      },
  })
    .then(function (response) {
      //handle success
      console.log(response)
      setBlogList(response.data.Data)
      // console.log(response);
      // window.location.href='http://my.infilate.com/Login'
    })
    .catch(function (err) {
      //handle error
      console.log(err)
      // dispatch(userLogoutRequest())
      // setErrors('error')
      // console.log(err+' user already registered');
    });
  },[deleteState])


  React.useEffect(() => {

    axios({
      method:'POST',
      url:"http://infilate.com/backend/public/api/products/product-list",
      headers: {
          "token":selector.userLoginLogout.token,
      },
  })
    .then(function (response) {
      //handle success
      setProductList(response.data.Data)
      // console.log(response);
      // window.location.href='http://my.infilate.com/Login'
    })
    .catch(function (err) {
      //handle error
      console.log(err)
      // dispatch(userLogoutRequest())
      // setErrors('error')
      // console.log(err+' user already registered');
    });
  },[deleteState])


  React.useEffect(() => {

    axios({
      method:'POST',
      url:"http://infilate.com/backend/public/api/services/service-list",
      headers: {
          "token":selector.userLoginLogout.token,
      },
  })
    .then(function (response) {
      //handle success
      setServiceList(response.data.Data)
      // console.log(response);
      // window.location.href='http://my.infilate.com/Login'
    })
    .catch(function (err) {
      //handle error
      console.log(err)
      // dispatch(userLogoutRequest())
      // setErrors('error')
      // console.log(err+' user already registered');
    });
  },[deleteState])


  React.useEffect(() => {

    axios({
      method:'POST',
      url:"http://infilate.com/backend/public/api/coupons/coupon-list",
      headers: {
          "token":selector.userLoginLogout.token,
      },
  })
    .then(function (response) {
      //handle success
      setCouponList(response.data.Data)
      // console.log(response);
      // window.location.href='http://my.infilate.com/Login'
    })
    .catch(function (err) {
      //handle error
      console.log(err)
      // dispatch(userLogoutRequest())
      // setErrors('error')
      // console.log(err+' user already registered');
    });
  },[deleteState])



    return (
        <>
           <Grid style={{ paddingTop:'160px' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           <Grid item md={6} xs={12}>
            <CardView blogList={blogList} setdeleteState={setDeleteState} Blogs={'Blogs'} />
            </Grid>
            <Grid item md={6} xs={12}>
            <CardView productlist={productList} setdeleteState={setDeleteState} Products={'Products'} />
            </Grid>
            <Grid item md={6} xs={12}>
            <CardView servicelist={serviceList} setdeleteState={setDeleteState} Services={'Services'} />
            </Grid>
            <Grid item md={6} xs={12}>
            <CardView couponlist={couponList} setdeleteState={setDeleteState} Coupons={'Coupons'} />
            </Grid>
            </Grid>
        </>
    )
}

export default Home
