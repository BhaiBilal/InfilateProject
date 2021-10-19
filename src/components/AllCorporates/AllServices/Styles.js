import { makeStyles } from '@mui/styles';



export default makeStyles((theme) => ({

  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  button1: {
    marginTop:'15px',
    marginRight:'5px', 
    width:'50%',
    backgroundColor:'transparent',
    color:'#009cb6',
    boxShadow:'none',
    border:'1px solid rgba(0, 156, 156, 0.5)',

    '&:hover':{
      background:'rgb(0 156 156 / 4%)',
      boxShadow:'none'

    }
  },

  button2: {
    marginTop:'15px',
    marginRight:'5px', 
    width:'50%',
    backgroundColor:'transparent',
    color:'#009cb6',
    boxShadow:'none',
    border:'none',

    '&:hover':{
      background:'rgb(0 156 156 / 4%)',
      boxShadow:'none'

    }
  },

  btn:{
    marginLeft:'5px',
    height:'100px',
    position:'sticky',
    top:'100px',


  },

  closeicon:{
    padding:'5px',
    '& .MuiIconButton-root':{
      padding:'0px',
    },

  },

}));