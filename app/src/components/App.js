// Importamos librerias instaladas
import React from 'react';

// Importacion de componentes locales
import Header from './Header.js'
import Turnos from './Turnos.js'

// Default export
export default function App() {
  return (
    <React.Fragment>
      <Header title='Farmacias de Turno' />

      <Turnos />
    </React.Fragment>
  );
}
