// Importamos librerias instaladas
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';


// Default export
class FabButton extends React.Component {

  componentDidMount() {
  }

  shareSite() {
    console.log('Compartiendo pagina por WhatsApp!');
    window.open('https://wa.me/?text=Farmacias%20de%20turno%20en%20Almirante%20Brown%20https://farmaturno.com.ar/?utm_source=whatsapp');
  }

  render() {

    const { classes } = this.props;

    return (
      <Fab color="primary"
           aria-label="compartir"
           className={classes.fab}
           onClick={this.shareSite}>
        <ShareIcon />
      </Fab>
    );
  }
}



const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
});



export default withStyles(styles)(FabButton);
