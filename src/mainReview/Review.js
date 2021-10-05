
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,TextareaAutosize ,FormControlLabel,StepConnector
} from "@material-ui/core";
import { makeStyles, ThemeProvider ,withStyles} from "@material-ui/core/styles"
import CategoryPage from './CategoryPage';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams } from "react-router-dom"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { Assistant } from "@material-ui/icons";
import axios from 'axios'



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
 
  button: {
    marginRight: theme.spacing(1),

    // background:linearGradient(90deg, rgba(35,142,233,1) 0%, rgba(29,117,192,1) 35%, rgba(22,88,144,1) 100%);
  },

  btn:{
    fontWeight: "bold", 
    fontSize: "12px" ,
    backgroundColor:"transparent",
    color:"purple",
    outlined:"none",
    boxShadow:"none",
    '&:focus': {
      outline:'none'
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'purple',
    boxShadow:"none"
    
},
  },

  btn2:{
    fontWeight: "bold", 
    fontSize: "12px" ,
    backgroundColor:"transparent",
    color:"gray",
    outlined:"none",
    boxShadow:"none",
    '&:focus': {
      outline:'none'
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'gray',
    boxShadow:"none"
    
},
  }
}));




 function Review () {

  const {id} = useParams()
  const [checkedState,setCheckedState] = React.useState([])
  const [textVal, setTextVal] = React.useState('')
  const [testValue, settestValue] = React.useState({})




function postReviews(item){
  


if(item.name in testValue){

  const asArray = Object.entries(testValue)
 
  const filtered = asArray.filter(([key, value]) => key===item.name)
 
  const justStrings = Object.fromEntries(filtered)
  
  // console.log(item.name,item.id,parseInt(Object.values(justStrings)[0]),textVal)


  axios('http://infilate.com/backend/public/api/app/reviews/review-add', {
    method: 'POST',
    data:{
    questionsanswers:'sdd',
    applied_on: item.type == 'product' ? 'products' : 'services' ,
    applied_on_id: item.id,
    feedback: textVal,
    user_rating: parseInt(Object.values(justStrings)[0]),
    },
    // cancelToken: new axios.CancelToken(c=>cancel=c)
  }).then((res) => {
      if(res.status==200){
        alert('successfully reviewd')
      }

      else {
        alert('oops something went wrong')
      }
      

    
  }).catch(e=>{
    console.log(e)
  })

}

}


// console.log(textVal)


  // console.log(value)

  function getSteps() {
    return [
      " Select",
      " Leave a Review",
      "  Share on LinkedIn",
       "Finished",
      
    ];
  }
  

  function getStepContent(step) {
  
    switch (step) {
      case 0:
        return (
          <React.Fragment>
         <CategoryPage  next={handleNext} id={id} />
  
          </React.Fragment>
        );
  
      case 1:
        return (
          <React.Fragment>

          <Container maxWidth='lg'>  

          <Grid item container md={12} spacing={2}>  

          {
           checkedState && checkedState.map((item,index) => 
           
             <Grid key={index} item md={6} xs={12}>
                <Paper style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'0px'}}>
               <Grid item style={{display:'flex',alignItems:'center'}}>
                 <img style={{width:'34px',paddingLeft:'9px'}} src={`http://infilate.com/backend/public/images/${item.media}`} />   
               <Typography style={{paddingLeft:'12px'}}> { item.name } </Typography> 
               <Rating
                    // name="simple-controlled"
                    id={index}
                    value={testValue && testValue.item && testValue.item.name}
                    onChange={(e) => 
                      handleChangeRating(e,item)}
                  /> 
                                    
              </Grid>
              <Button id={index} onClick={()=>postReviews(item)} variant="contained" color='primary'>Upload Review</Button>                          
             </Paper> 
             <textarea id={index} style={{height:'168px'}} type="text"  className="form-controlpa2" required="" data-error="Please enter your name" 
             placeholder="Message"
             onChange={(e)=>setTextVal(e.target.value)}
             />

            </Grid>                        
          )
         }
          </Grid>

        </Container>
            
          </React.Fragment>

        );
      case 2:
        return (
          <React.Fragment>
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              name="address1"
            />
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              name="address2"
            />
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              name="country"
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            />
          </React.Fragment>
        );
   
            
      
      default:
        return "unknown step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

 



  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (checkedState,checkedState2) => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    setCheckedState(checkedState.concat(checkedState2))
    // setCheckedState2(checkedState2)
  };

  const handleNext2 = (checkedState,checkedState2) => {
    setActiveStep(activeStep + 1);
    // setCheckedState2(checkedState2)
  };


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };


  let getscrollvalue=''

  // window.addEventListener('scroll', handleScroll)
   
function handleScroll() {
  getscrollvalue="restore"
}

const handleChangeRating = (e,item) => {


  settestValue({
    ...testValue,
    [item.name]:e.target.value
  })

  setTextVal('')

// console.log(e.target.value,item.name)


}

// console.log(testValue)

  return (



     <React.Fragment>
    
      <div onScroll={handleScroll} style={{paddingTop:"180px"}} className={classes.root}>
       <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}  >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}  className="" >
              <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
                
                <Box className="main_big_box-cls">
                  <Box>
                
  

  {activeStep === steps.length ? (
    <Typography variant="h3" align="center">
      Thank You 
    </Typography>
  ) : (
    <React.Fragment>

      <form className="container_hgtt">{getStepContent(activeStep)}</form>
       
        <div  className="main_big_box_cls"> 
        <div className="flx_class" style={{display:"flex",justifyContent:"space-between"}}> 
          <div  className="flx_classaa" > 
      <Button

        className={classes.btn2}
        disabled={activeStep === 0}
        onClick={handleBack}
        px={10}
      >
        <ArrowBackIcon />
      </Button>
      </div>

     <div className="Employer---Job-Post1-Job-Description">  
      <Button
        // className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleNext2}
        className={classes.btn}  
      >
        {activeStep === steps.length - 1 ? "Finish" : <ArrowForwardIcon />}
      </Button>
           {/* <ContainedButtons/> */}

      </div>
      </div>
      </div>
    </React.Fragment>
  )}

 
                      
                
            </Box>


      </Box>
      </div>
      </React.Fragment>

     
  );
};


export default Review