// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ScheduleIcon from '@material-ui/icons/Schedule';
//import RoomIcon from '@material-ui/icons/Room';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


// Default export
class FarmaciaCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() {
  }


  humanize(text) {
    return text.replace( "-", " ")
  }


  render() {

    const { farmacia, classes } = this.props;
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=";
    const googleMapsQuery = encodeURI( farmacia.domicilio + ", " + this.humanize(farmacia.localidad) );

    return (
      <Card>

        <CardHeader
          avatar={
            <Avatar aria-label="farmacia" className={classes.avatar}>
              {"F" + farmacia.nombre.charAt(0)}
            </Avatar>
          }
          title={"Farmacia " + farmacia.nombre}
          subheader={farmacia.localidad}
        />

        <CardContent className={classes.cardContent}>
          <p>{farmacia.domicilio}</p>
          {farmacia.telefono &&
            <a href={'tel:'+farmacia.telefono} className={classes.tel}>{farmacia.telefono}</a>}
        </CardContent>

        <Divider />

        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" variant="contained" href={googleMapsUrl + googleMapsQuery}>
            Ver en Mapa
          </Button>
          { farmacia.turno && <Chip icon={<ScheduleIcon />} label="de Turno" color="secondary" size="small"/> }
        </CardActions>

      </Card>

    );

  }


}



const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  cardContent: {
    textAlign: 'center',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  tel: {
    color: theme.palette.text.primary
  }
});



export default withStyles(styles)(FarmaciaCard);
