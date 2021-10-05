import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Button, } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({

    main: {
      justifyContent: 'center',
    },
    
    paperStyle: {
        padding: 20,
        height: 'auto',
        width: 400,
        margin: "20px auto",
        borderRadius: '20px'
    },
    
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginTop: 30,
      color: 'black',
    },

    margin: {
      margin: theme.spacing(2),
      
    },

    form: {
      marginTop: 30,
    },

    button: {
      backgroundColor: '#4d4f52',
      borderRadius: 10,
    },

    paper: {
      boxShadow: 'none'
    },

    link: {
      marginLeft: '100px',
      marginBottom: '10px',                     
    },

    link1: {
      marginLeft: '35px', 
    }
  }));

    function Login () {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <Grid className='cards__container' style={{backgroundColor: "#EAEAEA"}}>
            <Paper className={classes.paperStyle} elevation={5} >
              <Grid className={classes.main}>
                <Grid align='center'>
                    <Avatar className={classes.large}></Avatar>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12} style={{margin: '55px', }}>
                      <Paper className={classes.paper} >
                        <Grid align='center' className= {classes.form}>
                          <TextField className={classes.margin} id="input-with-icon-user" placeholder="Type username" label="Username or Email" type='Username or Email' InputProps={{startAdornment: (<InputAdornment position="start"> <AccountCircle /></InputAdornment>),}}/>
                          <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input id="standard-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')} endAdornment={
                            <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton></InputAdornment>}/>
                          </FormControl>
                        </Grid>
                        <Typography className={classes.link}>
                            <Link href="">
                               <b>Forgot Password?</b>
                            </Link>
                        </Typography>
                        <Grid  align='center'>
                          <Button className={classes.button} variant="contained" fullWidth><b style={{color: "white"}}>Login</b></Button>
                        </Grid><br/><br/><hr/><br/>
                        <Typography className={classes.link1}>
                            <Link href="/">
                               <b>Create a new account</b>
                            </Link>
                        </Typography>
                      </Paper>
                  </Grid>
                </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login
