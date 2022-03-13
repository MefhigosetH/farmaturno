// Importamos librerias instaladas
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/teal';
import secondary from '@material-ui/core/colors/pink';

// Importamos componentes locales
import Header from './Header.js'
import Turnos from './Turnos.js'
import Footer from './Footer.js'
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

    const darkTheme = createTheme({
      palette: {
        type: 'dark',
        primary: primary,
        secondary: secondary
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <BrowserRouter>

          <Header title='Farmacias de Turno' />

          <Routes>
              <Route path="/turnos" element={<Turnos />}/>
              <Route path="*" element={<h1>404 Not Found</h1>}/>
          </Routes>

          <Footer />

          <FabButton />

        </BrowserRouter>

      </ThemeProvider>
    );
  }
}
