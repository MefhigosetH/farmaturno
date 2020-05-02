// Importamos librerias instaladas
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/teal';
import secondary from '@material-ui/core/colors/pink';

// Importamos componentes locales
import Header from './Header.js'
import Turnos from './Turnos.js'
import FabButton from './Fab.js'

// Default export
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {partido: 'almirante-brown'};
  }

  componentDidMount() {
  }

  render() {

    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: primary,
        secondary: secondary
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header title='Farmacias de Turno' />

        <Turnos partido={this.state.partido} />

        <FabButton />

      </ThemeProvider>
    );
  }
}
