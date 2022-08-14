const { TABLE_NAME, dynamoDb } = require("../dynamodb-client")

async function getPlacesByLocation() {

    console.log('Realizando consulta...');

    var params = {
        TableName : TABLE_NAME,
    };

    return await dynamoDb.scan(params).promise();
}

function convertToGeoJson( farmacias ) {
    console.log('Convirtiendo resultado a formato GeoJSON...');

    var geojson = {
        "type": "FeatureCollection",
        "features": []
    };

    farmacias.forEach( (farmacia) => {
        let feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [farmacia.lng, farmacia.lat]
            },
            "properties": {
                "name": farmacia.name
            }
        };

        geojson.features.push( feature );
    });

    return geojson;
}

exports.handler = async function(event, context) {

    console.log('Solicitando farmacias...');

    var result = await getPlacesByLocation();

    if( 'format' in event.queryStringParameters &&
        event.queryStringParameters.format == 'geojson' )
    {
      result = convertToGeoJson( result['Items'] );
    }

    return {
        statusCode: 200,
        headers: {
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify(result),
    };
}

