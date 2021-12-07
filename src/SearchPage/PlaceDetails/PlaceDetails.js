import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { Divider } from '@mui/material';
import useStyles from './Styles.js';

const PlaceDetails = ({ place, selected, refProp, setCoordinates, index}) => {

  const classes = useStyles();
  const get = () => {
    return refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

if(selected === true) {
  get()
}

  const handleClick = () => {
    setCoordinates({lat: Number(place?.latitude), lng: Number(place?.longitude)})
    // console.log(place.latitude)
  }



  return (
        <>
          <Card elevation={6} ref={refProp}>
            <CardMedia
              className={classes.card}
              // style={{height:350}}
              style={{paddingTop:'200px'}}
              image={place?.banner_media ? `http://infilate.com/backend/public/images/${place?.banner_media}` : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
              title={place?.name} />

              <CardContent>
                <Typography onClick={() => handleClick()}  gutterBottom variant='h5' className={classes.hover}> { place?.name } </Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                {/* <Rating name="read-only" value={Number(place.rating)} readOnly /> */}
                <Typography variant="subtitle1">Personal Information</Typography>

                {/* <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography> */}
                </Box>
                <hr />
                <Box display='flex ' justifyContent='space-between' mt={1}>
                <Typography variant="subtitle2" color="textSecondary">Name</Typography>
                <Typography gutterbottom variant="subtitle2" color="textSecondary"> { place?.user_data } </Typography>
                </Box>

                <Box display='flex' justifyContent='space-between'>
                <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                <Typography gutterbottom variant="subtitle2" color="textSecondary">{place?.email}</Typography>
                </Box>

                <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                   
                   <Typography variant="subtitle2" color="textSecondary"> Corporate Information </Typography> 
                </Box>
                 <hr />
                 <Box my={1} display='flex' justifyContent='space-between'  flexDirection='column'>
                   
                   <Typography variant="subtitle2" color="textSecondary" className={classes.subtitle}> <Typography> Type: </Typography>
                   <Typography> { place?.organisation_type?.organisation_type } </Typography> </Typography>
                   <Typography variant="subtitle2" color="textSecondary" className={classes.subtitle}> <Typography> Title: </Typography>
                   <Typography> { place?.title } </Typography> </Typography>
                   <Typography variant  ="subtitle2" color="textSecondary" className={classes.subtitle}> <Typography> Description: </Typography>
                   <Typography> { place?.description }
                   </Typography> </Typography>
                </Box>   

                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                  <LocationOnIcon />{place?.address_line_1}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                  <LocationOnIcon />{place?.address_line_2}
                </Typography>
                {/* {place?.awards?.map((award)=>
                <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                   <img src={award.images.small} alt={award.display_name} />
                   <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography> 
                </Box>
                )}
                {place?.cuisine?.map(({name})=>
                <Chip key={name} size="small" label={name} className={classes.chip} />
                )}
                {place.address && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                  <LocationOnIcon />{place.address}
                </Typography>
                )} */}
                {/* {place.phone && (
                <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                  <PhoneIcon /> {place.phone}
                </Typography>
                )} */}
              </CardContent>
              {/* <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                  Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                  Website
                </Button>
              </CardActions> */}
               </Card>
        </>
  );
};

export default React.memo(PlaceDetails);