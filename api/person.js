// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.createPerson = async (event, context) => {
    try {
        // const ret = await axios(url);
        var body = JSON.parse(event.body);
        var fname = body.fname;
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Create Person - ' + fname,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

exports.getPerson = async (event, context) => {
    try {
        var personId = event.queryStringParameters["id"];
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get Person - ' + personId,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

exports.authPerson = async (event, context) => {
    try {
        var personId = event.queryStringParameters["id"];
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get Person - ' + personId,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
