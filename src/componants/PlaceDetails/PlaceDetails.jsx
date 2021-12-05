import React from 'react'
import {Box, Typography, Button, Card ,CardMedia, CardContent, CardActions, Chip, ClickAwayListener} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LanguageIcon from '@material-ui/icons/Language'
import PhoneIcon from '@material-ui/icons/Phone'
import FlightIcon from '@material-ui/icons/Flight'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
function PlaceDetails({place, selected, refProp}) {
    const classes = useStyles();
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block:"start" })
    
    return (
       <Card elevation={6}>
           <CardMedia 
                style={{height: 350}}
                image= {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title= {place.name}
            />
            <CardContent>
                <Typography gutterBottom  variant="h5">
                    {place.name}

                </Typography>
                <Box display="flex" justifyContent="space-between">
                     <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1"> Out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtittle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1"> {place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtittle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1"> {place.ranking ? place.ranking : 'Not provided by Restaurant'}</Typography>
                </Box>
                {place?.awards?.map((award)=>(
                    <Box my={1} display="flex " justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>    
                ))}
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}
                {place?.address && (
                    <Typography guttorBottom variant="subtitle2" color="textSecondary" className={classes.subtittle}>
                        <LocationOnIcon /> {place.address }
                    </Typography>
                )}
                 {place?.phone && (
                    <Typography guttorBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone }
                    </Typography>

                )}
                <CardActions>
                    <Button startIcon={<FlightIcon/>} size="small" variant="contained" color="primary"onClick={()=> window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button startIcon={<LanguageIcon/>} size="small" variant="outlined" color="primary"onClick={()=> window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>    
        </Card>
    )
}

export default PlaceDetails
