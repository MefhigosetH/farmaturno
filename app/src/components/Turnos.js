// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';

// Importamos componentes locales
import Firebase from './Firebase';
import FarmaciaCard from './FarmaciaCard';

// Default export
class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, farmacias: [], turnos: [] };
  }


  async componentDidMount() {

    // Calculo la fecha actual para matchearlo luego con los turnos de las farmacias...
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();
    this.cur_date = `${year}${month}${day}`;


    // Inicializo la conexion a Google Firestore...
    var db = Firebase.firestore();

    db.collection("farmacias").where("partido_localidad", "==", "almirante-brown_rafael-calzada")
      .get()
      .then((querySnapshot) => {
        const farmacias = [];
        querySnapshot.forEach((doc) => {
          farmacias.push(doc.data());
        });
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

        <blockquote className={classes.blockquote}><WarningIcon /> IMPORTANTE: Cada turno comienza a las 08:30 Hs del día indicado y termina a las 08:30 del día siguiente.</blockquote>

        <Grid container>
          { farmacias.map((farmacia) =>
              <Grid item key={farmacia.telefono} xs={12} sm={6} md={4} lg={3} xl={2} style={{padding: 16}}>
                <FarmaciaCard farmacia={farmacia} cur_date={this.cur_date} />
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
