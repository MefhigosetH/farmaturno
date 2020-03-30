// Importamos librerias instaladas
import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// Importamos componentes locales
import FarmaciaCard from './FarmaciaCard';

// Default export
export default class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, farmacias: [], turnos: [] };
  }


  async componentDidMount() {

    var turnos = [];

    // Traigo la lista de turnos
    try {

      const response = await fetch('/json/turnos-202003.json');
      const json = await response.json();

      const hoy = new Date().getDate();
      turnos = json[hoy];
      this.setState({ turnos: turnos, isLoading: false });

    } catch(error) {
      console.log(error);
    }

    var farmacias = [];

    // Traigo la lista de farmacias
    try {

      const response = await fetch('/json/farmacias-' + this.props.partido + '.json');
      const json = await response.json();

      // Convierto el objeto Json a Array para poder iterar con map()
      Object.keys(json).forEach(function(key) {

        //console.log('key :', json[key][0]);
        json[key].forEach(function(value) {
          value.localidad = key;
          value.turno = turnos.includes(value.id);
          value.turno ? farmacias.unshift(value) : farmacias.push(value);
        });

      });

      this.setState({ farmacias: farmacias, isLoading: false });

    } catch(error) {
      console.log(error);
    }

  }


  render() {

    //const style = this.useStyles();
    const farmacias = this.state.farmacias;

    if(this.state.isLoading) {
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
