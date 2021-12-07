import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import { CssBaseline, Container, Grid, Box, TextField } from "@material-ui/core";
import {StyledApp} from './styledApp'
import './style.css'
import waveIcon from '../AnimatedShape.svg'
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import MUIBasicSelect from './MUIBasicSelect'
import axios from 'axios'
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";
import { ErrorSharp } from '@material-ui/icons';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "170px",
    width: '100%',
    backgroundImage:'url('+waveIcon+')',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: "0px 0px 0px 0px",


  },
  customTextField: {
    "& input::placeholder": {
      fontSize: "20px"
    }
  }
}));

function getSteps() {
  return ['User Details', 'Organisation Details', 'Contact Details','Uploads', 'Finished'];
}

const UserDetails = () => {

    const { control } = useFormContext()
    return (
        <>
          <Grid  data-aos="flip-left" data-aos-duration="500" data-aos-offset="0" style={{justifyContent: "center"}} container spacing={2}>
            
            <Grid item md={6} style={{ display: "flex", flexDirection: "column" }} xs={12}>

            <div className="container">
            <Controller 
            control={control}
            name='f_name'
            rules={{ required:"field is required", minLength:4 }}
            render={({field,formState}) => (
            <>
              <TextField
              style={{background:"white"}}
              // autoComplete="fname"
              // name="firstName"
              variant="outlined"
              // required
              fullWidth
              placeholder="Enter Your first Name"
              id="firstName"
              label="First Name"
              // autoFocus
              size='small'
              margin="normal"
              inputProps={{
                style: {fontSize: 15} 
              }}
              {...field}
              // {fieldState}
              // {formState.errors.f_name && <p>This field is required</p>}

            />
             <p style={{color:'red'}}>{formState.errors.f_name?.message}</p>
             <p style={{color:'red'}}>{formState.errors.f_name?.type === "minLength" && "minimum characters should be 4"}</p>
             </>
            )}  
            />
            </div>

            <div className="container">
            <Controller 
            control={control}
            name='l_name'
            rules={{ required:"field is required", minLength:4 }}
            render={({field,formState}) => (
              <>
            <TextField
             style={{background:"white"}}
                autoComplete="lname"
                // name="lastName"
                variant="outlined"
                // required
                fullWidth
                placeholder="Enter Your last Name"
                id="last-Name"
                label="Last Name"
             
                size='small'
                margin="normal"
                inputProps={{
                  style: {fontSize: 15} 
                }}
                {...field}
                />
             <p style={{color:'red'}}>{formState.errors.l_name?.message}</p>
             <p style={{color:'red'}}>{formState.errors.l_name?.type === "minLength" && "minimum characters should be 4"}</p>
             </>
                )}  
                />
            </div>

            <div className="container">
            <Controller 
            control={control}
            name='email'
            rules={{ required:"field is required",
            pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             }}
            render={({field, formState}) => (
              <>
            <TextField
             style={{background:"white"}}
                autoComplete="email"
                // name="email"
                variant="outlined"
                // required
                fullWidth
                placeholder="Enter Your email"
                id="email"
                label="Email"
                size='small'
                margin="normal"
                inputProps={{
                  style: {fontSize: 15} 
                }}
                {...field}
                />
                
              <p style={{color:'red'}}>{formState.errors.email?.message}</p>
             <p style={{color:'red'}}>{formState.errors.email?.type === "pattern" && "enter valid email address"}</p>
             </>
                )}  
                />

            </div>
            <div className="container">
            <Controller 
            control={control}
            name='password'
            rules={{ required:"field is required",
            minLength:8 }}
            render={({field, formState}) => (
            <>
            <TextField
             style={{background:"white"}}
                autoComplete="pword"
                // name="password"
                variant="outlined"
                // required
             
                fullWidth
                placeholder="Enter Your password"
                id="Password"
                label="Password"
             
                size='small'
                margin="normal"
                inputProps={{
                  style: {fontSize: 15} 
                }}
                {...field}
                />
             <p style={{color:'red'}}>{formState.errors.password?.message}</p>
             <p style={{color:'red'}}>{formState.errors.password?.type === "minLength" && "minimum characters should be 8"}</p>
             </>
                )}  
                />
            </div>
              <div className="container">
            <Controller 
            control={control}
            rules={{ required:"field is required", minLength:8 }}
            name='password_confirmation'
            render={({field, formState}) => (
              <>
              <TextField
               style={{background:"white"}}
                id="Confirm Password"
                label="Confirm Password"
                variant="outlined"
                placeholder="Enter Your confirm password"
                fullWidth
                // required
                margin="normal"
                // name="Password"
                inputProps={{
                  style: {fontSize: 15} 
                }}
                {...field}
                />
             <p style={{color:'red'}}>{formState.errors.password_confirmation?.message}</p>
             <p style={{color:'red'}}>{formState.errors.password_confirmation?.type === "minLength" && "minimum characters should be 8"}</p>
             </>
                
                )}  
                />
                </div>
            </Grid>
          </Grid>
        </>
      )

}

const OrganisationDetails = () => {
  const { control } = useFormContext()
return (
  <>
  <Grid data-aos="flip-left" data-aos-duration="500" data-aos-offset="0" style={{justifyContent: "center"}} container spacing={2}>
    <Grid item md={6} style={{ display: "flex", flexDirection: "column" }}  xs={12}>
    <div className="container">
    <Controller 
            control={control}
            name='org_name'
            rules={{ required:"field is required",minLength:5 }}
            render={({field, formState}) => (
              <>
      <TextField
         style={{background:"white"}}
        id="Organisation_Name"
        label="Organisation Name"
        variant="outlined"
        placeholder="Organisation Name"
        fullWidth
        // required
        margin="normal"
        inputProps={{
          style: {fontSize: 15} 
        }}
        // name="Organisation Name"
        {...field}
        />
        <p style={{color:'red'}}>{formState.errors.org_name?.message}</p>  
        <p style={{color:'red'}}>{formState.errors.org_name?.type === "minLength" && "minimum characters should be 5"}</p>
        </>
        )}  
        /></div>

      <div className="container">
       <Controller 
        control={control}
        name='org_title'
        rules={{ required:"field is required",
        minLength:5 }}
        render={({field,formState}) => (
          <>
      <TextField
       style={{background:"white"}}
        id="Organisation Title"
        label="Organisation Title"
        variant="outlined"
        placeholder="Organisation Title"
        fullWidth
        // required
        margin="normal"
        inputProps={{
          style: {fontSize: 15} 
        }}
        // name="Organisation Title"
        {...field}
        />
        <p style={{color:'red'}}>{formState.errors.org_title?.message}</p>  
        <p style={{color:'red'}}>{formState.errors.org_title?.type === "minLength" && "minimum characters should be 5"}</p>
        </>
        )}  
        /></div>


      <div className="container">
            <Controller 
            control={control}
            name='org_description'
            rules={{
             }}
            render={({field}) => (  
              <>
      <TextField
       style={{background:"white"}}
        id="Organisation Description"
        label="Organisation Description"
        variant="outlined"
        placeholder="Organisation Description"
        fullWidth
        // required
        margin="normal"
        // name="Organisation Description"
        margin="normal"
        inputProps={{
          style: {fontSize: 15} 
        }}
        {...field}
        />

        </>
        )}  
        /></div>


      <div className="container">
            <Controller 
            control={control}
            name='org_email'
            rules={{ required:"field is required",
            pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }}
            render={({field, formState}) => (     
              <>   
      <TextField
       style={{background:"white"}}
        id="Organisation_Email"
        label="Organisation Email"
        variant="outlined"
        placeholder="Organisation Email"
        fullWidth
        // required
        margin="normal"
        // name="Organisation Email"
        inputProps={{
          style: {fontSize: 15} 
        }}
        {...field}
        />
        <p style={{color:'red'}}>{formState.errors.org_email?.message}</p>  
        <p style={{color:'red'}}>{formState.errors.org_email?.type === "pattern" && "please enter proper email"}</p>
        </>
        )}  
        /></div>


      <div className="container">
                    <Controller 
            control={control}
            name='org_type'
            rules={{ required:'please select' }}
            render={({field,formState}) => (
              <>
             <MUIBasicSelect field={field}/> 
             <p style={{color:'red'}}>{formState.errors.org_type?.message}</p>  
              </>
      // <TextField
      //  style={{background:"white"}}
      //   id="Organisation Type"
      //   label="Organisation Type"
      //   variant="outlined"
      //   placeholder="Organisation Type"
      //   fullWidth
      //   required
      //   margin="normal"
      //   // name="Organisation Type"
      //   inputProps={{
      //     style: {fontSize: 15} 
      //   }}
      //   {...field}
      //   />
        
        )}  
        /></div>


      <div className="container">
                    <Controller 
            control={control}
            rules={{ required:'field is requried',
            }}
            name='address_line_1'
            render={({field,formState}) => (
              <>
      <TextField
       style={{background:"white"}}
        id="address_line_1"
        label="Address line 1"
        variant="outlined"
        placeholder="Address line 1"
        fullWidth
        // required
        margin="normal"
        // name="Address line 1"
        inputProps={{
          style: {fontSize: 15} 
        }}
        {...field}
        />
        <p style={{color:'red'}}>{formState.errors.address_line_1?.message}</p>  
        </>
        )}  
        /></div>


      <div className="container">
                    <Controller 
            control={control}
            name='address_line_2'
            rules={{ required:'field is required' }}
            render={({field, formState}) => (
      <>
      <TextField
       style={{background:"white"}}
        id="address_line_2"
        label="Address Line 2"
        variant="outlined"
        placeholder="Address Line 2"
        fullWidth
        // required
        margin="normal"
        // name="Address Line 2"
        inputProps={{
          style: {fontSize: 15} 
        }}
        {...field}
        />
        <p style={{color:'red'}}>{formState.errors.address_line_2?.message}</p>  
        </>
        )}  
        /></div>
    </Grid>
    </Grid>
  </>
);
}

const ContactDetails = () => {
  const { control } = useFormContext()
  
  return (
    <>
    <Grid data-aos="flip-left" data-aos-duration="500" data-aos-offset="0" style={{justifyContent: "center"}} container spacing={2} >
      <Grid item md={6} style={{ display: "flex", flexDirection: "column" }} xs={12}>



        <div className="container">
        <Controller 
            control={control}
            name='city'
            rules={{ required:'field is required' }}
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="city"
          label="City"
          variant="outlined"
          placeholder="City"
          fullWidth
          required
          margin="normal"
          // name="City"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.city?.message}</p>
          </>
          )}  
          /></div>

        <div className="container">
                      <Controller 
            control={control}
            name='pincode'
            rules={{ required:'field is required', minLength: 6}}
            render={({field,formState}) => (
        <>
        <TextField
         style={{background:"white"}}
          id="pincode"
          label="Pincode"
          variant="outlined"
          placeholder="Pincode"
          fullWidth
          // required
          margin="normal"
          // name="Pincode"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.pincode?.message}</p>
          <p style={{color:'red'}}>{formState.errors.pincode?.type === "pattern" && "please enter proper pincode"}</p>
          </>
          )}  
          /></div>

        <div className="container">
                      <Controller 
            control={control}
            rules={{ required:'field is required' }}
            name='state'
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="state"
          label="State"
          variant="outlined"
          placeholder="State"
          fullWidth
          required
          margin="normal"
          // name="State"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.state?.message}</p>
          </>
          )}  
          /></div>


        <div className="container">
                      <Controller 
            control={control}
            name='country'
            rules={{ required:'field is required' }}
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Country"
          fullWidth
          required
          margin="normal"
          // name="Country"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.country?.message}</p>
          </>
          )}  
          /></div>
        
        <div className="container">
                      <Controller 
            control={control}
            name='contact_no'
            rules={{ required:'field is required' }}
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="Contact Number"
          label="Contact Number"
          variant="outlined"
          placeholder="Contact Number"
          fullWidth
          required
          margin="normal"
          // name="Contact Number"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.contact_no?.message}</p>
          </>
          )}  
          /></div>

        <div className="container">
                      <Controller 
            control={control}
            rules={{ required:'field is required' }}
            name='gst_no'
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="GST Number"
          label="GST Number"
          variant="outlined"
          placeholder="GST Number"
          fullWidth
          required
          margin="normal"
          // name="GST Number"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.gst_no?.message}</p>
          </>
          )}  
          /></div>

        <div className="container">
                      <Controller 
            control={control}
            rules={{ required:'field is required' }}
            name='latitude'
            render={({field, formState}) => (
             <> 
        <TextField
         style={{background:"white"}}
          id="Latitudinal Position"
          label="Latitudinal Position"
          variant="outlined"
          placeholder="find your locations latitude from https://www.latlong.net/"
          fullWidth
          required
          margin="normal"
          // name="Latitudinal Position"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.latitude?.message}</p>
          </>
          )}  
          /></div>


        <div className="container">
                      <Controller 
            control={control}
            name='longitude'
            rules={{ required:'field is required' }}
            render={({field, formState}) => (
              <>
        <TextField
         style={{background:"white"}}
          id="Longitudinal Position"
          label="Longitudinal Position"
          variant="outlined"
          placeholder="find your locations longitude from https://www.latlong.net/"
          fullWidth 
          required
          margin="normal"
          // name="Longitudinal Position"
          inputProps={{
            style: {fontSize: 15} 
          }}
          {...field}
          />
          <p style={{color:'red'}}>{formState.errors.longitude?.message}</p>
          </>
          )}  
          /></div>


      </Grid>
      </Grid>
    </>
  );
}

const Uploads = () => {
  const { control } = useFormContext()
  return (
    <>
    <Grid data-aos="flip-left" data-aos-duration="500" data-aos-offset="0" style={{justifyContent: "center"}} container spacing={2}>
    <Grid item md={6} style={{ display: "flex", flexDirection: "column" }}  xs={12}>

    
      <div className="container">
      <Controller 
            control={control}
            name='corporate_image'
            rules={{ required:'please select image' }}
            render={({field,formState}) => (
       <>       
      <label for="myfile">Corporate IMAGE:</label>
      <input type="file" id="myfile1"  onChange={(e)=>field.onChange(e.target.files[0])} />
      <p style={{color:'red'}}>{formState.errors.corporate_image?.message}</p>
      </>
      )}  
      />
      </div>

      <div className="container">
                    <Controller 
            control={control}
            rules={{required:'please upload aadhaar'}}
            name='corporate_aadhar'
            render={({field,formState}) => (
       <>       
      <label for="myfile">Corporate ADHAAR:</label>
      <input type="file" id="myfile2"  multiple  onChange={(e)=>field.onChange(e.target.files[0])} />
      <p style={{color:'red'}}>{formState.errors.corporate_aadhar?.message}</p>
      </>
      )}  
      />
      </div>

<div className="container">
<Controller 
            control={control}
            name='corporate_pan'
            rules={{required:'please upload Pan card'}}
            render={({field,formState}) => (
      <>        
      <label for="myfile">Corporate PAN:</label>
      <input type="file" id="myfile3" multiple  onChange={(e)=>field.onChange(e.target.files[0])} />
      <p style={{color:'red'}}>{formState.errors.corporate_pan?.message}</p>
      </>
      )}  
      />
      </div>


      
<div className="container">
<Controller 
            control={control}
            name='org_category'
            rules={{required:true}}
            render={({field}) => (
      <TextField
       style={{background:"white"}}
        id="organisation_category"
        label="Organisation category"
        variant="outlined"
        placeholder="Organisation category"
        fullWidth
        margin="normal"
        required
        inputProps={{
          style: {fontSize: 15} 
        }}
        {...field}
        />)}  
        /></div>



      
<div className="container">
<Controller 
            control={control}
            name='holder_type'
            rules={{}}
            render={({field,formState}) => (
              <>
      <TextField
       style={{background:"white"}}
        id="holder_type"
        label="Holder type"
        variant="outlined"
        placeholder="Holder type"
        fullWidth
        margin="normal"
        required
        inputProps={{
          style: {fontSize: 15} 
        }}
          {...field}
          />
          {/* <p style={{color:'red'}}>{formState.errors.organisation_media?.message}</p> */}
          </>
          )}  
          /></div>


      
      <div className="container">
                    <Controller 
            control={control}
            name='organisation_media'
            rules={{required:'please upload your organisation`s image'}}
            render={({field,formState}) => (
       <>       
      <label for="myfile">Organisation Media:</label>
      <input type="file" id="myfile4" multiple onChange={(e)=>field.onChange(e.target.files[0])} />
      <p style={{color:'red'}}>{formState.errors.organisation_media?.message}</p>
      </>
      )}  
      />
      </div>
      </Grid>
      </Grid>
    </>
  )
}



function getStepContent(stepIndex,errors) {

  const useStyles = makeStyles({
    customTextField: {
      "& input::placeholder": {
        fontSize: "20px"
      }
    }
  });
  switch (stepIndex) {
    case 0:
      return <UserDetails />
    case 1:
      return <OrganisationDetails />
    case 2:
      return <ContactDetails />

      case 3:
        return <Uploads />

        case 4:
          return (
            <>
                  <Grid data-aos="flip-left" data-aos-duration="500" data-aos-offset="0" style={{justifyContent: "center"}} container spacing={2}>
                  <Grid item md={6} style={{ display: "flex", flexDirection: "column" }}  xs={12}>
                  {
                      errors==''? <h1>success</h1> : <h1> {errors} </h1>

                  }
                 
                {/* <h1>Thanku </h1>  */}
              </Grid>
              </Grid>
            </>
          );

    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const methods = useForm({
    defaultValues:{
      f_name:'',
      l_name:'',
      email:'',
      password:'',
      password_confirmation:'',
      org_name:'',
      org_title:'',
      org_description:'',
      org_email:'',
      org_type:'',
      address_line_1:'',
      address_line_2:'',
      city:'',
      pincode:'',
      state:'',
      country:'',
      contact_no:'',
      gst_no:'',
      latitude:'',
      longitude:'',
      corporate_image:'',
      corporate_aadhar:'',
      corporate_pan:'',
      org_category:['14','15','16'],
      holder_type:'',
      organisation_media:'',
    
    }
  })

  const [errors,setErrors] = React.useState('')


  // console.log(methods)

  const auth= (formdata)=>{


    axios({
      
      method:'POST',
      url:"http://infilate.com/backend/public/api/auth/corporate-register",
      headers: {
        "Content-Type":"multipart/form-data"
      },
      data:formdata,
    
  }
    // {

    //     f_name:fName,
    //     l_name:lName,
    //     email:email,
    //     password:password,
    //     password_confirmation:passwordConfirmation,
    //     org_name:organisationName,
    //     org_title:organisationTitle,
    //     org_description:organisationDescription,
    //     org_email:organisationEmail,
    //     org_type:organisationType,
    //     address_line_1:addressLine1,
    //     address_line_2:addressLine2,
    //     city:city,
    //     pincode:pincode,
    //     state:state,
    //     country:country,
    //     contact_no:contactNo,
    //     gst_no:gstNo,
    //     latitude:latitude,
    //     longitude:longitude,
    //     corporate_image:corporateImage,
    //     corporate_aadhar:corporateAadhar,
    //     corporate_pan:corporatePAN,
    //     org_category:['14','15','16'],
    //     holder_type:holderType,
    //     organisation_media:orgMedia,
    //   }
      
    )
      .then(function (response) {
        //handle success
        if(response){
          alert('account successfully created')
          console.log(response);
          window.location.href='http://my.infilate.com/Login' 
        }

      })
      .catch(function (err) {
        //handle error
        alert('OOps'+err)
        setErrors('you have not filled the credentails correctly')
        console.log(err.message);
      });


  }

  // console.log(fName,lName,email,password,passwordConfirmation,organisationName,organisationTitle,organisationDescription,
  //   organisationEmail,organisationType,addressLine1,addressLine2,city,pincode,state,country,contactNo,gstNo,latitude,
  //   longitude,corporateImage,corporateAadhar,corporatePAN,orgCategory,holderType,orgMedia,handleInput,handleInput2
  //   )

  // console.log(fName,organisationName)

  const steps = getSteps();

  const handleNext = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep==3){
      // console.log('thankyou')
      const formdata = new FormData()
      formdata.append('f_name',data.f_name)
      formdata.append('l_name',data.l_name)
      formdata.append('email',data.email)
      formdata.append('password',data.password)
      formdata.append('password_confirmation',data.password_confirmation)
      formdata.append('org_name',data.org_name)
      formdata.append('org_title',data.org_title)
      formdata.append('org_description',data.org_description)
      formdata.append('org_email',data.org_email)
      formdata.append('org_type',data.org_type)
      formdata.append('address_line_1',data.address_line_1)
      formdata.append('address_line_2',data.address_line_2)
      formdata.append('city',data.city)
      formdata.append('pincode',data.pincode)
      formdata.append('state',data.state)
      formdata.append('country',data.country)
      formdata.append('contact_no',data.contact_no)
      formdata.append('gst_no',data.gst_no)
      formdata.append('latitude',data.latitude)
      formdata.append('longitude',data.longitude)
      formdata.append('corporate_image',data.corporate_image)
      formdata.append('corporate_aadhar',data.corporate_aadhar)
      formdata.append('corporate_pan',data.corporate_pan)
      formdata.append('org_category',data.org_category)
      formdata.append('holder_type',data.holder_type)
      formdata.append('organisation_media',data.organisation_media)
      auth(formdata)
    }
    console.log(data)
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = (data) => {

    // console.log(data)
  }

  return (
    <div className={classes.root}>
      <Stepper style={{background:"transparent"}} activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
            <form id='form1' onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep,errors)}</form>
            </FormProvider>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "40px 100px" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" type='submit' form='form1'> 
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}