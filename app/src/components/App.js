// Importamos librerias instaladas
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import primary from '@material-ui/core/colors/teal';
import secondary from '@material-ui/core/colors/pink';

// Importamos componentes locales
import Header from './Header.js'
import Footer from './Footer.js'
import FabButton from './Fab.js'

//const renderLoader = () => <div><p>Loading</p><;
const Turnos = lazy(() => import('./Turnos'));
const Mapa = lazy(() => import('./Mapa'));

// Default export
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {partido: 'almirante-brown'};

    this.loaderStyle = {
      width: '100%',
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
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

          <Suspense fallback={<div style={this.loaderStyle}><CircularProgress /></div>}>
              <Routes>
                  <Route path="/" element={<Turnos />}/>
                  <Route path="/mapa" element={<Mapa />}/>
                  <Route path="*" element={<h1>404 Not Found</h1>}/>
              </Routes>
          </Suspense>

          <Footer />

          <FabButton />

        </BrowserRouter>

      </ThemeProvider>
    );
  }
}
