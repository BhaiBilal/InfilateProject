import React from 'react'
import { Controller, useForm } from "react-hook-form"
import TextField from "@material-ui/core/TextField";
import UpdateProductBasicSelect from '../MUIBasicSelect/UpdateProductBasicSelect'
import UpdateProductMultiSelect from '../MUImultiSelect/UpdateProductMultiSelect'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Paper } from "@material-ui/core";
import { userLogoutRequest } from "redux/UserloginlogoutSlice";
import Grid from '@mui/material/Grid';


function UpdateProduct() {

    const selector = useSelector((state) => (state));
    const [productDetail, setProductDetail] = React.useState([])
    const { id } = useParams()
    const dispatch = useDispatch()
    const { handleSubmit, reset, control, register,setValue, getValues } = useForm({
      });



      React.useEffect(() => {

        axios({
          method:'POST',
          url:`http://infilate.com/backend/public/api/products/view-product`,
          headers: {
              "token":selector.userLoginLogout.token,
          },
          data:{
            id:id
          }
  
      })
        .then(function (response) {
  
          console.log(response);
          setProductDetail(response.data.Data)
          // setBlogDetail(response.data.Data)
          setValue('name',response.data.Data.name)
          setValue('type',response.data.Data.type)
          setValue('price',response.data.Data.price)
          setValue('content_description',response.data.Data.content_description)
          // setValue('category_id',response.data.Data[0].title)
          setValue('corporate_type',response.data.Data.corporate_type)
          setValue('product_feature',response.data.Data.product_feature)
        })
        .catch(function (err) {
          console.log(err)
          dispatch(userLogoutRequest())
          // setErrors('error')
          // console.log(err+' user already registered');
        });  
      },[])  


      const auth= (formData)=>{

        axios({
            method:'POST',
            url:"http://infilate.com/backend/public/api/products/add-product",
            headers: {
                "token":selector.userLoginLogout.token,
                "Content-Type":"multipart/form-data"
            },

            data:formData,
          
        })
          .then(function (response) {
            //handle success
            if(response){
              alert('successfully added')
              
            }
            console.log(response);
            // window.location.href='http://my.infilate.com/Login'
          })
          .catch(function (err) {
            //handle error
            alert('Token is invalid, Please relogin '+err)
            console.log(err)
            dispatch(userLogoutRequest())
            // setErrors('error')
            // console.log(err+' user already registered');
          });
      }


      
    const onSubmit = (data) => {
        const formdata = new FormData()
        formdata.append('name',data.name)
        // formdata.append('category_id',[parseInt(data.category_id)])
        formdata.append('category_id',"['12','20']")
        formdata.append('type',data.type)
        formdata.append('content_description',data.content_description)
        formdata.append('price',parseInt(data.price))
        if(data.product_image != undefined){
          formdata.append('product_image',data.product_image)
        }

        
        
        console.log(data)
        // console.log(...formdata)
        // auth(formdata)
    }



    return (
      <div style={{display:'flex',justifyContent:'center', paddingTop:'160px'}}>

         <Grid item md={9} xs={12} >
        <form style={{display:'flex',flexDirection:'column',}} onSubmit={handleSubmit(onSubmit)}>


        <Controller
            name="name"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <>
            <TextField
            label="Product name"
            size='small'
            // required
            variant="outlined"
            placeholder='Product name...'
            fullWidth
            {...field}
            helperText={formState.errors.name?.message}
            error={formState.errors.name}
            />
           
            </>
            }/>

            <Controller
            name="category_id"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <>
            <UpdateProductMultiSelect field={field} />
             <p style={{color:'red'}}>{formState.errors.category_id?.message}</p>  
            </>
            }/>


<Controller
            name="type"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Product type"
            size='small'
            // required
            variant="outlined"
            placeholder='Product type...'
            fullWidth
            {...field}
            helperText={formState.errors.type?.message}
            error={formState.errors.type}
            />
            }/>



<Controller
            name="content_description"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Content description"
            size='small'
            // required
            variant="outlined"
            placeholder='Content description...'
            fullWidth
            {...field}
            helperText={formState.errors.content_description?.message}
            error={formState.errors.content_description}
            />
            }/>


<Controller
            name="price"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Price"
            size='small'
            // required
            variant="outlined"
            placeholder='Price...'
            fullWidth
            {...field}
            helperText={formState.errors.price?.message}
            error={formState.errors.price}
            />
            }/>


<Controller
            name="product_feature"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Product feature"
            size='small'
            // required
            variant="outlined"
            placeholder='Price...'
            fullWidth
            {...field}
            helperText={formState.errors.product_feature?.message}
            error={formState.errors.product_feature}
            />
            }/>


            <Controller
            name="corporate_type"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <>
            <UpdateProductBasicSelect getValues={getValues('corporate_type')} setValue={setValue} />
             <p style={{color:'red'}}>{formState.errors.corporate_type?.message}</p>  
            </>
            }/>

            <Controller
            name="product_image"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field, formState }) => 
            <> 
            {/* <img src={`http://infilate.com/backend/public/images/${productDetail[0]?.media}`} alt=''  style={{width:'100px', height:'100px'}} /> */}
            <label for="myfile">Select an Image:</label>
            <input type="file" onChange={(e) => field.onChange(e.target.files[0])} />
             <p style={{color:'red'}}>{formState.errors.product_image?.message}</p>  
             </>
            }/>


            <Button type='submit'>Submit</Button>

            </form> 
            </Grid>
        </div>
    )
}

export default UpdateProduct

