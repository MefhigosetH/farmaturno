// Importamos librerias instaladas
import React from 'react';
import './Fab.css'
import Fab from '@mui/material/Fab';
import ShareIcon from '@mui/icons-material/Share';


// Default export
class FabButton extends React.Component {

  componentDidMount() {
  }

  shareSite() {
    console.log('Compartiendo pagina por WhatsApp!');
    window.open('https://wa.me/?text=Farmacias%20de%20turno%20en%20Almirante%20Brown%20https://farmaturno.com.ar/?utm_source=whatsapp');
  }

  render() {

    return (
      <Fab color="primary"
           aria-label="compartir"
           className="fab"
           onClick={this.shareSite}>
        <ShareIcon />
      </Fab>
    );
  }
}

export default FabButton;
