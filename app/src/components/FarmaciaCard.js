import React from 'react';
import './FarmaciaCard.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MapIcon from '@mui/icons-material/Map';
import RoomIcon from '@mui/icons-material/Room';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CallIcon from '@mui/icons-material/Call';


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
            <Avatar aria-label="farmacia" className="avatar">
              {this.avatarize(farmacia.name)}
            </Avatar>
          }
          title={farmacia.name}
          subheader={farmacia.compound_code}
        />

        <CardContent className="cardContent">
          <Box>
            <Typography variant="body2">
               <RoomIcon style={{position: 'relative', top: '7px'}} /> {farmacia.formatted_address}
            </Typography>

            <Typography variant="body2">
               <GpsFixedIcon style={{position: 'relative', top: '7px'}} /> Distancia: {farmacia.distance.toPrecision(2) + ' Kms'}

               { farmacia.phone &&
                   <span> | <CallIcon style={{position: 'relative', top: '7px'}} /> <a href={'tel:'+farmacia.phone} className="tel">{farmacia.phone}</a></span>
               }
            </Typography>

          </Box>

        </CardContent>

        <Divider />

        <CardActions className="cardActions">
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

export default FarmaciaCard;
