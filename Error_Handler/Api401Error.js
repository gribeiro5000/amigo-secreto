const BaseError = require('./BaseError.js');
const httpStatusCode = require('./httpStatusCode');

class Api401Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.UNAUTHORAZED,
    isOperational = true,
    description = 'Não autorizado',
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Api401Error;
