// Importamos librerias instaladas
import React from 'react';
import './Footer.css';

// See https://stackoverflow.com/a/51234539
import { Link } from "react-router-dom";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import HomeIcon from '@mui/icons-material/Home';
import TurnIcon from '@mui/icons-material/LocalPharmacy';
import MapIcon from '@mui/icons-material/LocationOn';
import ForumIcon from '@mui/icons-material/Forum';
import InfoIcon from '@mui/icons-material/Info';

// Default export
class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <BottomNavigation
        className="footer"
        showLabels
      >
{/*
        <BottomNavigationAction
            label="Inicio"
            value="Inicio"
            component={Link}
            to="/"
            icon={<HomeIcon />}
        />
*/}
        <BottomNavigationAction
            label="Turnos"
            value="Turnos"
            component={Link}
            to="/"
            icon={<TurnIcon />}
        />
{
        <BottomNavigationAction
            label="Mapa"
            value="Mapa"
            component={Link}
            to="/mapa"
            icon={<MapIcon />}
        />
}
{
        <BottomNavigationAction
        label="Info Util"
        value="InfoUtil"
        component={Link}
        to="/info"
        icon={<InfoIcon />}
    />
}
{
        <BottomNavigationAction
        label="Foro"
        value="Foro"
        component={Link}
        to="/foro"
        icon={<ForumIcon />}
    />
}
      </BottomNavigation>
    );
  }
}

export default Footer;
