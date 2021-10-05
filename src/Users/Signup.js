import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from "axios"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:"#0067b8",
    '&:hover': {
        background: "#015aa0",
    },
  },
}));

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const classes = useStyles();

  const auth= ()=>{


    Axios.post("http://infilate.com/backend/public/api/auth/register",{

        f_name:firstName,
        l_name:lastName,
        email:email,
        password:password,
        password_confirmation:confirmPassword,
      }
      
    )
      .then(function (response) {
        //handle success
        console.log(response);
        window.location.href='http://my.infilate.com/Login'
      })
      .catch(function (err) {
        //handle error
        console.log(err+' user already registered');
      });


  }

  const userSignUP=(e)=>{
    e.preventDefault();
    auth()

  }




  // const userSignUP=(e)=>{
  //   e.preventDefault();
  //   ValidateEmailAndPassword(email,password) ? auth() : console.log("OOps something went wrong")

  // }

  function ValidateEmailAndPassword(email,password){
    const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordformat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(email.match(emailformat)&&password.match(passwordformat)){
       //  console.log(email,password)
        if(confirmPassword===password){
            console.log('login page')
            return true
        }
        else {
            console.log('passwords not matched')
            return false
        }
        
    }
    else {
        console.log("email or password is in incorrect format!!...")
        return false
    }
   }

  return (
    <Grid container xs={12} style={{paddingTop:"120px"}}>

        <Container data-aos="fade-right" data-aos-duration="500" data-aos-offset="0" maxWidth="sm">
        <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={userSignUP} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e)=>setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="confirm password"
                type="C_password"
                id="C_password"
                autoComplete="current-password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" style={{color:"#0067b8"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>


        </Container>


      <Grid data-aos="fade-left" data-aos-duration="500" data-aos-offset="0" item xs={12}>
        <img src="https://th.bing.com/th/id/R.51ae05a5f02b433235902fa22c6dd5bd?rik=JxyLilE4Vl1dCA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcA%2fBG4%2fRcABG4eei.png&ehk=GI3zuXaBDZaLbzy9GdnXoGx6qelxCX5%2bewC6PCGQI%2fc%3d&risl=&pid=ImgRaw&r=0" alt=""/>
      </Grid>
    </Grid>
  );
}