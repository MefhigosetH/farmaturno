// Importamos librerias instaladas
import React from 'react';

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
        <Header title='Farmacias de Turno' />

        <Turnos partido={this.state.partido} />
      </React.Fragment>
    );
  }
}
