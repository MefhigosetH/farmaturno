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

    var API_URL = '/api';

    if( process.env.NODE_ENV === 'development' ){
        API_URL = "/.netlify/functions";
    }

    const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [lng, lat],
        zoom: zoom
    });

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: false
        })
    );

    map.on('load', () => {
        map.addSource('farmacias', {
          type: 'geojson',
          data: API_URL + '/farmacias?format=geojson'
        });

        // https://github.com/mapbox/mapbox-gl-styles/tree/master/sprites/basic-v8/_svg
        // https://gis.stackexchange.com/a/187348
        // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
        // https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
        map.addLayer({
            'id': 'farmacias-layer',
            'type': 'circle',
            'source': 'farmacias',
            'paint': {
                'circle-radius': 4,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white'
            }
        });
    });


/*
    // Create a new marker.
    new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
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
