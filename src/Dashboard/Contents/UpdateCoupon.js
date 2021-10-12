import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DatePicker from '../MUIDatePicker/MuiDatePicker'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { userLogoutRequest } from "redux/UserloginlogoutSlice";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['1', '2', '3', '4'];
}


const One = () => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
        <Controller
        name="coupon_media"
        control={control}
        rules={{ required: "Please add an image" }}
        render={({ field,formState }) => 
        <> 
        <label for="myfile">Select an Image:</label>
        <input type="file" onChange={(e) => field.onChange(e.target.files[0])}/>
        <p style={{color:'red'}}>{formState.errors.coupon_media?.message}</p>  
        
         </>
    }/>

    <Controller
    name="coupon_name"
    control={control}
    rules={{ required: "field is required" }}
    render={({ field,formState }) => 
    <TextField
    label="Coupon Name"
    size='small'
    variant="outlined"
    placeholder='Coupon name...'
    fullWidth
    {...field}
    helperText={formState.errors.coupon_name?.message}
    error={formState.errors.coupon_name}
    />
}/>

<Controller
        name="coupon_title"
        control={control}
        rules={{ required: "field is required" }}
        render={({ field,formState }) => 
        <TextField
        label="Coupon Title"
        size='small'
        variant="outlined"
        placeholder='Coupon title...'
        fullWidth
        {...field}
        helperText={formState.errors.coupon_title?.message}
        error={formState.errors.coupon_title}
        />
    }/> 


<Controller
        name="coupon_url"
        control={control}
        rules={{ required: "field is required" }}
        render={({ field,formState }) => 
        <TextField
        // id="first-Name"
        label="Coupon URL"
        size='small'
        variant="outlined"
        placeholder='Coupon URL....'
        fullWidth
        {...field}
        helperText={formState.errors.coupon_url?.message}
        error={formState.errors.coupon_url}
        />
    }/> 


<Controller
        name="coupon_code"
        control={control}
        rules={{ required: "field is required" }}
        render={({ field,formState }) => 
        <TextField
        // id="first-Name"
        label="Coupon code"
        size='small'
        variant="outlined"
        placeholder='Coupon Code'
        fullWidth
        {...field}
        helperText={formState.errors.coupon_code?.message}
        error={formState.errors.coupon_code }
        />
    }/> 
</>
    )   
}

const Two = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
      <>
      <Controller
      name="coupon_type"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Coupon type"
      size='small'
      variant="outlined"
      placeholder='Coupon type...'
      fullWidth
      {...field}
      helperText={formState.errors.coupon_type?.message}
      error={formState.errors.coupon_type}
      />
  }/>

  <Controller
  name="coupon_description"
  control={control}
  rules={{ required: "field is required" }}
  render={({ field,formState }) => 
  <TextField
  // id="first-Name"
  label="Coupon Description"
  size='small'
  variant="outlined"
  placeholder='Coupon description...'
  fullWidth
  {...field}
  helperText={formState.errors.coupon_description?.message}
  error={formState.errors.coupon_description}
  />
}/>

<Controller
      name="discount"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Discount"
      size='small'
      variant="outlined"
      placeholder='Discount...'
      fullWidth
      {...field}
      helperText={formState.errors.discount?.message}
      error={formState.errors.discount}
      />
  }/> 


<Controller
      name="applied_on_attribute"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Applied On Attribute"
      size='small'
      variant="outlined"
      placeholder='Applied on attribute...'
      fullWidth
      {...field}
      helperText={formState.errors.applied_on_attribute?.message}
      error={formState.errors.applied_on_attribute}
      />
  }/> 


<Controller
      name="attribute_id"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Attribute_id"
      size='small'
      variant="outlined"
      placeholder='Attribute ID...'
      fullWidth
      {...field}
      helperText={formState.errors.attribute_id?.message}
      error={formState.errors.attribute_id}
      />
  }/> 
</>
  )   
}

const Three = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
      <>
      <Controller
      name="coupon_badge"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Coupon badge"
      size='small'
      variant="outlined"
      placeholder='Coupon badge...'
      fullWidth
      {...field}
      helperText={formState.errors.coupon_badge?.message}
      error={formState.errors.coupon_badge}
      />
  }/>

  <Controller
  name="start_date"
  control={control}
  rules={{ required: "field is required" }}
  render={({ field,formState }) => 
  <>
  <DatePicker field={field} />
  <p> {formState.errors.start_date?.message} </p>
  </>
}/>

<Controller
      name="end_date"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <>
      <DatePicker field={field} />
      <p> {formState.errors.end_date?.message} </p>
      </>
  }/> 


<Controller
      name="seo_description"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="SEO description"
      size='small'
      variant="outlined"
      placeholder='SEO description...'
      fullWidth
      {...field}
      helperText={formState.errors.seo_description?.message}
      error={formState.errors.seo_description}
      />
  }/> 


<Controller
      name="location"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Location"
      size='small'
      variant="outlined"
      placeholder='Location...'
      fullWidth
      {...field}
      helperText={formState.errors.location?.message}
      error={formState.errors.location}
      />
  }/> 
</>
  )   
}

const Four = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
      <>
      <Controller
      name="allow_reviews"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Allow reviews"
      size='small'
      variant="outlined"
      placeholder='Allow Reviews...'
      fullWidth
      {...field}
      helperText={formState.errors.allow_reviews?.message}
      error={formState.errors.allow_reviews}
      />
  }/>

  <Controller
  name="priority"
  control={control}
  rules={{ required: "field is required" }}
  render={({ field,formState }) => 
  <TextField
  // id="first-Name"
  label="Priority"
  size='small'
  variant="outlined"
  placeholder='Priority...'
  fullWidth
  {...field}
  helperText={formState.errors.priority?.message}
  error={formState.errors.priority}
  />
}/>

<Controller
      name="permalink"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Permalink"
      size='small'
      variant="outlined"
      placeholder='Permalink...'
      fullWidth
      {...field}
      helperText={formState.errors.permalink?.message}
      error={formState.errors.permalink}
      />
  }/> 


<Controller
      name="category"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Category"
      size='small'
      variant="outlined"
      placeholder='Category...'
      fullWidth
      {...field}
      helperText={formState.errors.category?.message}
      error={formState.errors.category}
      />
  }/> 


<Controller
      name="organisation_id"
      control={control}
      rules={{ required: "field is required" }}
      render={({ field,formState }) => 
      <TextField
      // id="first-Name"
      label="Organisation ID"
      size='small'
      variant="outlined"
      placeholder='Organisation ID...'
      fullWidth
      {...field}
      helperText={formState.errors.organisation_id?.message}
      error={formState.errors.organisation_id}
      />
  }/> 
</>
  )   
}



function getStepContent(step) {
   
  switch (step) {
    case 0:
      return <One />;
    case 1:
      return <Two />;
    case 2:
      return <Three />;
    case 3:
      return <Four />;
    default:
      return 'Unknown step';
  }
}

export default function AddCoupons() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const methods = useForm();
  const selector = useSelector((state) => (state));
  const dispatch = useDispatch()
  
  const auth= (formData)=>{

    axios({
        method:'POST',
        url:"http://infilate.com/backend/public/api/coupons/add-coupon",
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

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep==3){
        const formdata = new FormData()
        formdata.append('coupon_media',data.coupon_media)
        formdata.append('coupon_name',data.coupon_name)
        formdata.append('coupon_title',data.coupon_title)
        formdata.append('coupon_url',data.coupon_url)
        formdata.append('coupon_code',data.coupon_code)
        formdata.append('coupon_type',data.coupon_type)
        formdata.append('coupon_description',data.coupon_description)
        formdata.append('discount',data.discount)
        formdata.append('applied_on_attribute',data.applied_on_attribute)
        formdata.append('attribute_id',data.attribute_id)
        formdata.append('coupon_badge',data.coupon_badge)
        formdata.append('start_date',data.start_date.getFullYear() + '-' + data.start_date.getMonth() + '-' + data.start_date.getDate())
        formdata.append('end_date',data.end_date.getFullYear() + '-' + data.end_date.getMonth() + '-' + data.end_date.getDate())
        formdata.append('seo_description',data.seo_description)
        formdata.append('location',["Andaman Nicobar","Andhra Pradesh"])
        formdata.append('allow_reviews',data.allow_reviews)
        formdata.append('priority',data.priority)
        formdata.append('permalink',data.permalink)
        formdata.append('category',["8","9"])
        auth(formdata)
    }
    // console.log(activeStep)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <FormProvider {...methods}>
            <form id='form2' onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep)}</form>
            </FormProvider>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" 
              // onClick={handleNext} 
              type='submit' form='form2'>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
