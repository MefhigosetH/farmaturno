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
import MapIcon from '@material-ui/icons/Map';
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


  // Thanks to https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
  humanize(text) {
    const str = text.split("_");

    const partido = str[0]
                    .replace("-", " ")
                    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    const localidad = str[1]
                      .replace("-", " ")
                      .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return localidad + ", " + partido
  }


  render() {

    const { cur_date, farmacia, classes } = this.props;
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=";
    const googleMapsQuery = encodeURI( farmacia.direccion + ", " + this.humanize(farmacia.partido_localidad) );

    return (
      <Card>

        <CardHeader
          avatar={
            <Avatar aria-label="farmacia" className={classes.avatar}>
              {"F" + farmacia.nombre.charAt(0)}
            </Avatar>
          }
          title={"Farmacia " + farmacia.nombre}
          subheader={this.humanize(farmacia.partido_localidad)}
        />

        <CardContent className={classes.cardContent}>
          <p>{farmacia.direccion}</p>
          {farmacia.telefono &&
            <a href={'tel:'+farmacia.telefono} className={classes.tel}>{farmacia.telefono}</a>}
        </CardContent>

        <Divider />

        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            href={googleMapsUrl + googleMapsQuery}
            startIcon={<MapIcon />}
          >
            Ver en Mapa
          </Button>

          { farmacia.turnos.includes(cur_date) && <Chip icon={<ScheduleIcon />} label="de Turno" color="secondary" size="small"/> }
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
