// Importamos librerias instaladas
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { teal, pink } from '@mui/material/colors';

// Importamos componentes locales
import Header from './Header.js'
import Footer from './Footer.js'
import FabButton from './Fab.js'

//const renderLoader = () => <div><p>Loading</p><;
const Turnos = lazy(() => import('./Turnos'));
const Mapa = lazy(() => import('./Mapa'));
const Comments = lazy(() => import('./Comments'));

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
        mode: 'dark',
        primary: teal,
        secondary: pink
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
                  <Route path="/foro" element={<Comments />}/>
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
