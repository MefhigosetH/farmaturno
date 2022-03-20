const { TABLE_NAME, dynamoDb } = require("../dynamodb-client")

exports.handler = async function(event, context) {
    // your server-side functionality
    var params = {
        TableName : TABLE_NAME,
    };

    let result = await dynamoDb.scan(params).promise();

    return {
        statusCode: 200,
        headers: {
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify(result),
    };
}

