// Importamos librerias instaladas
import React from 'react'

// See https://stackoverflow.com/a/51234539
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import HomeIcon from '@material-ui/icons/Home';
import TurnIcon from '@material-ui/icons/LocalPharmacy';
//import MapIcon from '@material-ui/icons/LocationOn';

// Default export
class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { classes } = this.props;

    return (
      <BottomNavigation
        className={classes.footer}
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
            to="/turnos"
            icon={<TurnIcon />}
        />
{/*
        <BottomNavigationAction
            label="Mapa"
            value="Mapa"
            component={Link}
            to="/mapa"
            icon={<MapIcon />}
        />
*/}
      </BottomNavigation>
    );
  }
}



const styles = theme => ({
  footer: {
    position: 'fixed',
    bottom: theme.spacing(0),
    width: '100%'
  }
});



export default withStyles(styles)(Footer);
