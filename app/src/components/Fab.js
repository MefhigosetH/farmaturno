// Importamos librerias instaladas
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';


// Default export
class FabButton extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const { classes } = this.props;

    return (
      <Fab color="primary" aria-label="compartir" className={classes.fab}>
        <ShareIcon />
      </Fab>
    );
  }
}



const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
});



export default withStyles(styles)(FabButton);
