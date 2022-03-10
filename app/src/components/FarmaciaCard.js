// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import Chip from '@material-ui/core/Chip';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';


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



  // Return the first letters of the two first words in text
  avatarize(text) {
    const list = text.split(' ')
    var avatar_text = list[0][0].toUpperCase();

    if (list.length > 1) {
      avatar_text = avatar_text + list[1][0].toUpperCase()
    }

    return avatar_text;
  }


  render() {

    const { cur_date, farmacia, classes } = this.props;
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=farmacias&query_place_id=";
    const googleMapsQuery = encodeURI( farmacia.place_id );

    return (
      <Card>

        <CardHeader
          avatar={
            <Avatar aria-label="farmacia" className={classes.avatar}>
              {this.avatarize(farmacia.name)}
            </Avatar>
          }
          title={farmacia.name}
          subheader={farmacia.compound_code}
        />

        <CardContent className={classes.cardContent}>
          <Box>
            <Typography variant="body2">
               <RoomIcon style={{position: 'relative', top: '7px'}} /> {farmacia.formatted_address}
            </Typography>

            <Typography variant="body2">
               <GpsFixedIcon style={{position: 'relative', top: '7px'}} /> Distancia: {farmacia.distance.toPrecision(2) + ' Kms'}
            </Typography>
          </Box>

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

          { farmacia.turnos.includes(cur_date) && <Chip icon={<ScheduleIcon />} label="De Turno Ahora !" color="secondary" size="small"/> }
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
