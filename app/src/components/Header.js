// Importamos librerias instaladas
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import GitHubIcon from '@material-ui/icons/GitHub';

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

          <IconButton edge="start" aria-label="menu" href="https://farmaturno.com.ar">
            <LocalPharmacyIcon />
          </IconButton>

          <Typography variant="h6" style={{flexGrow: 1}}>
            {title}
          </Typography>

          <IconButton aria-label="contribute" href="https://github.com/MefhigosetH/farmaturno">
            <GitHubIcon />
          </IconButton>

        </Toolbar>

      </AppBar>
    );
  }
}
