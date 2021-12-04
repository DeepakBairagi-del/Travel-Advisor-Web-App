import React, {useState} from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar,Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'



function Header({setCoordinates}) {
    const classes = useStyles()
    const [autoComplete, setAutoComplete] = useState(null)
    
    const onLoad =(autoC) => setAutoComplete(autoC)
    const onPlaceChanged =() => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng});
    }
    return (
      <AppBar position="static">
          <Toolbar className={classes.toolbar}>
              <div className={classes.logoAndName}>
                <img src="./logo.png" alt="logo" height = "50px"/>
                <Typography variant="h5" className={classes.tittle}>
                    Travel Advisor
                </Typography>
              </div>
              <Box display="flex">
                <Typography variant="h6" className={classes.tittle}>
                     Explore new places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchicon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </Autocomplete>
              
              </Box>
          </Toolbar>

      </AppBar>
    )
}

export default Header
