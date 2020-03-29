// Importamos librerias instaladas
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// Importamos componentes locales
import Header from './Header.js'
import Turnos from './Turnos.js'

// Default export
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {partido: 'almirante-brown'};
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Header title='Farmacias de Turno' />

        <Turnos partido={this.state.partido} />
      </React.Fragment>
    );
  }
}
