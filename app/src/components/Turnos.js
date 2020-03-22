// Importamos librerias instaladas
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Pharma image from https://www.freepik.com/free-photos-vectors/woman

// Default export
export default class Turnos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  useStyles(){
    return  makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
  }


  render() {

    const classes = this.useStyles();

    return (
      <Grid container justify='center' spacing={10} style={{padding: '24px'}} >

        <Grid key={0} item xs={12} sm={6} md={4} lg={4} xl={3} >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image="./farmacia-default.jpg"
                title="Famacia Default"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Farma24
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Gorriti 3000, Rafael Calzada
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    );
  }
}
