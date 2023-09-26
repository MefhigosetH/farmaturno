// https://docs.netlify.com/functions/scheduled-functions/

exports.handler = async function(event, context) {
    console.log("Received event:", event);

    return {
        statusCode: 200,
    };
};
