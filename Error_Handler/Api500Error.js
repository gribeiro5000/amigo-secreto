const BaseError = require('./BaseError.js')
const httpStatusCode = require('./httpStatusCode.js')

class Api500Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCode.INTERNAL_SERVER,
        isOperational = true,
        description = "Internal Server Error"
        
    ) {
        super(name, statusCode, isOperational, description)
    }
}

module.exports = Api500Error