// Importamos librerias instaladas
import React from 'react';
import './Fab.css'
import Fab from '@mui/material/Fab';
import FabIcon from '@mui/icons-material/Coffee';


// Default export
class FabButton extends React.Component {

  componentDidMount() {
  }

  shareSite() {
    console.log('Gracias por invitarnos un cafecito!');
    window.open('https://cafecito.app/mefhigoseth');
  }

  render() {

    return (
      <Fab color="primary"
           aria-label="Invitame un cafecito"
           className="fab"
           onClick={this.shareSite}>
        <FabIcon />
      </Fab>
    );
  }
}

export default FabButton;
