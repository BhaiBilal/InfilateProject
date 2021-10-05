import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import RoomIcon from '@material-ui/icons/Room';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
// import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';
// import Rating from '@material-ui/lab/Rating';





const useStyles = makeStyles((theme) => ({
    box: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        paddingTop: "100px"
    },

    box2: {
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        width: "60%",
    },

    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        height: 150,
        justifyContent: "space-around",
        align: "center",
        display: "flex",
    },
    padding: {
        padding: 5,
        justifyContent: 'space-around',
        fontWeight: 'bold',
    },
    morefilters: {
        padding: 5,
        fontWeight: "bold",
    },

    rating: {
        fontSize: "17px"
    },
    containerclass:{
        background: "#f3f3f3",
        borderRadius: "25px",
        marginTop:"15px",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: 100,
        display: "flex",
        flexDirection: "column",
        paddingTop:"11px"
    }

}
))

function CardItem2(props) {
    const classes = useStyles();

    return (
            <>
          {/* <Card elevation={6} ref={refProp}>
            <CardMedia
              style={{height:350}}
              image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
              title={place.name} />

              <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                <Rating name="read-only" value={Number(place.rating)} readOnly />
                <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterbottom variant="subtitle1">{place.price_level}</Typography>
                </Box>

                <Box display='flex' justifyContent='space-between'>
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterbottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award)=>
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
                )}
                {place.phone && (
                <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                  <PhoneIcon /> {place.phone}
                </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                  Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                  Website
                </Button>
              </CardActions>
               </Card> */}
                </>
    )
}

export default CardItem2
