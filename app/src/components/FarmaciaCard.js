// Importamos librerias instaladas
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

// Pharma image from https://www.freepik.com/free-photos-vectors/woman

// Default export
export default class FarmaciaCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() {
  }


  render() {

    //const style = this.useStyles();
    const { farmacia } = this.props;

    return (
      <Card>

        <CardHeader
          avatar={
            <Avatar aria-label="farmacia" style={{backgroundColor: '#3f51b5'}}>
              {"F" + farmacia.nombre.charAt(0)}
            </Avatar>
          }
          title={"Farmacia " + farmacia.nombre}
          subheader={farmacia.localidad}
        />

        <CardContent style={{textAlign: 'center'}}>
          <p>{farmacia.domicilio}</p>
        </CardContent>

        <CardActions style={{justifyContent: 'space-between'}}>
          <Button size="small" color="primary">
            Ver en Mapa
          </Button>
          <Chip icon={<ScheduleIcon />} label="de Turno" color="primary" size="small"/>
        </CardActions>

      </Card>

    );

  }

}
