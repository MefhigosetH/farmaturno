// Importamos librerias instaladas
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Default export
class InfoUtil extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      hospitales: [
        {
          nombre: 'Htal. R. Oñativia',
          direccion: 'Ramón Carrillo 1339, R. Calzada',
          telefono: '4219-5040'
        },
        {
          nombre: 'Htal. Mater Inf. S.F. Solano',
          direccion: 'Av. 844 Nro.2150, San Francisco Solano',
          telefono: '4212-6545'
        },
        {
          nombre: 'Htal. Gandulfo',
          direccion: 'Balcarce 351, Lomas de Zamora',
          telefono: '4243-3493'
        },
        {
          nombre: 'Htal. Pedro Fiorito',
          direccion: 'Belgrano 851, Avellaneda',
          telefono: '4201-5846'
        },
        {
          nombre: 'Htal. Pte. Perón',
          direccion: 'A. France 773, Avellaneda',
          telefono: '4204-2081'
        },
        {
          nombre: 'Htal. Narciso López',
          direccion: 'O\'Higgins 1333, Lanús Este',
          telefono: '4241-5186'
        },
        {
          nombre: 'Centro Oncológico Lanús',
          direccion: 'Pringles 1247, Lanús Este',
          telefono: '4241-2968'
        },
        {
          nombre: 'Htal. A. Melo',
          direccion: 'Lujan 3050, R. Escalada',
          telefono: '4289-4485'
        },
        {
          nombre: 'Htal. del Quemado',
          direccion: 'Av. P. Goyena 389, Cap. Fed.',
          telefono: '4923-3022'
        },
        {
          nombre: 'Htal. Mater Inf. Sarda',
          direccion: 'E. De Luca 2151, Cap. Fed.',
          telefono: '4943-4250'
        },
        {
          nombre: 'Htal. Santa Lucía',
          direccion: 'San Juan 2021, Cap. Fed.',
          telefono: '4941-5555'
        },
        {
          nombre: 'LALCEC',
          direccion: 'Ituzaingó 1829, Lanús Este',
          telefono: '4241-2561'
        },
        {
          nombre: 'Htal. Niños (ex. Casa Cuna)',
          direccion: 'Av. Montes de Oca 40, Cap. Fed.',
          telefono: '4300-2115'
        },
        {
          nombre: 'Htal. Niños Dr. R. Gutiérrez',
          direccion: 'Gallao 1330, Cap. Fed.',
          telefono: '4962-9280'
        },
        {
          nombre: 'Htal. Intoxicados Dr. R. Gutiérrez',
          direccion: 'Gallao 1330, Cap. Fed.',
          telefono: '4962-6666/2247'
        },
        {
          nombre: 'Pediatría Dr. Garrahan',
          direccion: 'Combate de los Pozos 1661, Cap. Fed.',
          telefono: '4122-6000'
        },
        {
          nombre: 'Htal. Posadas',
          direccion: 'Dr. Illia y Marconi, Cap. Fed.',
          telefono: '4469-9300'
        },
        {
          nombre: 'Htal. Muñiz',
          direccion: 'Uspallata 2272, Cap. Fed.',
          telefono: '4304-2180'
        },
        {
          nombre: 'Centro Nac. Intoxicados',
          direccion: '-',
          telefono: '0800-333-0160'
        }
      ]
    };
  }

  render() {

    return (
      <React.Fragment>
        <div style={{ padding: '1rem', paddingBottom: '5rem', minHeight: '70vh' }}>

          <h2>Hospitales de la Zona</h2>

          <TableContainer component={Paper}>
            <Table aria-label="tabla de hospitales">
              <TableHead>
                <TableRow style={{ backgroundColor: '#009688' }}>
                  <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Hospital</TableCell>
                  <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Dirección</TableCell>
                  <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Teléfono</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.hospitales.map((hospital, index) => (
                  <TableRow key={index}>
                    <TableCell>{hospital.nombre}</TableCell>
                    <TableCell>{hospital.direccion}</TableCell>
                    <TableCell>{hospital.telefono}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </React.Fragment>
    );

  }

}

export default InfoUtil;
