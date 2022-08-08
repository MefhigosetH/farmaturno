// Importamos librerias instaladas
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import CircularProgress from '@material-ui/core/CircularProgress';

// Default export
class Mapa extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      farmacias: [],
      turnos: [],
      lat: -34.7989032,
      lng: -58.3611676,
      zoom: 13
    };

    this.mapContainer = React.createRef();
  }



  async componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    console.log(mapboxgl.accessToken);

    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [lng, lat],
        zoom: zoom
    });

    // Create a new marker.
    new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
/*
    map.addSource('farmacias', {
      type: 'geojson',
      data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
    });
*/
  }


  render() {

//    const { classes } = this.props;
//    const farmacias = this.state.farmacias;

    if(this.state.isLoading) {
      return ( <React.Fragment><CircularProgress /></React.Fragment> );
    }

    return (
        <div ref={this.mapContainer} style={{ height: '87vh' }}></div>
    );

  }

}



const styles = theme => ({
  blockquote: {
    background: theme.palette.background.paper,
    borderLeft: '5px solid #ffe564',
    marginTop: '12px',
    padding: '10px 24px'
  },
  mapStyle: {
    height: '400px'
  }
});



export default withStyles(styles)(Mapa);
