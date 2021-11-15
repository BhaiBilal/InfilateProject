import React from 'react'
import { Grid,Card,CardMedia,CardContent,CardHeader,CardActions,Avatar,Typography,Divider,Chip,Box,Container } from '@material-ui/core';
import { makeStyles,useTheme, } from '@material-ui/core/styles';
import BackgroundAsImage from './page-title-bg-1.jpg';
import aboutimg from './about-img-3.jpg';
import sampleimg from './team-2.jpg'
import './aboutus.css'
import axios from 'axios' 

const useStyles = makeStyles((theme) => ({
    containerclass: {
        backgroundImage:`url(${BackgroundAsImage})`,
        backgroundSize:'cover',
        paddingTop:'100px',
        paddingBottom:'140px',
        backgroundPosition:'center'
    }
  })); 



function Aboutus() {

    const [data,setData] = React.useState([])
    let content = '' 

    React.useEffect(() => {
        let cancel
        axios({
          method: 'POST',
          url: 'http://infilate.com/backend/public/api/app/footer/about-us',
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setData(res.data.Data)
         
        }).catch(e => {
          if (axios.isCancel(e)) return
        })
        return () => cancel()
      }, [])


      data && data.banner && data.banner.map((v,i) => console.log(v))


    const classes = useStyles()
    return (
        <div style={{paddingTop:'160px',paddingBottom:'60px'}}>
            <Box>
                <Container maxWidth className="page-title-area" 
                style={{display:'flex',justifyContent:'center',backgroundImage:`url(http://infilate.com/backend/public${data && data.banner && data.banner[0].image})`}}>
                    <div classname="_container">
                        <p style={{color:'#30296c',fontSize:'55px'}}>About</p>
                        <Grid item style={{display:'flex',justifyContent:'center'}}>
                        <p style={{color:'#30296c',fontSize:'18px'}}>Home / </p>
                        <p style={{color:'white',fontSize:'18px',color:'#f68820'}}>&nbsp;About</p>
                            </Grid>
                        

                    </div>
                </Container>


                {/*section 1  */}
                <Box pt={10}>

                {data &&  data.section_1 && data.section_1.map((v,i) => 
                <Container key={i} style={{display:'flex',justifyContent:'space-around'}} maxWidth='lg'>
                <Grid item md={4}>
                    <div className="about-img-three before-style">
                        
                        <img src={`http://infilate.com/backend/public${v.image_1}`} alt="image" />
                     
                        </div>

                </Grid>
                

                <Grid item md={6}>
                    <p style={{color:'#f68820',fontSize:'16px',display:'block',marginBottom:'5px',fontWeight:'700'}}>{v.text_1}</p>
                    <div className='changeToDefault2'>
                    <div dangerouslySetInnerHTML={{__html:v.description_1}} />
                    </div>
                </Grid>
            </Container>

                )}      
                </Box>




                {/* section 2 */}

                    <Box pt={10}>
                        <Container style={{display:'flex',justifyContent:'center'}} maxWidth='lg'>
                            <Grid item>
                            <p style={{color:'#f68820'}}>{data && data.section_2 && data.section_2[0].title}</p>

                            </Grid>
                        </Container>

                        <Container style={{display:'flex',justifyContent:'center'}} maxWidth='lg'>
                            <Grid item>
                            <p style={{fontSize:'48px',color:'#30296c',fontWeight:'700'}}>
                            {data && data.section_2 && data.section_2[0].heading}</p>
                            <br/>
                            </Grid>
                        </Container>

                        
                        <Container style={{display:'flex',justifyContent:'center'}} maxWidth='lg'>

                            <Grid style={{paddingBottom:'37px'}} container spacing={3}>
                             
                             {data && data.section_2 && data.section_2.slice(1,4).map((v,i) => 
                             <Grid key={i} item>
                             <img style={{height:'358px'}} 
                             src={`http://infilate.com/backend/public${v.image}`}
                             alt='img' />
                             <br/>
                             <p style={{fontSize:'24px'}}> {v.title_1} </p>
                             <p style={{fontSize:'15px',}}> {v.title_2} </p>       
                             </Grid> 
                             )
                            }   
                           </Grid>

                        </Container>
                    </Box>
                

            </Box>


        </div>
    )
}

export default Aboutus
