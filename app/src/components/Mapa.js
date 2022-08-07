// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

// Default export
class Mapa extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      farmacias: [],
      turnos: [],
      origin: {'lat': -34.7989032, 'lng': -58.3611676}
    };
  }



  async componentDidMount() {
  }


  render() {

    const { classes } = this.props;
    const farmacias = this.state.farmacias;

    if(this.state.isLoading) {
      return ( <React.Fragment><CircularProgress /></React.Fragment> );
    }

    return (
      <React.Fragment>
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



export default withStyles(styles)(Mapa);
