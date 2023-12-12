const BaseError = require("./BaseError.js");
const httpStatusCode = require("./httpStatusCode");

class Api404Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCode.NOT_FOUND,
        description = 'not found',
        isOperational = true
    ){
        super(name, statusCode, isOperational, description)
    }
}

module.exports = Api404Error