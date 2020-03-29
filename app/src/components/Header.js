// Importamos librerias instaladas
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';

// Default export
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const title = this.props.title || 'FarmaTurno App';

    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <LocalPharmacyIcon />
          </IconButton>
          <Typography variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
