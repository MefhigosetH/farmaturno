// Importamos librerias instaladas
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import GitHubIcon from '@mui/icons-material/GitHub';

// Default export
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const title = this.props.title || 'FarmaTurno App';

    return (
      <AppBar position="sticky" color="primary" enableColorOnDark>

        <Toolbar>

          <IconButton edge="start" aria-label="menu" href="https://farmaturno.com.ar">
            <LocalPharmacyIcon />
          </IconButton>

          <Typography variant="h6" style={{flexGrow: 1}}>
            {title} | <small>Almirante Brown</small>
          </Typography>

          <IconButton aria-label="contribute" href="https://github.com/MefhigosetH/farmaturno">
            <GitHubIcon />
          </IconButton>

        </Toolbar>

      </AppBar>
    );
  }
}
