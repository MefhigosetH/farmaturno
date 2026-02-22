// Importamos librerias instaladas
import React from 'react';
import './Turnos.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

import CircularProgress from '@mui/material/CircularProgress';

// Importamos componentes locales
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
    // Calculo la fecha actual para matchearlo luego con los turnos de las farmacias...
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = ("0"+ d.getDate()).slice(-2);
    this.cur_date = `${year}${month}${day}`;
    var API_URL = '/api';

    if( process.env.NODE_ENV === 'development' ){
        API_URL = "http://localhost:8888/.netlify/functions";
    }

    const response = await fetch( API_URL + "/farmacias" );
    const items = await response.json();
    var farmacias = items['Items'];
    var turnos = [];

    farmacias.forEach( (farmacia) => {
        farmacia.distance = this.distance(this.state.origin.lat, this.state.origin.lng, farmacia.lat, farmacia.lng);
    });

    // See https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
    farmacias.sort((a, b) => (a.distance > b.distance) ? 1 : -1)

    farmacias.forEach( (farmacia) => {
        if( farmacia.turnos.includes(this.cur_date) ){
          farmacias.splice( farmacias.indexOf(farmacia), 1 );
          turnos.push(farmacia);
        }
    });

    this.setState({ farmacias: farmacias, turnos: turnos, isLoading: false });

  }


  render() {

    return (
      <React.Fragment>

        { this.state.isLoading &&
          <div className="loaderContainer">
            <CircularProgress className="loaderComponent"/>
          </div>
        }

        <h3>Farmacias de turno hoy en Alte. Brown</h3>

        { !this.state.isLoading &&
        <Grid container sx={{ width: '100%' }}>
          { this.state.turnos.map((turno) =>
              <Grid key={turno.place_id} size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }} sx={{ p: 2 }}>
                <FarmaciaCard farmacia={turno} cur_date={this.cur_date} origin={this.state.origin} />
              </Grid>
          )}
        </Grid>
        }

        <Grid container sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ m: 2, px: 2, py: 0.5}}>
              <p>Gracias al <strong>Colegio de Farmaceuticos de Almirante Brown</strong>, este 2026 Farmaturno contar&aacute; nuevamente con los turnos de las siguientes localidades:
                Rafael Calzada, Claypole, Burzaco, San Jos&eacute;, Longchamps y Glew. En breve estar&aacute;n disponibles.</p>
              <p>Cada turno comienza a las 08:30 Hs del día indicado y termina a las 08:30 del día siguiente. Todas las distancias se calculan, por el momento, desde la Estaci&oacute;n de Rafael Calzada.</p>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ m: 2, px: 2, py: 2}}>
              <a 
                href='https://cafecito.app/mefhigoseth' 
                rel='noreferrer' 
                target='_blank'>
                  <img 
                    srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' 
                    src='https://cdn.cafecito.app/imgs/buttons/button_1.png' 
                    alt='Invitame un café en cafecito.app' />
              </a>
              <p>Si ésta página te fué de utilidad, considerá invitarnos un cafecito. Tu colaboración nos ayuda a continuar brindando este servicio de forma gratuita y libre de anuncios molestos.</p>
            </Paper>
          </Grid>

        </Grid>

        <h3>Todas las farmacias en Alte. Brown</h3>

        { !this.state.isLoading &&
        <Grid container sx={{ width: '100%' }}>
          { this.state.farmacias.map((farmacia) =>
              <Grid key={farmacia.place_id} size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }} sx={{ p: 2 }}>
                <FarmaciaCard farmacia={farmacia} cur_date={this.cur_date} origin={this.state.origin} />
              </Grid>
          )}
        </Grid>
        }

        <Box m={8}></Box>

      </React.Fragment>
    );

  }

}

export default Turnos;
