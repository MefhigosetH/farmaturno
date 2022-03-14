// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

// Importamos componentes locales
import { db, auth } from './Firebase';
import FarmaciaCard from './FarmaciaCard';

// Default export
class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.requestLocation = this.requestLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);

    this.state = {
      isLoading: true,
      farmacias: [],
      turnos: [],
      origin: {'lat': -34.7989032, 'lng': -58.3611676}
    };
  }



  requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }



  setLocation(position) {
    console.log(position);
    //this.setState({origin: {'lat': position.coords.latitude, 'lng': position.coords.longitude}});
  }



  // See https://stackoverflow.com/a/34486089
  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }



  async componentDidMount() {

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User: ", user.uid);
      } else {
        // User is signed out
      }
    });

    // Calculo la fecha actual para matchearlo luego con los turnos de las farmacias...
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();
    this.cur_date = `${year}${month}${day}`;

    await auth.signInAnonymously();

    db.collection("farmaciasv2").get()
        .then((querySnapshot) => {

            const farmacias = [];
            querySnapshot.forEach((doc) => {

                var farmacia = doc.data();
                farmacia.distance = this.distance(this.state.origin.lat, this.state.origin.lng, farmacia.lat, farmacia.lng)
                farmacias.push(farmacia);
            });

        // See https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
        farmacias.sort((a, b) => (a.distance > b.distance) ? 1 : -1)

        this.setState({ farmacias: farmacias, isLoading: false });
    });

  }


  render() {

    const { classes } = this.props;
    const farmacias = this.state.farmacias;

    if(this.state.isLoading) {
      return ( <React.Fragment><CircularProgress /></React.Fragment> );
    }

    return (
      <React.Fragment>
{/*
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <Button
              onClick={this.requestLocation}
              size="medium"
              color="primary"
              variant="contained"
              fullWidth={true}
              startIcon={<GpsFixedIcon />} >
              Usar mi ubicación actual
            </Button>
          </Grid>

          <Grid item sm={8}>
            <Paper><WarningIcon /> &nbsp;NOTA: Todas las distancias se están calculando desde la Estación de Rafael Calzada.</Paper>
          </Grid>

        </Grid>
*/}
        <blockquote className={classes.blockquote}><WarningIcon /> &nbsp;IMPORTANTE: Cada turno comienza a las 08:30 Hs del día indicado y termina a las 08:30 del día siguiente.</blockquote>

        <Grid container>
          { farmacias.map((farmacia) =>
              <Grid item key={farmacia.place_id} xs={12} sm={6} md={4} lg={3} xl={2} style={{padding: 16}}>
                <FarmaciaCard farmacia={farmacia} cur_date={this.cur_date} origin={this.state.origin} />
              </Grid>
          )}
        </Grid>

        <Box m={8}></Box>

      </React.Fragment>
    );

  }

}



const styles = theme => ({
  blockquote: {
    background: theme.palette.background.paper,
    borderLeft: '5px solid #ffe564',
    marginTop: '12px',
    padding: '10px 24px'
  }
});



export default withStyles(styles)(Turnos);
