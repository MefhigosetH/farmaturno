// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';

// Importamos componentes locales
import FarmaciaCard from './FarmaciaCard';

// Default export
class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, farmacias: [], turnos: [] };
  }


  async componentDidMount() {

    var turnos = [];

    // Traigo la lista de turnos
    try {

      // getMonth() devuelve 0 < int < 11
      const mes = new Date().getMonth() + 1;

      const response = await fetch('/json/turnos-2020-' + mes + '.json');
      const json = await response.json();

      // getDate() devuelve 1 < int < 31
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

    const { classes } = this.props;
    const farmacias = this.state.farmacias;

    if(this.state.isLoading) {
      return ( <React.Fragment><CircularProgress /></React.Fragment> );
    }

    return (
      <React.Fragment>

        <blockquote className={classes.blockquote}><WarningIcon /> IMPORTANTE: Cada turno comienza a las 08:30 Hs del día indicado y termina a las 08:30 del día siguiente.</blockquote>

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



const styles = theme => ({
  blockquote: {
    background: theme.palette.background.paper,
    borderLeft: '5px solid #ffe564',
    marginTop: '24px',
    padding: '10px 24px'
  }
});



export default withStyles(styles)(Turnos);
