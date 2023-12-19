const BaseError = require("./BaseError.js");
const httpStatusCode = require("./httpStatusCode");

class Api404Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.NOT_FOUND,
    isOperational = true,
    description = "não encontrado",
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Api404Error;
