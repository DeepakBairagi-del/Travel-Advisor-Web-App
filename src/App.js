//import { StylesContext } from '@material-ui/styles';
import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core'


import Header from './componants/Header/Header';
import List from './componants/List/List'
import Map from './componants/Map/Map'
import { getPlaceData, getWeatherData } from './api/index.js';


function App() {
    const [places,setPlaces] = useState([]);
    const [weatherData,setWeatherData] = useState([]);
    const [filteredPlaces,setFilteredPlaces] = useState([])
    const[coordinates,setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading]= useState(false);
    const [type,setType] =useState('restaurants');
    const [rating,setRating]=useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    },[])

    useEffect(() => {
        
        const filteredPlaces= places?.filter((place) => Number(place.rating) > rating);
        console.log(filteredPlaces);
        setFilteredPlaces(filteredPlaces);
    },[rating])

    useEffect(() => {
       if (bounds.sw && bounds.ne){
        setIsLoading(true);  

        getWeatherData(coordinates.lat, coordinates.lng)
            .then((data) => {
               
                setWeatherData(data);
            });
        getPlaceData(type, bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data.filter((place)=> place.name && place.num_reviews > 0 ));
                setPlaces(data);
                setFilteredPlaces([]);
                setIsLoading(false);
                setRating('');
                console.log(places);
            });
        }
       },[type, bounds]);
    
    return (
        <>
        <CssBaseline />

         <Header 
            setCoordinates={setCoordinates}
         />
         <Grid container spacing={3} style={{width: '100%',}}>
            <Grid item xs={12} md={4} >
                 <List
                    places={filteredPlaces.length!= 0 ? filteredPlaces : places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    rating={rating}
                    setType={setType}
                    setRating={setRating}
                 />
             </Grid>
             <Grid item xs={12} md={8} >
                 <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    setChildClicked={setChildClicked}
                    weatherData={weatherData}
                 />
             </Grid>
         </Grid>
        </>
    )
}

export default App
