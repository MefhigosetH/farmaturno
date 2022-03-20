const AWS = require("aws-sdk");

const TABLE_NAME = "farmaturno-farmacias-dev";

// destructure env variables
const { FT_AWS_ACCESS_KEY_ID, FT_AWS_SECRET_ACCESS_KEY, FT_AWS_REGION } = process.env

// gets credentials from ~/.aws/config
AWS.config.update({
    credentials: {
        accessKeyId: FT_AWS_ACCESS_KEY_ID,
        secretAccessKey: FT_AWS_SECRET_ACCESS_KEY
    },
    region: FT_AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    dynamoDb,
    TABLE_NAME
}
