// Importamos librerias instaladas
import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// Importamos componentes locales
import FarmaciaCard from './FarmaciaCard';

// Pharma image from https://www.freepik.com/free-photos-vectors/woman

// Default export
export default class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { farmacias: [] };
  }


  async componentDidMount() {
    // Traigo la lista de farmacias
    const response = await fetch('/json/farmacias-' + this.props.partido + '.json');
    const json = await response.json();

    // Convierto el objeto Json a Array para poder iterar con map()
    var farmacias = [];
    Object.keys(json).forEach(function(key) {

      //console.log('key :', json[key][0]);
      json[key].forEach(function(value) {
        //console.log('value : ', value);
        value.localidad = key;
        farmacias.push(value);
      });

    });

    this.setState({ farmacias: farmacias });
  }


  render() {

    //const style = this.useStyles();
    const farmacias = this.state.farmacias;

    if(!farmacias.length) {
      return ( <CircularProgress /> );
    }

    return (
      <React.Fragment>

        <Grid container>

          { farmacias.map(
            farmacia => <Grid item key={farmacia.id} xs={12} sm={6} md={4} lg={3} xl={2} style={{padding: 16}}>
              <FarmaciaCard farmacia={farmacia} />
            </Grid>
          )}

        </Grid>
      </React.Fragment>
    );

  }

}
