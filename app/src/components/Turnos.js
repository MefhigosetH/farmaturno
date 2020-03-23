// Importamos librerias instaladas
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Importamos componentes locales
import FarmaciaCard from './FarmaciaCard';

// Pharma image from https://www.freepik.com/free-photos-vectors/woman

// Default export
export default class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = { farmacias: [] };
  }

  useStyles(){
    return  makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
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
        farmacias.push(value);
      });
    });

    this.setState({ farmacias: farmacias });
  }

  render() {

    //const classes = this.useStyles();
    const farmacias = this.state.farmacias;
    //console.log('json: ', farmacias);

    return (
      <Grid container justify='center' spacing={2}>

        {
          //JSON.stringify(farmacias['rafael-calzada'])
          farmacias.map( farmacia => <FarmaciaCard farmacia={farmacia} key={farmacia.id}/> )
        }

      </Grid>
    );

  }
}
