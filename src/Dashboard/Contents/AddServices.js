import React from 'react'
import { Controller, useForm } from "react-hook-form"
import TextField from "@material-ui/core/TextField";
import MUIBasicSelect from '../MUIBasicSelect/BasicSelect'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Paper } from "@material-ui/core";
import { userLogoutRequest } from "redux/UserloginlogoutSlice";



function AddServices() {

    const selector = useSelector((state) => (state));
    const dispatch = useDispatch()
    const { handleSubmit, reset, control, register,setValue } = useForm({
      });

      const auth= (formData)=>{

        axios({
            method:'POST',
            url:"http://infilate.com/backend/public/api/services/add-service",
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
        formdata.append('category_id',[parseInt(data.category_id)])
        formdata.append('type',data.type)
        formdata.append('content_description',data.content_description)
        formdata.append('price',parseInt(data.price))
        formdata.append('image',data.image)
        // console.log(...formdata)
        auth(formdata)
    }



    return (
        <div>
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit(onSubmit)}>

        <Controller
            name="name"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Service name"
            size='small'
            required
            variant="outlined"
            placeholder='Service name...'
            fullWidth
            {...field}
            helperText={formState.errors.name?.message}
            error={formState.errors.name}
            />
            }/>

        <Controller
            name="category_id"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <MUIBasicSelect field={field} />
            }/>


        <Controller
            name="type"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <TextField
            label="Service type"
            size='small'
            required
            variant="outlined"
            placeholder='Service type...'
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
            required
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
            required
            variant="outlined"
            placeholder='Price...'
            fullWidth
            {...field}
            helperText={formState.errors.price?.message}
            error={formState.errors.price}
            />
            }/>

        <Controller
            name="image"
            control={control}
            rules={{ required: "field is required" }}
            render={({ field,formState }) => 
            <> 
            <label for="myfile">Select an Image:</label>
            <input type="file" onChange={(e) => field.onChange(e.target.files[0])} />
             </>
            }/>


            <Button type='submit'>Submit</Button>

            </form> 
        </div>
    )
}

export default AddServices
